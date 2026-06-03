import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Verplichte velden ontbreken." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Nova Automations <info@nova-automations.com>",
      to: ["info@nova-automations.com"],
      replyTo: email,
      subject: `Nieuw bericht van ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #f97316, #fbbf24); padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; color: white; font-size: 20px;">Nieuw contactformulier bericht</h1>
          </div>
          <div style="background: #ffffff; border: 1px solid #f3f4f6; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px;">Naam</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">E-mail</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Bedrijf</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Dienst</td><td style="padding: 8px 0;"><span style="background: #fff7ed; color: #ea580c; padding: 2px 10px; border-radius: 999px; font-size: 12px; font-weight: 600;">${service}</span></td></tr>` : ""}
            </table>
            <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #f97316;">
              <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Bericht</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Beantwoord deze e-mail direct om terug te schrijven naar ${email}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Versturen mislukt." }, { status: 500 });
  }
}
