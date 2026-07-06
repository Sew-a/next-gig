"use client";
import { HeadingText, ActionButton } from "@/src/components/UI";
import Image from "@/src/components/Image";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import { AI_SHOWCASE_DATA } from "./constants";
import "./styles.scss";

export default function AiShowcase() {
  return (
    <section className="ai-showcase">
      <HeadingText
        title="AI Agents Prompts — Practical LLM Guide"
        label="// AI & AGENTS"
      />
      <div className="ai-showcase__intro">
        <p className="ai-showcase__desc">
          A curated knowledge hub and practical guide for prompt engineering, AI
          agents, RAG, reusable agent workflow patterns, and everyday prompt
          examples. Built for anyone who uses ChatGPT, Claude, Gemini, or any
          LLM-powered assistant and wants to go beyond basic chat interactions.
        </p>
        <div className="ai-showcase__links">
          <ActionButton
            title="Visit Website →"
            link="https://ai-agents.sevavetisyan97.workers.dev"
            buttonType={ACTION_BUTTON_TYPE.PRIMARY}
          />
          <ActionButton
            title="View Source →"
            link="https://github.com/Sew-a/AI-Agents"
            buttonType={ACTION_BUTTON_TYPE.GHOST}
          />
        </div>
      </div>

      <div className="ai-showcase__screenshot">
        <Image
          src="https://res.cloudinary.com/dlggumsot/image/upload/v1783354442/Screenshot_2026-07-06_193857_ubcvpw.webp"
          alt="AI Agents website screenshot"
          className="ai-showcase__image"
        />
      </div>

      <div className="ai-showcase__sections">
        <HeadingText title="What You'll Learn" label="// SECTIONS" />
        <div className="ai-showcase__grid">
          {AI_SHOWCASE_DATA.map((section, index) => (
            <div key={index} className="ai-showcase__card">
              <div className="ai-showcase__card-header">
                <span className="ai-showcase__card-icon">{section.icon}</span>
                <h3>{section.title}</h3>
              </div>
              <p>{section.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
