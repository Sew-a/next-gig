"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FormState, SubmitStatus, ContactResponse } from "./types";
import "./styles.scss";

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sevak-avetisyan",
    href: "https://www.linkedin.com/in/sevak-avetisyan-6122411b2/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/Sew-a",
    href: "https://github.com/Sew-a",
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    value: "@sew_rem",
    href: "https://www.instagram.com/sew_rem?igsh=d294MHpybDF5N2V1",
    icon: InstagramIcon,
  },
  {
    label: "Email",
    value: "sevavetisyan97@gmail.com",
    href: "mailto:sevavetisyan97@gmail.com",
    icon: Mail,
  },
];

const PORTRAIT =
  "https://res.cloudinary.com/dlggumsot/image/upload/v1779294439/portfoliopic_ubmfda.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: ContactResponse = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Something went wrong. Please try again or email me directly.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section className="contact-page">
      <motion.div
        className="contact-page__intro"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <span className="contact-page__label">{`// CONTACT`}</span>
        <h1 className="contact-page__title">
          contact<span className="contact-page__dot">.</span>
        </h1>
        <p className="contact-page__lead">
          Get in touch with me via social media or send me an email.
        </p>
      </motion.div>

      <div className="contact-page__grid">
        <motion.div
          className="contact-page__socials"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          {SOCIALS.map((social) => {
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-social"
              >
                <span className="contact-social__icon">
                  <social.icon size={22} />
                </span>
                <span className="contact-social__body">
                  <span className="contact-social__label">{social.label}</span>
                  <span className="contact-social__value">{social.value}</span>
                </span>
                <ArrowUpRight size={18} className="contact-social__arrow" />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          className="contact-page__form-card"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <h2 className="contact-page__form-title">Send me an email</h2>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or question..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="spin" /> Sending…
                </>
              ) : (
                <>Send Message <ArrowUpRight size={18} /></>
              )}
            </button>

            {status === "success" && (
              <p className="contact-form__feedback contact-form__feedback--success">
                <CheckCircle2 size={18} />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact-form__feedback contact-form__feedback--error">
                <AlertCircle size={18} />
                {errorMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <motion.div
        className="contact-page__portrait"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.45}
      >
        <div className="contact-page__portrait-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PORTRAIT} alt="Sevak Avetisyan" />
        </div>
        <p className="contact-page__portrait-caption">
          Based in Yerevan, Armenia · Working worldwide, remote-friendly
        </p>
      </motion.div>
    </section>
  );
}
