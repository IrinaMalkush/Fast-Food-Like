import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export function AddressOnMap({ Xcoord, Ycoord }) {
  return (
    <YMaps>
      <div className="address-map">
        <Map className="Map-container" defaultState={{ center: [Xcoord, Ycoord], zoom: 19 }}>
            <Placemark geometry={[Xcoord, Ycoord]} />
        </Map>
      </div>
    </YMaps>
  );
}