const express = require("express");
const { z } = require("zod");
const nodemailer = require("nodemailer");

const router = express.Router();

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  message: z.string().min(5).max(5000),
  company: z.string().optional()
});

// Create Postmark SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,          // smtp.postmarkapp.com
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,                        // STARTTLS
  auth: {
    user: process.env.SMTP_USER,        // your Postmark Server token
    pass: process.env.SMTP_PASS         // same token
  }
});

router.post("/", async (req, res) => {
  const result = ContactSchema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.issues.map(i => ({
      path: i.path.join("."),
      message: i.message
    }));
    return res.status(400).json({ ok: false, errors });
  }

  const data = result.data;
  if (data.company) return res.json({ ok: true }); // honeypot

  // 🔎 DEBUG: confirm the SMTP values we will use
  console.log("SMTP_HOST:", process.env.SMTP_HOST);
  console.log("SMTP_PORT:", process.env.SMTP_PORT);

  try {
    await transporter.sendMail({
      to: process.env.SEND_TO,
      from: process.env.FROM_EMAIL,     // must be a verified sender in Postmark
      replyTo: `${data.name} <${data.email}>`,
      subject: `New contact from ${data.name}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`
    });

    return res.json({ ok: true, sent: true });
  } catch (err) {
    console.error("Email error:", err?.message || err);
    return res.status(500).json({ ok: false, error: "Email failed" });
  }
});

module.exports = router;
