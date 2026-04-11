"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeadingText, ActionButton } from "@/components/UI";
import { ACTION_BUTTON_TYPE } from "@/components/types";
import "./styles.scss";

export default function GetInTouch() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <section className="get-in-touch-section">
      <div className="interactive-container">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="interactive-content"
            >
              <HeadingText title="Get in Touch" label="// CONTACT" />
              <div className="interactive-text-box">
                <p className="primary-text">Really, you wanna get in touch with me?</p>
                <p className="secondary-text">If you think that you want write me message, please think twice.</p>
              </div>
              <ActionButton
                title="Get in touch"
                onClick={handleNext}
                buttonType={ACTION_BUTTON_TYPE.PRIMARY}
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="interactive-content"
            >
              <HeadingText title="Are you sure?" label="// CONTACT" />
              <div className="interactive-text-box">
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="additional-text italic"
                >
                  Hold up, If you still doing this it seems you got no choice, ok after next hit there will be contact form.
                </motion.p>
              </div>
              <ActionButton
                title="Still get in touch"
                onClick={handleNext}
                buttonType={ACTION_BUTTON_TYPE.PRIMARY}
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="interactive-content final-step"
            >
              <HeadingText title="Gotcha!" label="// CONTACT" />
              <div className="interactive-text-box">
                <h3 className="final-message">Naah, here's my mail, text me if you need anything</h3>
                <a href="mailto:sevavetisyan97@gmail.com" className="email-link">
                  sevavetisyan97@gmail.com
                </a>
                <p className="boring-text">Sorry, I was too bored to make another contact-me form</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
