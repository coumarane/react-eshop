// Header.tsx

import * as React from "react";

import { Link } from "react-router-dom";

import { ROUTES_CONFIG } from "../AppRoutes";

export const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link
          to={ROUTES_CONFIG.HOME}
          className="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
        >
          Henri Potier Store
        </Link>

        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
};
