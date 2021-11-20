import React, { ReactElement } from "react";
import { SocialLink } from "../../ui/socialLink/SocialLink";
import logo from "../../assets/img/logo.jpg";
import insta from "../../assets/img/insta.png";
import styles from "./styles.module.css";

export function Header(): ReactElement {
  return (
    <div className={styles.headerContainer}>
      <div>
        <div className={styles.phones}>
          <div className={styles.icon}>&#9742;</div>
          <p>0(533)55455</p>
          <p> - Тирасполь</p>
        </div>
        <div className={styles.phones}>
          <div className={styles.icon}>&#9742;</div>
          <p>0(775)05057</p>
          <p> - Бендеры</p>
        </div>
      </div>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="fast-food-like-logo" />
        </a>
      </div>
      <div className={styles.rightBlock}>
        <nav className={styles.socialLinks}>
          <a href="https://www.instagram.com/like_pmr/" className={styles.linkText}>
            мы в Instagram:
          </a>
          <SocialLink
            href="https://www.instagram.com/like_pmr/"
            title="instagram.com"
            src={insta}
          />
        </nav>
      </div>
    </div>
  );
}
