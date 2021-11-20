import React, { ReactElement } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./styles.module.css";

interface IAddressOnMapProps {
  Xcoord: number;
  Ycoord: number;
}

export function AddressOnMap({ Xcoord, Ycoord }: IAddressOnMapProps): ReactElement {
  return (
    <YMaps>
      <div className={styles.map}>
        <Map className={styles.mapContainer} defaultState={{ center: [Xcoord, Ycoord], zoom: 19 }}>
          <Placemark geometry={[Xcoord, Ycoord]} />
        </Map>
      </div>
    </YMaps>
  );
}
