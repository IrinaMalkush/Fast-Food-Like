import React from "react";
import { BrowserRouter as Router, useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import "./stylesMenu.css";
import { SubMenuLink } from "./SubMenuLinks";
import { FastFood } from "./FastFood";
import { FoodAdds } from "./FoodAdds";
import { Drinks } from "./Drinks";
import { Combo } from "./Combo";

export function Menu() {
  const match = useRouteMatch();

  return (<Router>
    <div className="menu-container">
      <div className="sub-menu">
        <ul className="sub-menu-links">
          <li>
            <SubMenuLink href={`${match.url}/fast-food`}>Fast Food</SubMenuLink>
          </li>
          <li>
            <SubMenuLink href={`${match.url}/adds`}>Добавки</SubMenuLink>
          </li>
          <li>
            <SubMenuLink href={`${match.url}/drinks`}>Напитки</SubMenuLink>
          </li>
          <li>
            <SubMenuLink href={`${match.url}/combo`}>Комбо-меню</SubMenuLink>
          </li>
        </ul>
      </div>
      <div className="sub-menu-items">
        <Switch>
          <Route path={`${match.path}/fast-food`} component={FastFood}></Route>
          <Route path={`${match.path}/adds`} component={FoodAdds}></Route>
          <Route path={`${match.path}/drinks`} component={Drinks}></Route>
          <Route path={`${match.path}/combo`} component={Combo}></Route>
          <Redirect from={`/menu`} to={`/menu/fast-food`} ></Redirect>
        </Switch>
      </div>
    </div></Router>
  );
}
