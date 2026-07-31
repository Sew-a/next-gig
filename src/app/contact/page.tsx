import type { Metadata } from "next";
import ContactPage from "@/src/components/Contact/Contact";
import "../../styles.scss";

export const metadata: Metadata = {
  title: "Contact — Sevak Avetisyan",
  description:
    "Get in touch with Sevak Avetisyan — Software Engineer. Send me an email or connect on LinkedIn, GitHub, or Instagram.",
  openGraph: {
    title: "Contact — Sevak Avetisyan",
    description:
      "Get in touch with Sevak Avetisyan — Software Engineer.",
  },
};

export default function Contact() {
  return (
    <div className="pages-spacing">
      <ContactPage />
    </div>
  );
}
