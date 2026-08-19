import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Verify the Resend API key is available.
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

    // Verify the destination email is available.
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

    // Initialize Resend after verifying the API key exists.
    const resend = new Resend(apiKey);

    const body = await request.json();

    const {
      name,
      email,
      phone,
      city,
      address,
      comments,
    } = body;

    // Server-side validation.
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

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Phoenix",
    });

    /*
     * Send the lead notification to Darek.
     *
     * replyTo allows you to simply click Reply in Gmail
     * and respond directly to the prospective seller.
     */
    const { error: ownerEmailError } =
      await resend.emails.send({
        from: "Darek Dowsett <darek@azheartsinhomes.com>",
        to: destinationEmail,
        replyTo: email,
        subject: `New Home Valuation Request - ${name}`,
        html: `
          <h2>New Home Valuation Request</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>City:</strong>
            ${city || "Not provided"}
          </p>

          <p>
            <strong>Property Address:</strong>
            ${address}
          </p>

          <p>
            <strong>Submitted:</strong>
            ${submittedAt}
          </p>

          <h3>Additional Information</h3>

          <p>
            ${comments || "No additional information provided."}
          </p>
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

    /*
     * Send confirmation email to the prospective seller.
     */
    const { error: confirmationEmailError } =
      await resend.emails.send({
        from: "Darek Dowsett <darek@azheartsinhomes.com>",
        to: email,
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

      /*
       * The lead email was successfully delivered to Darek,
       * so the lead itself should still be considered successful.
       */
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