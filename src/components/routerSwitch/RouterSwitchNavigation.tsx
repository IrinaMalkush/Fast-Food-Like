import React, { ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "../../pages/main/MainPage";
import { Menu } from "../../pages/foodMenu/Menu";
import { Delivery } from "../../pages/delivery/Delivery";
import { Events } from "../../pages/events/Events";
import { Contacts } from "../../pages/contacts/Contacts";
import { Comments } from "../../pages/comments/Comments";
import { Gallery } from "../../pages/gallery/Gallery";
import { NoPageFound } from "../../pages/notFound/NoPageFound";
import { LoginPage } from "../../pages/authorization/LoginPage";
import { SignupPage } from "../../pages/authorization/SignupPage";

export function RouterSwitchNavigation(): ReactElement {
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
}
