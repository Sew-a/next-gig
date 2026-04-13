"use client";
import React from 'react';
import Sidebar from "../components/Sidebar";
import FollowSection from "@/components/FollowSection";
import Footer from "@/components/Footer";
import IdeLayout from "@/components/IdeLayout/IdeLayout";
import VersionSwitcher from "@/components/UI/VersionSwitcher";
import { useAppContext } from "@/contexts/appContext";
import { useWindowSize } from '@/hooks/useWindowSize';
import MobileHeader from './Sidebar/MobileHeader';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isIdeMode, theme } = useAppContext();
  const size = useWindowSize();

  const isMobile = size.width < 1099;

  return (
    <div className={`main-theme-wrapper theme-${theme}`}>
      <div className="main">
        {isMobile ? <MobileHeader /> : <Sidebar />}
        <div className="main-content">
          <div className={`page-content ${isIdeMode && 'ide-mode'}`}>
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
