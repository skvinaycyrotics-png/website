import nodemailer from 'nodemailer';

// ─── Security: escape HTML for email templates ────────────────
function escapeHtml(unsafe: string | null | undefined): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ─── SMTP Transporter ────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

const FROM_NAME = 'CYROTICS Technologies';
const FROM_EMAIL = process.env.SMTP_USER || 'noreply@cyrotics.in';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@cyrotics.in';

// ─── Types ───────────────────────────────────────────────────
interface ContactFormData {
  salutation?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  company?: string | null;
  designation?: string | null;
  country: string;
  city: string;
  address?: string | null;
  pincode?: string | null;
  subject: string;
  department?: string | null;
  projectType?: string | null;
  projectLocation?: string | null;
  projectBudget?: string | null;
  priority?: string | null;
  contactMethod?: string | null;
  contactTime?: string | null;
  howDidYouHear?: string | null;
  nda?: string | null;
  message: string;
}

// ─── Utility: optional field row ─────────────────────────────
function row(label: string, value: string | null | undefined): string {
  if (!value) return '';
  const escapedValue = escapeHtml(value);
  return `
    <tr>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#1f2937;font-size:13px;">${escapedValue}</td>
    </tr>`;
}

// ─── Send Notification Email (to admin) ──────────────────────
export async function sendNotificationEmail(data: ContactFormData): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[Email] SMTP credentials not configured — skipping notification email.');
      return false;
    }

    const fullName = [data.salutation, data.firstName, data.lastName]
      .filter(Boolean)
      .map(s => escapeHtml(s))
      .join(' ');
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:640px;margin:24px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0a0b1e 0%,#1a1b3e 100%);padding:28px 32px;">
      <h1 style="margin:0;color:#22d3ee;font-size:20px;font-weight:700;letter-spacing:0.5px;">🔔 New Inquiry Received</h1>
      <p style="margin:6px 0 0;color:#94a3b8;font-size:12px;letter-spacing:1px;text-transform:uppercase;">${timestamp} IST</p>
    </div>

    <!-- Body -->
    <div style="padding:24px 32px;">
      <h2 style="margin:0 0 4px;color:#0f172a;font-size:16px;">From: ${fullName}</h2>
      <p style="margin:0 0 20px;color:#64748b;font-size:13px;">${data.email} &bull; ${data.countryCode} ${data.phone}</p>

      <table style="width:100%;border-collapse:collapse;">
        ${row('Subject', data.subject)}
        ${row('Department', data.department)}
        ${row('Company', data.company)}
        ${row('Designation', data.designation)}
        ${row('Country', data.country)}
        ${row('City', data.city)}
        ${row('Address', data.address)}
        ${row('Pin Code', data.pincode)}
        ${row('Project Type', data.projectType)}
        ${row('Project Location', data.projectLocation)}
        ${row('Budget Range', data.projectBudget)}
        ${row('Priority', data.priority)}
        ${row('Preferred Contact', data.contactMethod)}
        ${row('Best Time', data.contactTime)}
        ${row('Heard About Us', data.howDidYouHear)}
        ${row('NDA Requested', data.nda === 'on' ? 'Yes' : null)}
      </table>

      <div style="margin-top:20px;padding:16px;background:#f8fafc;border-left:4px solid #22d3ee;border-radius:6px;">
        <p style="margin:0 0 6px;color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Message</p>
        <p style="margin:0;color:#1e293b;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e5e7eb;text-align:center;">
      <p style="margin:0;color:#94a3b8;font-size:11px;">This is an automated notification from the CYROTICS website contact form.</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: NOTIFICATION_EMAIL,
      subject: `🔔 New Inquiry: ${data.subject} — ${data.firstName} ${data.lastName}`,
      html,
    });

    console.log('[Email] Notification email sent to', NOTIFICATION_EMAIL);
    return true;
  } catch (error) {
    console.error('[Email] Failed to send notification email:', error);
    return false;
  }
}

// ─── Send Auto-Reply Email (to user) ─────────────────────────
export async function sendAutoReplyEmail(data: ContactFormData): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[Email] SMTP credentials not configured — skipping auto-reply email.');
      return false;
    }

    const fullName = [data.salutation, data.firstName, data.lastName]
      .filter(Boolean)
      .map(s => escapeHtml(s))
      .join(' ');

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:24px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0a0b1e 0%,#1a1b3e 100%);padding:32px;text-align:center;">
      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">CYROTICS TECHNOLOGIES</h1>
      <p style="margin:6px 0 0;color:#22d3ee;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Enterprise Technology Solutions</p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <h2 style="margin:0 0 16px;color:#0f172a;font-size:18px;">Thank you, ${fullName}!</h2>
      
      <p style="color:#475569;font-size:14px;line-height:1.7;margin:0 0 16px;">
        We have received your inquiry regarding <strong>"${data.subject}"</strong> and our team is already reviewing it. 
        You can expect a response from us within <strong>24 business hours</strong>.
      </p>

      <div style="padding:16px;background:#f0fdfa;border:1px solid #99f6e4;border-radius:8px;margin:20px 0;">
        <p style="margin:0;color:#0d9488;font-size:13px;font-weight:600;">📋 Your Inquiry Summary</p>
        <table style="width:100%;margin-top:10px;border-collapse:collapse;">
          ${row('Subject', data.subject)}
          ${row('Message', data.message.length > 120 ? escapeHtml(data.message.substring(0, 120)) + '...' : escapeHtml(data.message))}
        </table>
      </div>

      <p style="color:#475569;font-size:14px;line-height:1.7;margin:16px 0 0;">
        If you have any urgent requirements, please don't hesitate to reach us at:
      </p>
      <ul style="color:#475569;font-size:13px;line-height:2;padding-left:20px;">
        <li>📞 <a href="tel:+919999295636" style="color:#0ea5e9;text-decoration:none;">+91 99992 95636</a></li>
        <li>✉️ <a href="mailto:info@cyrotics.in" style="color:#0ea5e9;text-decoration:none;">info@cyrotics.in</a></li>
      </ul>
    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;background:#0a0b1e;text-align:center;">
      <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;">CYROTICS TECHNOLOGIES PVT. LTD.</p>
      <p style="margin:0;color:#64748b;font-size:10px;">This is an automated email. Please do not reply directly to this message.</p>
    </div>
  </div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: data.email,
      subject: `Thank you for contacting CYROTICS Technologies — We've received your inquiry`,
      html,
    });

    console.log('[Email] Auto-reply sent to', data.email);
    return true;
  } catch (error) {
    console.error('[Email] Failed to send auto-reply email:', error);
    return false;
  }
}
