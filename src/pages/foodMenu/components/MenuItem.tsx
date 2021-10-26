import * as React from "react";
import { Link } from "react-router-dom";
import { IMenuItem } from "../../../api/types/IMenu";

interface MenuItemProps {
  element: IMenuItem;
  url: string;
}

export function MenuItem({ element, url }: MenuItemProps): React.ReactElement {
  return (
    <div className="menu-item">
      <Link to={`${url}/${element.id}`}>
        <img
          className="menu-item-image"
          src={element.image}
          alt={element.name}
        />
      </Link>
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
  );
}
