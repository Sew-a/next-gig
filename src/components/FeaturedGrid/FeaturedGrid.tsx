import { FEATURED_WORK } from "@/src/data/portfolioData";
import { HeadingText, ActionButton } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import { paths } from "@/src/routes/mainRoutes";
import GridCard from "./GridCard";
import { FEATURED_GRID_HEADING, SEE_ALL_WORK_LABEL } from "./constants";
import "./styles.scss";

export default function FeaturedGrid() {
  return (
    <section className="featured-grid">
      <div className="featured-grid__head">
        <HeadingText
          title={FEATURED_GRID_HEADING.title}
          label={FEATURED_GRID_HEADING.label}
        />
      </div>
      <div className="featured-grid__grid">
        {FEATURED_WORK.map((item) => (
          <GridCard key={item.slug} item={item} />
        ))}
      </div>
      <div className="featured-grid__more">
        <ActionButton
          title={SEE_ALL_WORK_LABEL}
          link={paths.work}
          buttonType={ACTION_BUTTON_TYPE.GHOST}
        />
      </div>
    </section>
  );
}
