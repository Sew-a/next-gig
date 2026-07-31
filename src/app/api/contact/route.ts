import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "edge";

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  message: z.string().min(1).max(4000),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please fill in all fields with valid values.", details: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // const { name, email, message } = parsed.data;

  /*
  const host = process.env.CONTACT_SMTP_HOST;
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const from = process.env.CONTACT_EMAIL_FROM || user;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!host || !user || !pass || !to) {
    return NextResponse.json(
      { error: "Contact email is not configured on the server yet." },
      { status: 501 },
    );
  }

  try {
    const transport = nodemailer.createTransport({
      host,
      port: Number(process.env.CONTACT_SMTP_PORT || 587),
      secure: Number(process.env.CONTACT_SMTP_PORT || 587) === 465,
      auth: { user, pass },
    });

    await transport.sendMail({
      from: from ? `"Portfolio Contact" <${from}>` : user,
      replyTo: email,
      to,
      subject: `New message from ${name} via portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #333;border-radius:8px;overflow:hidden">
          <div style="background:#0b0714;color:#00f0ff;padding:16px 24px;font-weight:700">New portfolio message</div>
          <div style="padding:24px">
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p style="white-space:pre-line;color:#222"><strong>Message:</strong><br/>${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again or email me directly." },
      { status: 500 },
    );
  }
  */

  return NextResponse.json({ ok: true });
}

/*
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
*/
