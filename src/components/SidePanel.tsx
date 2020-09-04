/* eslint-disable jsx-a11y/anchor-is-valid */
// SidePanel.tsx
import * as React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES_CONFIG } from "../AppRoutes";
import { useSelector } from "react-redux";
import { IApplicationState } from "../store";
import { getCartCountSelector } from "../store/cart/CartSelectors";
import { getBookCountSelector } from "../store/book/BookSelectors";

export const SidePanel: React.FC = () => {
  const cartCount = useSelector((state: IApplicationState) =>
    getCartCountSelector(state)
  );

  const bookCount = useSelector((state: IApplicationState) =>
    getBookCountSelector(state)
  );

  return (
    <>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to={ROUTES_CONFIG.HOME}
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-home" />
                {` `}
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={ROUTES_CONFIG.PRODUCT_LIST}
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-cube" />
                {` `}
                Products ({bookCount})
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={ROUTES_CONFIG.CART_LIST}
                className="nav-link"
                activeClassName="active"
              >
                <i className="fa fa-shopping-cart" />
                {` `}
                Cart ({cartCount})
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
