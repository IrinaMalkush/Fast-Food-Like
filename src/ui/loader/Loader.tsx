import React, { ReactElement } from "react";
import styles from "./styles.module.css";

export function Loader(): ReactElement {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loadingCircle} />
    </div>
  );
}
