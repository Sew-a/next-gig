import { SCROLLITEMS } from "./constants";
import dynamic from "next/dynamic";
import "./styles.scss";
import useScrollReveal from "@/src/hooks/useScrollReveal";

const Card = dynamic(() => import("@/src/components/Card"), {
  ssr: false, // skip server-side render — reveal relies on browser APIs
});

export default function ScrollCards() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px",
    once: false,
  });

  return (
    <section className="scroll-cards">
      <div className="some-space" />
      <div
        ref={ref}
        className={[
          "scroll-cards__grid",
          isVisible && "scroll-cards__grid--visible",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {SCROLLITEMS.map((item, index) => (
          <Card key={item.title} {...item} index={index} />
        ))}
      </div>
    </section>
  );
}
