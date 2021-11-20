import React, { ReactElement } from "react";
import styles from "./styles.module.css";

interface ISocialLinkProps {
  href: string;
  title: string;
  src: string;
}

export const SocialLink = ({ href, title, src, ...restProps }: ISocialLinkProps): ReactElement => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} title={title} {...restProps}>
      <img src={src} alt={title} className={styles.iconLink} />
    </a>
  );
};
