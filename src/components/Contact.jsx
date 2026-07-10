import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "../data/resumeData";
import "./Contact.css";

const DETAILS = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s|-/g, "")}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "shruthyy-m-b", href: profile.linkedin },
  { icon: FiGithub, label: "GitHub", value: "View profile", href: profile.github },
  { icon: FiMapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let's build something.</h2>
          <p className="section-sub">
            Open to software development and AI engineering roles — reach out
            directly or send a message and I'll get back to you.
          </p>

          <ul className="contact-details">
            {DETAILS.map((d) => (
              <li key={d.label}>
                <span className="contact-icon">
                  <d.icon aria-hidden="true" />
                </span>
                <div>
                  <span className="contact-label">{d.label}</span>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-cursor-hover
                    >
                      {d.value}
                    </a>
                  ) : (
                    <span>{d.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about the opportunity or project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary contact-submit">
            <FiSend aria-hidden="true" /> Send message
          </button>
          <p className="contact-form-note">
            Opens your email client with this message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
