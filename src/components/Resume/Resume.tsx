"use client";
import { Download } from "lucide-react";
import { RESUME, EXPERIENCE } from "@/src/data/portfolioData";
import "./styles.scss";

export default function Resume() {
  return (
    <section className="resume">
      <div className="resume__toolbar">
        <span className="resume__label">{`// RÉSUMÉ`}</span>
        <button className="resume__download" onClick={() => window.print()}>
          <Download size={16} /> Download PDF
        </button>
      </div>

      <article className="resume__sheet">
        <header className="resume__header">
          <div>
            <h1 className="resume__name">{RESUME.name}</h1>
            <p className="resume__title">{RESUME.title}</p>
          </div>
          <div className="resume__contact">
            <span>{RESUME.location}</span>
            <a href={`mailto:${RESUME.email}`}>{RESUME.email}</a>
            <a href={RESUME.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={RESUME.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <section className="resume__block">
          <h2 className="resume__block-title">Summary</h2>
          <p className="resume__summary">{RESUME.summary}</p>
        </section>

        <section className="resume__block">
          <h2 className="resume__block-title">Experience</h2>
          {EXPERIENCE.map((company) => (
            <div key={company.company} className="resume__company">
              <div className="resume__company-head">
                <h3>{company.company}</h3>
                <span className="resume__company-period">{company.period}</span>
              </div>
              <p className="resume__company-summary">{company.companySummary}</p>
              {company.roles.map((role) => (
                <div key={role.title} className="resume__role">
                  <div className="resume__role-head">
                    <h4>{role.title}</h4>
                    <span className="resume__role-period">{role.period}</span>
                  </div>
                  <ul className="resume__achievements">
                    {role.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="resume__block">
          <h2 className="resume__block-title">Skills</h2>
          <div className="resume__skills">
            {RESUME.skills.map((skill) => (
              <span key={skill} className="resume__skill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="resume__block">
          <h2 className="resume__block-title">Education</h2>
          <p className="resume__edu">
            <strong>{RESUME.education.degree}</strong> — {RESUME.education.school} ({RESUME.education.year})
          </p>
        </section>

        <section className="resume__block">
          <h2 className="resume__block-title">Languages</h2>
          <ul className="resume__languages">
            {RESUME.languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </li>
            ))}
          </ul>
        </section>

        <footer className="resume__footer">
          <p>© {new Date().getFullYear()} Sevak Avetisyan · {RESUME.email} · {RESUME.phone}</p>
        </footer>
      </article>
    </section>
  );
}
