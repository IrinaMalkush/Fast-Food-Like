import React, { ReactElement, useEffect } from "react";
import styles from "./stylesContacts.module.css";
import { AddressOnMap } from "../../ui/map/AddressOnMap";

export function Contacts(): ReactElement {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.text}>
      <p>Мы ждём вас по адресам:</p>
      <div className={styles.addresses}>
        <div className={styles.address1}>
          <p className={styles.address}>
            <span> &#9786; </span> Бендеры, ул.Суворова, остановка троллейбусов 2, 3 и 4 возле школы
            бокса{" "}
          </p>
        </div>
        <div className={styles.worktime1}>
          <p className={styles.workTime}>9:00 - 23:00</p>
        </div>
        <div className={styles.map1}>
          <AddressOnMap Xcoord={46.822167680023256} Ycoord={29.483098566886962} />
        </div>
        <div className={styles.address2}>
          <p className={styles.address}>
            <span> &#9786; </span> г. Тирасполь, ул. Свердлова 36, ТЦ "ЛИМО"{" "}
          </p>
        </div>
        <div className={styles.worktime2}>
          <p className={styles.workTime}>9:00 - 2:00</p>
        </div>
        <div className={styles.map2}>
          <AddressOnMap Xcoord={46.834937} Ycoord={29.62033} />
        </div>
      </div>
    </div>
  );
}
