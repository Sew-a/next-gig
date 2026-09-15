import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FOOTER_NAV,
  FOOTER_CONTACT,
  FOOTER_BRAND,
} from "@/src/data/footerData";
import useRevealWhenReached from "@/src/hooks/useRevealWhenReached";
import "./styles.scss";

function Footer() {
  const { ref, revealed } = useRevealWhenReached<HTMLElement>();

  return (
    <motion.footer
      ref={ref}
      className="portfolio-footer"
      initial={false}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{FOOTER_BRAND.logo}</span>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-title">Navigation</span>
            {FOOTER_NAV.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Reach out</span>
            {FOOTER_CONTACT.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
