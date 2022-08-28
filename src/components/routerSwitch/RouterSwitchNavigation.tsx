import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { LoginPage } from "../../pages/authorization/LoginPage";
import { SignupPage } from "../../pages/authorization/SignupPage";
import { Comments } from "../../pages/comments/Comments";
import { Contacts } from "../../pages/contacts/Contacts";
import { Delivery } from "../../pages/delivery/Delivery";
import { Events } from "../../pages/events/Events";
import { Menu } from "../../pages/foodMenu/Menu";
import { Gallery } from "../../pages/gallery/Gallery";
import { MainPage } from "../../pages/main/MainPage";
import { NoPageFound } from "../../pages/notFound/NoPageFound";

export const RouterSwitchNavigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/menu" component={Menu} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route path="/notfound" component={NoPageFound} />
      <Redirect to="/notfound" />
    </Switch>
  );
};
