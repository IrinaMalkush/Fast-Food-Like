import React, { ReactElement } from "react";
import notFound from "../../assets/img/noPageFound.png";
import styles from "./styles.module.css";

export function NoPageFound(): ReactElement {
  return (
    <div className={styles.notFound}>
      <img src={notFound} alt="no-page-found" />
      <p>404... Страница не найдeна...</p>
    </div>
  );
}
