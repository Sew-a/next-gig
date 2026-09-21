import { HeadingText, ActionButton } from "@/src/components/UI";
import Image from "@/src/components/Image";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import AiShowcaseCard from "./AiShowcaseCard";
import {
  AI_SHOWCASE_DATA,
  AI_SHOWCASE_HEADING,
  AI_SHOWCASE_INTRO,
  AI_SHOWCASE_SCREENSHOT,
  AI_SHOWCASE_SECTIONS,
} from "./constants";
import "./styles.scss";

export default function AiShowcase() {
  return (
    <section className="ai-showcase">
      <HeadingText
        title={AI_SHOWCASE_HEADING.title}
        label={AI_SHOWCASE_HEADING.label}
      />
      <div className="ai-showcase__intro">
        <p className="ai-showcase__desc">{AI_SHOWCASE_INTRO.desc}</p>
        <div className="ai-showcase__links">
          {AI_SHOWCASE_INTRO.links.map((link) => (
            <ActionButton
              key={link.title}
              title={link.title}
              link={link.href}
              buttonType={
                link.buttonType === "PRIMARY"
                  ? ACTION_BUTTON_TYPE.PRIMARY
                  : ACTION_BUTTON_TYPE.GHOST
              }
            />
          ))}
        </div>
      </div>

      <div className="ai-showcase__screenshot">
        <Image
          src={AI_SHOWCASE_SCREENSHOT.src}
          alt={AI_SHOWCASE_SCREENSHOT.alt}
          className="ai-showcase__image"
        />
      </div>

      <div className="ai-showcase__sections">
        <HeadingText
          title={AI_SHOWCASE_SECTIONS.title}
          label={AI_SHOWCASE_SECTIONS.label}
        />
        <div className="ai-showcase__grid">
          {AI_SHOWCASE_DATA.map((section, index) => (
            <AiShowcaseCard
              key={index}
              icon={section.icon}
              title={section.title}
              desc={section.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}