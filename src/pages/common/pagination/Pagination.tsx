import React from "react";

import styles from "./styles.module.css";

interface IProps {
  current: number;
  total: number;
  onPage: number;
  clickedPage: (page: number) => void;
}

export function Pagination({ current, total, clickedPage, onPage }: IProps) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / onPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      <li className={current === 1 ? styles.disabled : styles.page}>
        <span
          onClick={() => {
            clickedPage(1);
          }}
        >
          &laquo;
        </span>
      </li>
      <li className={current === 1 ? styles.disabled : styles.page}>
        <span
          onClick={() => {
            clickedPage(current - 1);
          }}
        >
          &lt;
        </span>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <span
            className={current === number ? styles.currentNumber : styles.page}
            onClick={() => clickedPage(number)}
          >
            {number}
          </span>
        </li>
      ))}
      <li className={current === total ? styles.disabled : styles.page}>
        <span
          onClick={() => {
            clickedPage(current + 1);
          }}
        >
          &gt;
        </span>
      </li>
      <li className={current === total ? styles.disabled : styles.page}>
        <span
          onClick={() => {
            clickedPage(total);
          }}
        >
          &raquo;
        </span>
      </li>
    </ul>
  );
}
