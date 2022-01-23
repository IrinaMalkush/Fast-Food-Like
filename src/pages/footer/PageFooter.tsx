import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import instaBW from "../../assets/img/instabw.png";
import styles from "./styles.module.css";

export function PageFooter(): ReactElement {
  return (
    <div className={styles.footer}>
      <div>
        <ul className={styles.menu}>
          <li>
            <NavLink to={"/"}>Главная</NavLink>
            <span>|</span>
          </li>
          <li>
            <NavLink to={"/menu"}>Меню</NavLink>
            <span>|</span>
          </li>
          <li>
            <NavLink to={"/delivery"}>Доставка</NavLink>
            <span>|</span>
          </li>
          <li>
            <NavLink to={"/events"}>Акции</NavLink>
            <span>|</span>
          </li>
          <li>
            <NavLink to={"/contacts"}>Контакты</NavLink>
            <span>|</span>
          </li>
          <li>
            <NavLink to={"/comments"}>Отзывы</NavLink>
            <span>|</span>
          </li>
          <li>
            <NavLink to={"/gallery"}>Галерея</NavLink>
          </li>
        </ul>
      </div>

      <div className={styles.contacts}>
        <div className={styles.phone}>
          <p>&#x260E; Телефон: 0 (775) 05057</p>
        </div>
        <div className={styles.linksMenu}>
          <a
            target="_blank"
            href="https://www.instagram.com/like_pmr/"
            rel="noopener noreferrer"
            className={styles.links}
          >
            <img src={instaBW} alt="instagram-link" />
            <p className={styles.linkName}>- Instagram</p>
          </a>
        </div>
        <div className={styles.addresses}>
          <p>
            <span role="img" aria-label="like">
              &#x1F44D;
            </span>{" "}
            Бендеры, ул.Суворова, остановка троллейбусов 2, 3 и 4 возле школы бокса
          </p>
          <p>
            <span role="img" aria-label="like">
              &#x1F44D;
            </span>{" "}
            г. Тирасполь, ул. Свердлова 36, ТЦ "ЛИМО"
          </p>
        </div>
      </div>
      <p className={styles.copyright}>2018-2022 &copy; Fast Food Like</p>
      <p className={styles.copyDev}>Разработка сайта: Ирина Долгонюк</p>
    </div>
  );
}
