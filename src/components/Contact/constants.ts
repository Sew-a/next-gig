import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "./icons";
import type { SocialLink } from "./types";

export const CONTACT_COPY = {
  label: "// CONTACT",
  title: "Contact",
  dot: ".",
  lead: "Get in touch with me via social media or send me an email.",
  location: "Based in Yerevan, Armenia · Working worldwide, remote-friendly",
};

export const SOCIALS: SocialLink[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sevak-avetisyan",
    href: "https://www.linkedin.com/in/sevak-avetisyan-6122411b2/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/Sew-a",
    href: "https://github.com/Sew-a",
    icon: GithubIcon,
  },
  {
    label: "Instagram",
    value: "@sew_rem",
    href: "https://www.instagram.com/sew_rem?igsh=d294MHpybDF5N2V1",
    icon: InstagramIcon,
  },
  {
    label: "Email",
    value: "sevavetisyan97@gmail.com",
    href: "mailto:sevavetisyan97@gmail.com",
    icon: Mail,
  },
];

export const bannerFade = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};