import { nanoid } from "@reduxjs/toolkit";

import { ROUTES_PATHS } from "../../helpers/constants/routes-constants";

const { SHOP_PAGE, CART_PAGE, HISTORY_PAGE } = ROUTES_PATHS;

export const navigationItems = [
  {
    id: nanoid(),
    to: SHOP_PAGE,
    text: "Shop",
  },
  {
    id: nanoid(),
    to: CART_PAGE,
    text: "Shopping Cart",
  },
  {
    id: nanoid(),
    to: HISTORY_PAGE,
    text: "History",
  },
];
