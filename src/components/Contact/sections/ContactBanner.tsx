import { motion } from "framer-motion";
import { CONTACT_COPY, bannerFade } from "../constants";

export default function ContactBanner() {
  return (
    <div className="contact-page__banner">
      <div className="contact-page__banner-wrap">
        <div className="contact-page__intro">
          <span className="contact-page__label">{CONTACT_COPY.label}</span>
          <h1 className="contact-page__title">
            {CONTACT_COPY.title}
            <span className="contact-page__dot">{CONTACT_COPY.dot}</span>
          </h1>
          <p className="contact-page__lead">{CONTACT_COPY.lead}</p>
        </div>
      </div>
    </div>
  );
}
