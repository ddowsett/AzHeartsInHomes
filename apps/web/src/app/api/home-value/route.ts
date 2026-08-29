import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  escapeHtml,
  isAllowedFormRequest,
} from "@/lib/form-security";

const turnstileSiteVerifyUrl =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const allowedTurnstileHostnames = new Set([
  "azheartsinhomes.com",
  "www.azheartsinhomes.com",
]);

export async function POST(request: Request) {
  try {
    if (!isAllowedFormRequest(request)) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to process this request.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();
    const turnstileToken = String(body.turnstileToken || "").trim();
    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecretKey) {
      console.error("TURNSTILE_SECRET_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Form security is not configured.",
        },
        { status: 500 }
      );
    }

    if (!turnstileToken || turnstileToken.length > 2048) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the security check and try again.",
        },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const turnstileResponse = await fetch(turnstileSiteVerifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: turnstileSecretKey,
        response: turnstileToken,
        ...(clientIp ? { remoteip: clientIp } : {}),
      }),
    });

    if (!turnstileResponse.ok) {
      console.error(
        "Turnstile verification request failed:",
        turnstileResponse.status
      );

      return NextResponse.json(
        {
          success: false,
          message: "Unable to verify the security check. Please try again.",
        },
        { status: 403 }
      );
    }

    const turnstileResult = await turnstileResponse.json();

    if (
      !turnstileResult.success ||
      !allowedTurnstileHostnames.has(String(turnstileResult.hostname || ""))
    ) {
      console.warn(
        "Home valuation Turnstile verification rejected:",
        turnstileResult["error-codes"] || [],
        turnstileResult.hostname || "unknown-host"
      );

      return NextResponse.json(
        {
          success: false,
          message: "The security check could not be verified. Please try again.",
        },
        { status: 403 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const destinationEmail = process.env.RESEND_TO_EMAIL;

    if (!destinationEmail) {
      console.error("RESEND_TO_EMAIL is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Destination email is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const {
      name,
      email,
      phone,
      city,
      address,
      comments,
    } = body;

    if (!name?.trim() || !email?.trim() || !address?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, email, and property address are required.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safePhone = escapeHtml(String(phone || "").trim());
    const safeCity = escapeHtml(String(city || "").trim());
    const safeAddress = escapeHtml(String(address).trim());
    const safeComments = escapeHtml(String(comments || "").trim());

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Phoenix",
    });

    const { error: ownerEmailError } =
      await resend.emails.send({
        from: "Darek Dowsett <darek@azheartsinhomes.com>",
        to: destinationEmail,
        replyTo: String(email).trim(),
        subject: `New Home Valuation Request - ${String(name).trim()}`,
        html: `
          <h2>New Home Valuation Request</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
          <p><strong>City:</strong> ${safeCity || "Not provided"}</p>
          <p><strong>Property Address:</strong> ${safeAddress}</p>
          <p><strong>Submitted:</strong> ${submittedAt}</p>

          <h3>Additional Information</h3>
          <p>${safeComments || "No additional information provided."}</p>
        `,
      });

    if (ownerEmailError) {
      console.error(
        "Resend owner email error:",
        ownerEmailError
      );

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send the valuation request.",
        },
        { status: 500 }
      );
    }

    const { error: confirmationEmailError } =
      await resend.emails.send({
        from: "Darek Dowsett <darek@azheartsinhomes.com>",
        to: String(email).trim(),
        subject:
          "We've Received Your Home Valuation Request",
        html: `
          <h2>Thank You!</h2>

          <p>
            Thank you for requesting a complimentary home
            valuation from
            <strong>AZ Hearts In Homes</strong>.
          </p>

          <p>
            I'll personally prepare a Comparative Market
            Analysis for your property and contact you soon.
          </p>

          <p>
            I appreciate the opportunity to earn your business.
          </p>

          <br />

          <strong>Darek Dowsett</strong><br />
          AZ Hearts In Homes<br />
          Real Estate With Heart
        `,
      });

    if (confirmationEmailError) {
      console.error(
        "Resend confirmation email error:",
        confirmationEmailError
      );

      return NextResponse.json({
        success: true,
        confirmationSent: false,
      });
    }

    return NextResponse.json({
      success: true,
      confirmationSent: true,
    });
  } catch (error) {
    console.error(
      "Home valuation API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while processing the request.",
      },
      { status: 500 }
    );
  }
}
