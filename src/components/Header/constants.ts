import { routeNames, paths } from "@/src/routes/mainRoutes";

export const headerRoutes = routeNames.filter((r) => r.path !== paths.resume);

export const HEADER_BRAND = "Sev";

export const SCROLL_THRESHOLD = 20;