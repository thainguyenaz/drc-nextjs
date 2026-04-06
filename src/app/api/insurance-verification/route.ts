import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const results = { hubspot: false, email: false };

  try {
    const formData = await request.formData();

    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const insuranceCarrier = formData.get("insurance_carrier") as string;
    const memberId = formData.get("member_id") as string;
    const dateOfBirth = formData.get("date_of_birth") as string;
    const howDidYouHear = formData.get("how_did_you_hear") as string;
    const frontCard = formData.get("front_card") as File | null;
    const backCard = formData.get("back_card") as File | null;

    // STEP 1: HubSpot submission (primary)
    try {
      const hubspotRes = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/48050688/5fc5394d-3806-4291-a308-da475add5c6c",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname", value: firstName },
              { name: "lastname", value: lastName },
              { name: "email", value: email },
              { name: "phone", value: phone },
              { name: "insurance_carrier", value: insuranceCarrier },
              { name: "member_id", value: memberId || "" },
              { name: "date_of_birth", value: dateOfBirth },
              { name: "how_did_you_hear", value: howDidYouHear || "" },
            ],
            context: {
              pageUri: "https://www.desertrecoverycenters.com/insurance",
              pageName: "Insurance Verification",
            },
          }),
        }
      );
      results.hubspot = hubspotRes.ok;
      if (!hubspotRes.ok) {
        const err = await hubspotRes.text();
        console.error("HubSpot error:", hubspotRes.status, err);
      }
    } catch (e) {
      console.error("HubSpot exception:", e);
    }

    // STEP 2: Email with attachments (secondary, never blocks success)
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.office365.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
        tls: { ciphers: "SSLv3", rejectUnauthorized: false },
      });

      const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

      if (frontCard && frontCard.size > 0) {
        const frontBuffer = Buffer.from(await frontCard.arrayBuffer());
        const ext = frontCard.name.split(".").pop() || "jpg";
        attachments.push({
          filename: `${firstName}_${lastName}_insurance_front.${ext}`,
          content: frontBuffer,
          contentType: frontCard.type,
        });
      }

      if (backCard && backCard.size > 0) {
        const backBuffer = Buffer.from(await backCard.arrayBuffer());
        const ext = backCard.name.split(".").pop() || "jpg";
        attachments.push({
          filename: `${firstName}_${lastName}_insurance_back.${ext}`,
          content: backBuffer,
          contentType: backCard.type,
        });
      }

      await transporter.verify();
      await transporter.sendMail({
        from: `"Desert Recovery Centers" <${process.env.SMTP_USER}>`,
        to: process.env.ADMISSIONS_EMAIL || "admissions@desertrecoverycenters.com",
        replyTo: email,
        subject: `Insurance Verification - ${firstName} ${lastName}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px">
            <h2 style="color:#1a1a1a">New Insurance Verification Request</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr style="background:#f9f7f3">
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold;width:40%">Name</td>
                <td style="padding:10px;border:1px solid #ddd">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold">Email</td>
                <td style="padding:10px;border:1px solid #ddd"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="background:#f9f7f3">
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold">Phone</td>
                <td style="padding:10px;border:1px solid #ddd"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold">Insurance Carrier</td>
                <td style="padding:10px;border:1px solid #ddd">${insuranceCarrier}</td>
              </tr>
              <tr style="background:#f9f7f3">
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold">Member ID</td>
                <td style="padding:10px;border:1px solid #ddd">${memberId || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold">Date of Birth</td>
                <td style="padding:10px;border:1px solid #ddd">${dateOfBirth}</td>
              </tr>
              <tr style="background:#f9f7f3">
                <td style="padding:10px;border:1px solid #ddd;font-weight:bold">How Did You Hear</td>
                <td style="padding:10px;border:1px solid #ddd">${howDidYouHear || "Not provided"}</td>
              </tr>
            </table>
            <p style="margin-top:16px;padding:12px;background:#fff3cd;border-radius:4px;font-size:13px;color:#856404">
              Insurance card images are attached to this email.
              This submission has also been sent to HubSpot CRM.
            </p>
            <p style="margin-top:8px;font-size:11px;color:#999">
              Sent from Desert Recovery Centers website.
              Reply directly to this email to contact the applicant.
            </p>
          </div>
        `,
        attachments,
      });
      results.email = true;
      console.log("Email sent successfully");
    } catch (e: unknown) {
      const err = e as Error;
      console.error("Email failed (non-blocking):", {
        message: err.message,
        code: (err as NodeJS.ErrnoException).code,
      });
    }

    console.log("Submission results:", results);

    // Success if HubSpot worked
    if (results.hubspot) {
      return NextResponse.json({
        success: true,
        emailSent: results.email,
      });
    }

    // Both failed
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  } catch (error) {
    console.error("Insurance verification error:", error);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
