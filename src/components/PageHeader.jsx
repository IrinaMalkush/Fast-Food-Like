import React from "react";
import {SocialLink} from "./SocialLink.jsx";
import "./stylesHeader.css";

export function PageHeader() {
  return (
    <div className="header-conteiner">
      <p>&#9742; 0(775)05057</p>
      <a href="/"><img src="/img/logo.jpg" alt="fast-food-like-logo"></img></a>
      <nav>
        <ul className="social-links">
          <li>
            <SocialLink
              href="https://www.instagram.com/like_pmr/"
              title="instagram.com"
              src="/img/insta.png"
            />
          </li>
          <li>
            <SocialLink
              href="https://www.facebook.com/"
              title="facebook.com"
              src="/img/fb.png"
            />
          </li>
          <li>
            <SocialLink
              href="https://vk.com/"
              title="vk.com"
              src="/img/vk.png"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
