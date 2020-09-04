// AppRoutes.tsx
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/product/Products";
import { ProductDetail } from "./pages/product/ProductDetail";
import { Carts } from "./pages/cart/Carts";

// ======================= ROUTES CONSTANTS ================================

export const buildRoute = (route: string): string => `${route}`;

const PRODUCT_ROUTES = {
  PRODUCT_LIST: buildRoute("/products"),

  PRODUCT_DETAIL: buildRoute("/products/:id"),
};

const CART_ROUTES = {
  CART_LIST: buildRoute("/carts"),
};

export const ROUTES_CONFIG = {
  ROOT: "/",

  HOME: "/home",

  ...PRODUCT_ROUTES,

  ...CART_ROUTES,
};

// =========================================================================

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <Switch>
        <Route path={ROUTES_CONFIG.HOME} exact={true} component={Home} />

        <Route
          path={ROUTES_CONFIG.PRODUCT_LIST}
          exact={true}
          component={Products}
        />

        <Route path={ROUTES_CONFIG.PRODUCT_DETAIL} component={ProductDetail} />

        <Route path={ROUTES_CONFIG.CART_LIST} exact={true} component={Carts} />

        <Redirect path={ROUTES_CONFIG.ROOT} to={ROUTES_CONFIG.HOME} />
      </Switch>
    </Suspense>
  );
};
