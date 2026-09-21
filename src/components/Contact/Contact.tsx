import ContactBanner from "./sections/ContactBanner";
import ContactSocials from "./sections/ContactSocials";
import ContactLocation from "./sections/ContactLocation";
import "./styles.scss";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <ContactBanner />
      <ContactSocials />
      <ContactLocation />
    </section>
  );
}