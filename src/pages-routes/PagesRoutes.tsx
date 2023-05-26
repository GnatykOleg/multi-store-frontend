import { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import { ROUTES_PATHS } from "../helpers/constants/routes-constants";

import { Loader } from "../components";

const ShopPage = lazy(() => import("../pages/ShopPage/ShopPage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));
const HistoryPage = lazy(() => import("../pages/HistoryPage/HistoryPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const { SHOP_PAGE, CART_PAGE, NOT_FOUND_PAGE, HISTORY_PAGE } = ROUTES_PATHS;

const PagesRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route>
        <Route path={SHOP_PAGE} element={<ShopPage />} />
        <Route path={CART_PAGE} element={<CartPage />} />
        <Route path={HISTORY_PAGE} element={<HistoryPage />} />
        <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Suspense>
);

export default PagesRoutes;
