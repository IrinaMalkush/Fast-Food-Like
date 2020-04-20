import React from "react";
import { Link } from "react-router-dom";

export function ImageLink({ title, href, children, ...restProps }) {
  return (
    <Link to={href} {...restProps}>
        {children}
    </Link>
  );
}