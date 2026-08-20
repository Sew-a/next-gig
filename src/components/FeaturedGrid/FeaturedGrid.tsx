import { FEATURED_WORK } from "@/src/data/portfolioData";
import { HeadingText, ActionButton } from "@/src/components/UI";
import { ACTION_BUTTON_TYPE } from "@/src/components/types";
import { paths } from "@/src/routes/mainRoutes";
import GridCard from "./GridCard";
import "./styles.scss";

export default function FeaturedGrid() {
  return (
    <section className="featured-grid">
      <div className="featured-grid__head">
        <HeadingText title="Work & Projects" label="// Projects" />
      </div>
      <div className="featured-grid__grid">
        {FEATURED_WORK.map((item) => (
          <GridCard key={item.slug} item={item} />
        ))}
      </div>
      <div className="featured-grid__more">
        <ActionButton
          title="See all work →"
          link={paths.work}
          buttonType={ACTION_BUTTON_TYPE.GHOST}
        />
      </div>
    </section>
  );
}
