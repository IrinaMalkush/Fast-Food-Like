import React, { ChangeEvent } from "react";
import styles from "./styles.module.css";

interface IProps {
  selectNumberOfItems: (page: number) => void;
}

export function NumberOfItemsOnPage({ selectNumberOfItems }: IProps) {
  return (
    <div className={styles.numberOfItems}>
      <p>Количество строк на странице:</p>
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => selectNumberOfItems(+e.target.value)}
      >
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
}
