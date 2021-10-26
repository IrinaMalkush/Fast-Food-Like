import React from "react";
import { SocialLink } from "../../componentsss/SocialLink.jsx";
import logo from '../../assets/img/logo.jpg';
import insta from '../../assets/img/insta.png';
import "./stylesHeader.css";

export function Header() {
  return (
    <div className="header-conteiner">
      <p>&#9742; 0(775)05057</p>
      <a href="/">
        <img src={logo} alt="fast-food-like-logo"/>
      </a>
      <nav className="social-links">
        <p className="link-text">мы в Instagram:</p>
        <SocialLink
          href="https://www.instagram.com/like_pmr/"
          title="instagram.com"
          src={insta}
        />
      </nav>
    </div>
  );
}
