import React from "react";
import { NavLink } from "react-router-dom";
import { RouterSwitchNavigation } from "../routerSwitch/RouterSwitchNavigation";
import { ReactComponent as MenuHamburger } from "../../assets/svgs/menu.svg";
import classNames from "classnames";
import styles from "./styles.module.css";

export function NavigationMenu() {
  return (
    <div>
      <nav className={styles.navigationMenu}>
        <input type="checkbox" id="menu" className={styles.toggle} />
        <label htmlFor="menu" className={styles.toggleMenu}>
          <MenuHamburger />
        </label>
        <ul className={styles.menuLinks}>
          <li>
            <div className={styles.toRight}>
              <NavLink
                to={"/"}
                exact={true}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span className={styles.straightRight}>Главная</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.toRight}>
              <NavLink
                to={"/menu"}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span className={styles.straightRight}>Меню</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.toRight}>
              <NavLink
                to={"/delivery"}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span className={styles.straightRight}>Еда на дом</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.trapezoid}>
              <NavLink
                to={"/events"}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span>Акции</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.toLeft}>
              <NavLink
                to={"/contacts"}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span className={styles.straightLeft}>Контакты</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.toLeft}>
              <NavLink
                to={"/comments"}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span className={styles.straightLeft}>Отзывы</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.toLeft}>
              <NavLink
                to={"/gallery"}
                activeClassName={classNames(styles.menuButton, styles.active)}
                className={styles.menuButton}
              >
                <span className={styles.straightLeft}>Галерея</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
      <main className={styles.mainPart}>
        <RouterSwitchNavigation />
      </main>
    </div>
  );
}
