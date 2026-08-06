import ResumePage from "@/src/components/Resume/Resume";
import Seo from "@/src/components/Seo";
import "../../styles.scss";

export default function Resume() {
  return (
    <div className="pages-spacing">
      <Seo
        title="Résumé — Sevak Avetisyan"
        description="Senior Frontend Engineer résumé — React, TypeScript, Micro-frontends."
      />
      <ResumePage />
    </div>
  );
}
