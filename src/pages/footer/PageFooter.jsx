import React from "react";
import instaBW from '../../assets/img/instabw.png';
import "./stylesFooter.css";

export function PageFooter() {
    return (
        <div>
            <div>
                <ul className="footer-menu">
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


            <div className="footer-contacts">
                <div className="footer-phone">
                    <p>&#x260E; Телефон: 0 (775) 05057</p>
                </div>
                <div className="footer-links-menu">
                   <a href="https://www.instagram.com/like_pmr/" className="footer-links">
                       <img src={instaBW} alt="inastagram-link"/>
                       <p className="footer-link-name">- Instagram</p>
                   </a>
                </div>
                <div className="footer-addresses">
                    <p><span role="img" aria-label="like">&#x1F44D;</span> Ул.Суворова (возле школы бокса)</p>
                    <p><span role="img" aria-label="like">&#x1F44D;</span> Центральный рынок, "синяя крыша", бутик #3</p>
                </div>
            </div>
           <p className="copyright">2018-2020 &copy; Fast Food Like</p>
           <p className="copyDev">Разработка сайта: Ирина Малкуш</p>
        </div>
    )
}