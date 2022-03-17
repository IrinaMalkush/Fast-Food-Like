import React, { ReactElement, useEffect } from "react";
import { newsList } from "../../components/NewsList";
import styles from "./styles.module.css";

export function Events(): ReactElement {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.promotion}>
      <div className={styles.container}>
        {newsList.map((element) => {
          if (Boolean(element.promotion)) {
            return (
              <div className={styles.content} key={element.id}>
                <div className={styles.image}>
                  <img src={element.image} alt="prom" />
                </div>
                <div className={styles.textDate}>
                  <p>{element.new}</p>
                  <p>{element.dateofnew}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
