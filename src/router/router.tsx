import { createBrowserRouter } from "react-router-dom";
import {
  ERRORS_URL,
  HOME_URL,
  PAGES_URL,
  PRICES_URL,
  PRODUCTS_URL,
  ROOT_URL,
} from "./consts";
import { Layout } from "src/components/widgets";
import { Errors, Home, Pages, Prices, Products } from "src/components/pages";

export const router = createBrowserRouter([
  {
    path: ROOT_URL,
    element: <Layout />,
    children: [
      {
        path: HOME_URL,
        element: <Home />,
      },
      {
        path: PAGES_URL,
        element: <Pages />,
      },
      {
        path: PRICES_URL,
        element: <Prices />,
      },
      {
        path: PRODUCTS_URL,
        element: <Products />,
      },
      {
        path: ERRORS_URL,
        element: <Errors />,
      },
    ],
  },
]);
