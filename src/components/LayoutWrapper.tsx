"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/src/components/Header";
import FollowSection from "@/src/components/FollowSection";
import Footer from "@/src/components/Footer";
import IdeLayout from "@/src/components/IdeLayout/IdeLayout";
import FixedCharacter from "@/src/components/FixedCharacter";
import { useAppContext } from "@/src/contexts/appContext";

const pageTransition = {
  initial: { opacity: 0, y: 16, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, filter: "blur(4px)" },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isIdeMode } = useAppContext();
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="main-theme-wrapper">
      <Header />
      <div className="main">
        <div className="main-content">
          <div className={`page-content ${isIdeMode && "ide-mode"}`}>
            {isIdeMode ? (
              <IdeLayout />
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={pageTransition.initial}
                  animate={pageTransition.animate}
                  exit={pageTransition.exit}
                  transition={pageTransition.transition}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <FollowSection />
          {!isIdeMode && <Footer />}
        </div>
      </div>
      {!isIdeMode && <FixedCharacter />}
    </div>
  );
}
