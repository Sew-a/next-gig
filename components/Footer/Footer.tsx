import Link from 'next/link'
import { FOOTER_NAV, FOOTER_CONTACT, FOOTER_BRAND } from '@/data/footerData'
import './styles.scss'

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{FOOTER_BRAND.logo}</span>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__col-title">Navigation</span>
            {FOOTER_NAV.map((link) => (
              <Link key={link.href} href={link.href}>
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
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noreferrer' : undefined}
              >
                {contact.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Sevak Avetisyan. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer