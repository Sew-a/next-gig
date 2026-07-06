"use client";

import React, { useState } from "react";
import { EXPERIENCE } from "../data/portfolioData";
import "./ExperienceTabs.scss";

export default function ExperienceTabs() {
  const [activeCompIdx, setActiveCompIdx] = useState(0);
  const [activeRoleIdx, setActiveRoleIdx] = useState(0);

  const activeCompany = EXPERIENCE[activeCompIdx];
  const activeRole = activeCompany.roles[activeRoleIdx];

  const handleCompanyChange = (idx: number) => {
    setActiveCompIdx(idx);
    setActiveRoleIdx(0);
  };

  return (
    <div className="experience-tabs">
      {/* Left side: Company Tabs */}
      <div className="experience-tabs__companies">
        {EXPERIENCE.map((company, idx) => {
          const isActive = idx === activeCompIdx;
          return (
            <button
              key={company.company}
              type="button"
              className={`experience-tabs__company-btn ${
                isActive ? "active" : ""
              }`}
              onClick={() => handleCompanyChange(idx)}
            >
              <span className="experience-tabs__glitch-text" data-text={company.company}>
                {company.company}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right side: Role Panel */}
      <div className="experience-tabs__panel">
        {/* Role Sub-Tabs if there are multiple roles */}
        {activeCompany.roles.length > 1 && (
          <div className="experience-tabs__roles-nav">
            {activeCompany.roles.map((role, idx) => {
              const isActive = idx === activeRoleIdx;
              return (
                <button
                  key={role.title}
                  type="button"
                  className={`experience-tabs__role-nav-btn ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActiveRoleIdx(idx)}
                >
                  {role.title}
                </button>
              );
            })}
          </div>
        )}

        {/* Selected Role Content */}
        <div className="experience-tabs__content">
          <div className="experience-tabs__role-header">
            <h3 className="experience-tabs__role-title">
              {activeRole.title}
            </h3>
            <div className="experience-tabs__meta">
              <span className="experience-tabs__company-name">
                {activeCompany.company}
              </span>
              <span className="experience-tabs__separator">|</span>
              <span className="experience-tabs__location">
                {activeCompany.location}
              </span>
              <span className="experience-tabs__separator">|</span>
              <span className="experience-tabs__period">
                {activeRole.period || activeCompany.period}
              </span>
            </div>
          </div>

          <ul className="experience-tabs__achievements">
            {activeRole.achievements.map((achievement, idx) => (
              <li key={idx} className="experience-tabs__achievement-item">
                <span className="experience-tabs__bullet">&gt;&gt;</span>
                <span className="experience-tabs__achievement-text">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
