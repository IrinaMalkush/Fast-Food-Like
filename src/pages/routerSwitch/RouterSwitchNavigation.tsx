import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "../main/MainPage";
import { Menu } from "../foodMenu/Menu";
import { Delivery } from "../delivery/Delivery";
import { Events } from "../events/Events";
import { Contacts } from "../contacts/Contacts";
import { Comments } from "../comments/Comments";
import { Gallery } from "../gallery/Gallery";
import { NoPageFound } from "../notFound/NoPageFound";

export function RouterSwitchNavigation(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/menu" component={Menu} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/gallery" component={Gallery} />
      <Route path="/notfound" component={NoPageFound} />
      <Redirect to="/notfound" />
    </Switch>
  );
}
