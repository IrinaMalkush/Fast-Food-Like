import React from "react";
import styles from "./styles.module.css";

export function SocialLink({ href, title, src, ...restProps }) {
  return (
    <a href={href} title={title} {...restProps}>
      <img src={src} alt={title} className={styles.iconLink} />
    </a>
  );
}
