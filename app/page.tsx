import ImageItems from "@/components/ImageItems";
import AppList from "@/components/AppList";
import { HeadingText } from "@/components/UI";
import { MAIN_PAGE_TITLE } from "@/constants";

export default function Homepage() {
  return (
    <div>
      <HeadingText title={MAIN_PAGE_TITLE} />
      <AppList />
      <ImageItems />
    </div>
  );
}
