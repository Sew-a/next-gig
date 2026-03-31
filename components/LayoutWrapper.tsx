"use client";
import React from 'react';
import Sidebar from "../components/Sidebar";
import FollowSection from "@/components/FollowSection";
import Footer from "@/components/Footer";
import IdeLayout from "@/components/IdeLayout/IdeLayout";
import VersionSwitcher from "@/components/UI/VersionSwitcher";
import { useAppContext } from "@/contexts/appContext";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isIdeMode } = useAppContext();

  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="main-content">
          <div className={`page-content ${isIdeMode && 'ide-mode'}`}>
            {isIdeMode ? <IdeLayout /> : children}
          </div>
          <FollowSection />
          {!isIdeMode && <Footer />}
        </div>
      </div>
      <VersionSwitcher />
    </>
  );
}
