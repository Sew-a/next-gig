import type { Metadata } from "next";
import ResumePage from "@/src/components/Resume/Resume";
import "../../styles.scss";

export const metadata: Metadata = {
  title: "Résumé — Sevak Avetisyan",
  description: "Senior Frontend Engineer résumé — React, TypeScript, Micro-frontends.",
};

export default function Resume() {
  return (
    <div className="pages-spacing">
      <ResumePage />
    </div>
  );
}
