import { lazy } from "react";

const LazyProducts = lazy(() => import(("./Products")));
export default LazyProducts;
