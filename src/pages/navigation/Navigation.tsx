import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { RouterSwitchNavigation } from "../routerSwitch/RouterSwitchNavigation";
import { ReactComponent as MenuHamburger } from "../../assets/svgs/menu.svg";
import classNames from "classnames";
import styles from "./styles.module.css";

export function Navigation(): ReactElement {
  return (
    <div>
      <nav className={styles.navigationMenu}>
        <input type="checkbox" id="menu" className={styles.toggle} />
        <label htmlFor="menu" className={styles.toggleMenu}>
          <MenuHamburger />
        </label>
        <ul className={styles.menuLinks}>
          <li>
            <NavLink
              to={"/"}
              exact={true}
              activeClassName={classNames(styles.menuButton, styles.active)}
              className={styles.menuButton}
            >
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/menu"}
              activeClassName={classNames(styles.menuButton, styles.active)}
              className={styles.menuButton}
            >
              Меню
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/delivery"}
              activeClassName={classNames(styles.menuButton, styles.active)}
              className={styles.menuButton}
            >
              заказ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              activeClassName={classNames(styles.menuButton, styles.active)}
              className={styles.menuButton}
            >
              Акции
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contacts"}
              activeClassName={classNames(styles.menuButton, styles.active)}
              className={styles.menuButton}
            >
              Контакты
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/comments"}
              activeClassName={classNames(styles.menuButton, styles.active)}
              className={styles.menuButton}
            >
              Отзывы
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className={styles.mainPart}>
        <RouterSwitchNavigation />
      </main>
    </div>
  );
}
