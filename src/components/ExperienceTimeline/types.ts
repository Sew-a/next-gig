import { EXPERIENCE } from "../../data/portfolioData";

export type Role = (typeof EXPERIENCE)[number]["roles"][number];
export type Company = (typeof EXPERIENCE)[number];