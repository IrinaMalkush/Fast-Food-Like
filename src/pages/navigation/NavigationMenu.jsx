import React from "react";
import { NavLink } from "react-router-dom";
import { RouterSwitchNavigation } from "../routerSwitch/RouterSwitchNavigation";
import { ReactComponent as MenuHamburger } from "../../assets/svgs/menu.svg";
import "./stylesNavigation.css";

export function NavigationMenu() {
  return (
    <div>
      <nav className="navigationmenu">
        <input type="checkbox" id="menu" className="toggle" />
        <label htmlFor="menu" className="toggle-menu">
          <MenuHamburger />
        </label>
        <ul className="menu-links">
          <li>
            <div className="toright">
              <NavLink
                to={"/"}
                exact={true}
                activeClassName="active"
                className="menu-button "
              >
                <span className="straight-right">Главная</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="toright">
              <NavLink
                to={"/menu"}
                activeClassName="active"
                className="menu-button "
              >
                <span className="straight-right">Меню</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="toright">
              <NavLink
                to={"/delivery"}
                activeClassName="active"
                className="menu-button "
              >
                <span className="straight-right">Еда на дом</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="trapezoid">
              <NavLink
                to={"/events"}
                activeClassName="active"
                className="menu-button "
              >
                <span>Акции</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="toleft">
              <NavLink
                to={"/contacts"}
                activeClassName="active"
                className="menu-button "
              >
                <span className="straight-left">Контакты</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="toleft">
              <NavLink
                to={"/comments"}
                activeClassName="active"
                className="menu-button "
              >
                <span className="straight-left">Отзывы</span>
              </NavLink>
            </div>
          </li>
          <li>
            <div className="toleft">
              <NavLink
                to={"/gallery"}
                activeClassName="active"
                className="menu-button "
              >
                <span className="straight-left">Галерея</span>
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
      <main className="mainpart">
        <RouterSwitchNavigation />
      </main>
    </div>
  );
}
