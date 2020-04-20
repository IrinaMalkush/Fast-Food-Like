import React from "react";
import "./stylesContacts.css";
import { AddressOnMap } from "./AddressOnMap";

export function Contacts() {
  return (
    <div className="contactstext">
      <p>Мы ждём вас по адресам:</p>
      <div className="addresses">
        <div>
          <p className="address">
            <span> &#9786; </span> Ул.Суворова, остановка троллейбуса (Район школы бокса){" "}
          </p>
        </div>
        <div>
          <p className="work-time">10:00 - 2:00</p>
        </div>
        <div>
          <AddressOnMap Xcoord={46.822167680023256} Ycoord={29.483098566886962} />
        </div>
        <div>
          <p className="address">
            <span> &#9786; </span> Центральный рынок, павильон "синяя крыша",
            бутик #3{" "}
          </p>
        </div>
        <div>
          <p className="work-time">7:00 - 20:00</p>
        </div>
        <div>
        <AddressOnMap Xcoord={46.82433860604276} Ycoord={29.483430146225185} />
        </div>
      </div>
    </div>
  );
}
