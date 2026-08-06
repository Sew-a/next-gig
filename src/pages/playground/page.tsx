import PlaygroundPage from "@/src/components/Playground/Playground";
import Seo from "@/src/components/Seo";

export default function Playground() {
  return (
    <>
      <Seo
        title="Playground — Sevak Avetisyan"
        description="Experiment with interactive elements and creative coding."
      />
      <PlaygroundPage />
    </>
  );
}
