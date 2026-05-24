import GetInTouch from "@/components/GetInTouch/GetInTouch";
// import Contact from "@/components/Contact/Contact";
import "../styles.scss";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact — Sevak Avetisyan",
  description: "Get in touch with me for collaborations or inquiries.",
  openGraph: {
    title: "Contact — Sevak Avetisyan",
    description: "Get in touch with me for collaborations or inquiries.",
  },
};

const page = () => {
  return (
    <div className="pages-spacing">
      <GetInTouch />
      {/* <Contact /> */}
    </div>
  )
}

export default page;