import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <main className="contact-section" aria-labelledby="contact-title">
      <section className="contact-hero">
        <div className="container">
          <h1 id="contact-title">Get in Touch</h1>
          <p className="lead">
            Have questions or need a repair? We’re here to help you extend the
            life of your electronics.
          </p>
        </div>
      </section>

      <section className="contact-body container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:info@electronicsrepairgarage.com">info@electronicsrepairgarage.com</a></p>
            <p>Phone: <a href="tel:+16045551234">+1 (604) 555-1234</a></p>
            <p>Location: Mobile pick up and drop off in Coquitlam area</p>
            <p>Hours: Mon–Sat, 9:00 AM – 6:00 PM</p>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
