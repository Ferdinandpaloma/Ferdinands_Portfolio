import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Dynamically import Resend to avoid build-time errors
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Get recipient email from environment or use a default
    const recipientEmail = process.env.CONTACT_EMAIL || 'ferdinand.paloma@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
              }
              .container {
                background-color: #ffffff;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .header {
                border-bottom: 3px solid #ef4444;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .header h1 {
                color: #1e293b;
                margin: 0;
                font-size: 24px;
              }
              .header .subtitle {
                color: #64748b;
                font-size: 14px;
                margin-top: 5px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #475569;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                color: #1e293b;
                font-size: 16px;
                padding: 10px;
                background-color: #f8fafc;
                border-left: 3px solid #ef4444;
                border-radius: 4px;
              }
              .message {
                background-color: #f8fafc;
                border-left: 3px solid #ef4444;
                padding: 15px;
                border-radius: 4px;
                white-space: pre-wrap;
                color: #1e293b;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                font-size: 12px;
                color: #94a3b8;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🏁 New Contact Form Submission</h1>
                <div class="subtitle">FastLane Portfolio</div>
              </div>
              
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${name} (${email})</div>
              </div>
              
              <div class="field">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from your portfolio contact form.</p>
                <p>Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission
FastLane Portfolio

From: ${name} (${email})
Subject: ${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      // Return more specific error message
      const errorMessage = error.message || 'Failed to send email';
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
