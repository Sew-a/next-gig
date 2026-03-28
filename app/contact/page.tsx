"use client";
import { useState } from "react";
import "./styles.scss";

import { HeadingText, ActionButton } from "@/components/UI";
import { ACTION_BUTTON_TYPE } from "@/components/types";

interface FormState {
  firstName: string;
  lastName: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            mutation SendContact($firstName: String!, $lastName: String!, $message: String!) {
              sendContactMessage(firstName: $firstName, lastName: $lastName, message: $message) {
                id
              }
            }
          `,
          variables: form,
        }),
      });

      const json = await res.json();
      if (json.errors) throw new Error(json.errors[0].message);

      setStatus("success");
      setForm({ firstName: "", lastName: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
      <section className="contact-section">
        <HeadingText
          title="Get in Touch"
          label="// CONTACT"
        />

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <div className="field-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Sevak"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Avetisyan"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your project or question..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <ActionButton
            type="submit"
            buttonType={ACTION_BUTTON_TYPE.PRIMARY}
            className="submit-btn"
            title={status === "loading" ? "Sending…" : "Send Message →"}
            disabled={status === "loading"}
          />

          {status === "success" && (
            <p className="form-feedback form-feedback--success">
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-feedback--error">
              ✗ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
  );
}
