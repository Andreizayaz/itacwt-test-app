import { lazy } from "react";

const LazyPages = lazy(() => import(("./Pages")));
export default LazyPages;
