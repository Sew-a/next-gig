import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIALS, bannerFade } from "../constants";

export default function ContactSocials() {
  return (
    <div className="contact-page__grid">
      <motion.div
        className="contact-page__socials"
        variants={bannerFade}
        initial="hidden"
        animate="visible"
        custom={0.15}
      >
        {SOCIALS.map((social) => {
          const Icon = social.icon;
          const external = social.href.startsWith("http");

          return (
            <a
              key={social.label}
              href={social.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="contact-social"
            >
              <span className="contact-social__icon">
                <Icon size={22} />
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
    </div>
  );
}