import React from "react";
import { SocialLink } from "./SocialLink.jsx";
import "./stylesHeader.css";

export function PageHeader() {
  return (
    <div className="header-conteiner">
      <p>&#9742; 0(775)05057</p>
      <a href="/">
        <img src="/img/logo.jpg" alt="fast-food-like-logo"></img>
      </a>
      <nav className="social-links">
        <p className="link-text">мы в Instagram:</p>
        <SocialLink
          href="https://www.instagram.com/like_pmr/"
          title="instagram.com"
          src="/img/insta.png"
        />
      </nav>
    </div>
  );
}
