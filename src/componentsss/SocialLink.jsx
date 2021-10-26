import React from "react";

export function SocialLink({ href, title, src, ...restProps }) {
  return (
    <a href={href} title={title} {...restProps}>
      <img src={src} alt={title} className="icon-link"/>
    </a>
  );
}
