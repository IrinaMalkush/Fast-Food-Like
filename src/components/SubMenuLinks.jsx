import React from "react";
import { useLocation, Link } from "react-router-dom";

export function SubMenuLink({ children, href, ...restProps }) {
  const className = `sub-menu-button ${
    useLocation().pathname === href ? "active-button" : ""
  }`;

  return (
    <Link to={href} className={className} {...restProps}>
      {children}
    </Link>
  );
}