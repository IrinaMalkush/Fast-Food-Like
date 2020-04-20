import React from "react";
import { useLocation } from "react-router-dom";

export function MenuLink({ children, href, ...restProps }) {
  const className = `menu-button ${
    useLocation().pathname === href ? "active" : ""
  }`;

  return (
    <a href={href} className={className} {...restProps}>
      {children}
    </a>
  );
}
