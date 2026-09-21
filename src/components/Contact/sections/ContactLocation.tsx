import { CONTACT_COPY } from "../constants";

export default function ContactLocation() {
  return (
    <div className="contact-page__location">
      <p className="contact-page__location-text">{CONTACT_COPY.location}</p>
    </div>
  );
}
