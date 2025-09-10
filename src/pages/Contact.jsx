import React, { useState } from "react";
import "../styles/Contact.css";

// 👉 for local dev, backend is on 3000; update to your deployed API later
const API_URL = "http://localhost:5000/contact";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (if filled, do nothing but pretend success)
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: data.get("name")?.toString().trim(),
      email: data.get("email")?.toString().trim(),
      message: data.get("message")?.toString().trim(),
      company: "" // honeypot stays empty
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg =
          body?.errors?.map?.((e) => `${e.path}: ${e.message}`).join(", ") ||
          body?.error ||
          "Something went wrong";
        throw new Error(msg);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err.message || "Request failed");
      setStatus("error");
    }
  }

  return (
    <main className="contact-section" aria-labelledby="contact-title">
      <section className="contact-hero">
        <div className="container">
          <h1 id="contact-title">Get in Touch</h1>
          <p className="lead">Quick message. We reply by email.</p>
        </div>
      </section>

      <section className="contact-body container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:info@electronicsrepairgarage.ca">info@electronicsrepairgarage.ca</a></p>
            <p>Phone: <a href="tel:+16045551234">+1 604 555 1234</a></p>
            <p>Location: Metro Vancouver, BC</p>
            <p>Hours: Mon–Sat, 9:00 AM – 6:00 PM</p>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form onSubmit={onSubmit} noValidate>
              {/* Honeypot for bots */}
              <input type="text" name="company" tabIndex="-1" autoComplete="off" style={{ display: "none" }} />

              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />

              <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="form-ok" role="status">Thanks! We’ll get back to you shortly.</p>
              )}
              {status === "error" && (
                <p className="form-err" role="alert">Couldn’t send: {error}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
