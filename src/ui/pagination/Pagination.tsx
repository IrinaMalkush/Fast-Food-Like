import React from "react";
import styles from "./styles.module.css";
import ReactPaginate from "react-paginate";

interface IProps {
  pageCount: number;
  clickedPage: (selectedItem: { selected: number }) => void;
}

export function Pagination({ pageCount, clickedPage }: IProps) {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={clickedPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName={styles.pageContainer}
      previousLinkClassName={styles.prevNext}
      nextLinkClassName={styles.prevNext}
      activeClassName={styles.activePage}
      pageLinkClassName={styles.pageLink}
      disabledClassName={styles.disabled}
    />
  );
}
