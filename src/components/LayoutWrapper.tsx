"use client";
import Header from "@/src/components/Header";
import FollowSection from "@/src/components/FollowSection";
import Footer from "@/src/components/Footer";
import IdeLayout from "@/src/components/IdeLayout/IdeLayout";
import FixedCharacter from "@/src/components/FixedCharacter";
import { useAppContext } from "@/src/contexts/appContext";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isIdeMode } = useAppContext();

  return (
    <div className="main-theme-wrapper">
      <Header />
      <div className="main">
        <div className="main-content">
          <div className={`page-content ${isIdeMode && "ide-mode"}`}>
            {isIdeMode ? <IdeLayout /> : children}
          </div>
          <FollowSection />
          {!isIdeMode && <Footer />}
        </div>
      </div>
      {!isIdeMode && <FixedCharacter />}
    </div>
  );
}
