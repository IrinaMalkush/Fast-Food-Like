import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MainPage} from "./MainPage";
import {MenuLink} from "./MenuLink";
import {Menu} from "./Menu";
import {Delivery} from "./Delivery";
import {Events} from "./Events";
import {Contacts} from "./Contacts";
import {Comments} from "./Comments";
import {Galery} from "./Galery";
import {NoPageFound} from "./NoPageFound";
import "./stylesNavigation.css";

export function NavigationMenu() {
  return (
    <Router>
      <nav className="navigationmenu">
      <ul className="menu-links">
        <li><div className="toright"><MenuLink href="/"><span className="straight-right">Главная</span></MenuLink></div></li>
        <li><div className="toright"><MenuLink href="/menu"><span className="straight-right">Меню</span></MenuLink></div></li>
        <li><div className="toright"><MenuLink href="/delivery"><span className="straight-right">Еда на дом</span></MenuLink></div></li>
        <li><div className="trapezoid"><MenuLink href="/events"><span>Акции</span></MenuLink></div></li>
        <li><div className="toleft"><MenuLink href="/contacts"><span className="straight-left">Контакты</span></MenuLink></div></li>
        <li><div className="toleft"><MenuLink href="/comments"><span className="straight-left">Отзывы</span></MenuLink></div></li>
        <li><div className="toleft"><MenuLink href="/galery"><span className="straight-left">Галерея</span></MenuLink></div></li>
      </ul>
      </nav>
      <main className="mainpart">
      <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/menu" component={Menu}></Route>
          <Route exact path="/delivery" component={Delivery}></Route>
          <Route exact path="/events" component={Events}></Route>
          <Route exact path="/contacts" component={Contacts}></Route>
          <Route exact path="/comments" component={Comments}></Route>
          <Route exact path="/galery" component={Galery}></Route>
          <Route component={NoPageFound} />
      </Switch>
      </main>
    </Router>
  );
}
