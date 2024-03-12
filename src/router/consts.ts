/* routes */

// url
export const ROOT_URL = "/";
export const HOME_URL = ROOT_URL;
export const PAGES_URL = "pages";
export const PRICES_URL = "prices";
export const PRODUCTS_URL = "products";
export const ERRORS_URL = "*";

// text url
const HOME_TEXT = "home";
const PAGES_TEXT = "pages";
const PRICES_TEXT = "prices";
const PRODUCTS_TEXT = "products";
export const ERRORS_TEXT='Page Not Found'

// pages
const home = {
  url: HOME_URL,
  text: HOME_TEXT,
};

const pages = {
  url: PAGES_URL,
  text: PAGES_TEXT,
};

const prices = {
  url: PRICES_URL,
  text: PRICES_TEXT,
};

const products = {
  url: PRODUCTS_URL,
  text: PRODUCTS_TEXT,
};

export const routes = [home, pages, prices, products];
