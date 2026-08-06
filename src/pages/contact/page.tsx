import ContactPage from "@/src/components/Contact/Contact";
import Seo from "@/src/components/Seo";
import "../../styles.scss";

export default function Contact() {
  return (
    <div className="pages-spacing">
      <Seo
        title="Contact — Sevak Avetisyan"
        description="Get in touch with Sevak Avetisyan — Software Engineer. Send me an email or connect on LinkedIn, GitHub, or Instagram."
      />
      <ContactPage />
    </div>
  );
}
