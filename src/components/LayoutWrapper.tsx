"use client";
import dynamic from "next/dynamic";
import FollowSection from "@/src/components/FollowSection";
import Footer from "@/src/components/Footer";
import IdeLayout from "@/src/components/IdeLayout/IdeLayout";
import VersionSwitcher from "@/src/components/UI/VersionSwitcher";
import { useAppContext } from "@/src/contexts/appContext";
import { useWindowSize } from "@/src/hooks/useWindowSize";

const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });
const MobileHeader = dynamic(() => import("./Sidebar/MobileHeader"), {
  ssr: false,
});

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isIdeMode } = useAppContext();
  const size = useWindowSize();
  const isDesktop = size.width >= 1099;

  return (
    <div className="main-theme-wrapper">
      <div className="main">
        {isDesktop ? <Sidebar /> : <MobileHeader />}
        <div className="main-content">
          <div className={`page-content ${isIdeMode && "ide-mode"}`}>
            {isIdeMode ? <IdeLayout /> : children}
          </div>
          <FollowSection />
          {!isIdeMode && <Footer />}
        </div>
      </div>
      <VersionSwitcher />
    </div>
  );
}
