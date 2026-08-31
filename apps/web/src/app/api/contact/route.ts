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

    const apiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.RESEND_TO_EMAIL;
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

    const body = await request.json();
    const turnstileToken = String(body.turnstileToken || "").trim();

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
      turnstileResult.action !== "contact" ||
      !allowedTurnstileHostnames.has(String(turnstileResult.hostname || ""))
    ) {
      console.warn(
        "Contact Turnstile verification rejected:",
        turnstileResult["error-codes"] || [],
        turnstileResult.action || "unknown-action",
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

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const interest = String(body.interest || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(message);

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Phoenix",
    });

    const { error: ownerEmailError } = await resend.emails.send({
      from: "Darek Dowsett <darek@azheartsinhomes.com>",
      to: destinationEmail,
      replyTo: email,
      subject: `New Website Contact - ${name}`,
      html: `
        <h2>New Website Contact</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
        <p><strong>Interested In:</strong> ${safeInterest || "Not specified"}</p>
        <p><strong>Submitted:</strong> ${submittedAt}</p>

        <h3>Message</h3>

        <p>${safeMessage}</p>
      `,
    });

    if (ownerEmailError) {
      console.error("Resend contact email error:", ownerEmailError);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    const { error: confirmationEmailError } = await resend.emails.send({
      from: "Darek Dowsett <darek@azheartsinhomes.com>",
      to: email,
      subject: "Thank You for Contacting AZ Hearts In Homes",
      html: `
        <h2>Thank You!</h2>

        <p>Hi ${safeName},</p>

        <p>
          Thank you for reaching out to
          <strong>AZ Hearts In Homes</strong>.
        </p>

        <p>
          I've received your message and will get back to you
          as soon as possible.
        </p>

        <p>
          I appreciate the opportunity to help with your real
          estate needs.
        </p>

        <br />

        <strong>Darek Dowsett</strong><br />
        AZ Hearts In Homes<br />
        Real Estate With Heart<br />
        (480) 773-3213
      `,
    });

    if (confirmationEmailError) {
      console.error(
        "Resend contact confirmation error:",
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
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending your message.",
      },
      { status: 500 }
    );
  }
}
