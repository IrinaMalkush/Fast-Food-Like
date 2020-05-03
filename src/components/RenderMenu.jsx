import React from "react";
import {ImageLink} from "./ImageLink";
import { BrowserRouter as Router, useRouteMatch, Route, Switch, useParams } from "react-router-dom";

export function RenderMenu({ menuitemslist }) {
  const match = useRouteMatch();

  return (
    <Router>
    <div className="menu-items-container">
      {menuitemslist.map((element) => (
        <div className="menu-item">
          <ImageLink href={`${match.url}/${element.id}`}><img className="menu-item-image" src={element.image} alt={element.name} /></ImageLink>
          <p className="menu-item-name">{element.name}</p>
          <p className="menu-item-description">{element.description}</p>
          <div className="prices">
            {element.pricelist.map((item) => (
              <div className="price">
                <p>{item.pricename} </p>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Switch>
        <Route path={`${match.path}/:imageId`}>
          <FullImage itemslist={menuitemslist} backPath={`${match.path}`} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export function FullImage({itemslist, backPath}) {
  let { imageId } = useParams();
  let indx = parseInt(imageId, 10);

  return (
    <div className="big-image-background">
      <div className="show-big-image">
        <a href={backPath}><span>&#10008;</span></a>
        <img src={itemslist[indx].fullimage} alt={itemslist[indx].name} />
      </div>
    </div>
);
}