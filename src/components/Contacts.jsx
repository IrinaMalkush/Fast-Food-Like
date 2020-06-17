import React from "react";
import "./stylesContacts.css";
import { AddressOnMap } from "./AddressOnMap";

export function Contacts() {
  return (
    <div className="contactstext">
      <p>Мы ждём вас по адресу:</p>
      <div className="addresses">
        <div className="address1">
          <p className="address">
            <span> &#9786; </span> Ул.Суворова, остановка троллейбуса (Район школы бокса){" "}
          </p>
        </div>
        <div className="worktime1">
          <p className="work-time">9:00 - 2:00</p>
        </div>
        <div className="map1">
          <AddressOnMap Xcoord={46.822167680023256} Ycoord={29.483098566886962} />
        </div>
      </div>
    </div>
  );
}
