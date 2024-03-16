import { lazy } from "react";

const LazyPrices = lazy(() => import(("./Prices")));
export default LazyPrices;
