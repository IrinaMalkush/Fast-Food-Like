import React from "react";
import instaBW from "../../assets/img/instabw.png";
import styles from "./styles.module.css";

export function PageFooter() {
  return (
    <div className={styles.footer}>
      <div>
        <ul className={styles.menu}>
          <li>
            <a href="/">Главная</a>
            <span>|</span>
          </li>
          <li>
            <a href="/menu">Меню</a>
            <span>|</span>
          </li>
          <li>
            <a href="/delivery">Доставка</a>
            <span>|</span>
          </li>
          <li>
            <a href="/events">Акции</a>
            <span>|</span>
          </li>
          <li>
            <a href="/contacts">Контакты</a>
            <span>|</span>
          </li>
          <li>
            <a href="/comments">Отзывы</a>
            <span>|</span>
          </li>
          <li>
            <a href="/gallery">Галерея</a>
          </li>
        </ul>
      </div>

      <div className={styles.contacts}>
        <div className={styles.phone}>
          <p>&#x260E; Телефон: 0 (775) 05057</p>
        </div>
        <div className={styles.linksMenu}>
          <a href="https://www.instagram.com/like_pmr/" className={styles.links}>
            <img src={instaBW} alt="instagram-link" />
            <p className={styles.linkName}>- Instagram</p>
          </a>
        </div>
        <div className={styles.addresses}>
          <p>
            <span role="img" aria-label="like">
              &#x1F44D;
            </span>{" "}
            Ул.Суворова (возле школы бокса)
          </p>
          <p>
            <span role="img" aria-label="like">
              &#x1F44D;
            </span>{" "}
            Центральный рынок, "синяя крыша", бутик #3
          </p>
        </div>
      </div>
      <p className={styles.copyright}>2018-2020 &copy; Fast Food Like</p>
      <p className={styles.copyDev}>Разработка сайта: Ирина Малкуш</p>
    </div>
  );
}
