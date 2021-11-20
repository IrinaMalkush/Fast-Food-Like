import React, { ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { fetchComments } from "../../modules/comment/FetchCommentsThunk";
import { commentsSelector } from "../../modules/comment/CommentsSelector";
import { Pagination } from "../../ui/pagination/Pagination";

export function Comments(): ReactElement {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const dispatch = useAppDispatch();
  const commentsList = useAppSelector(commentsSelector);
  console.log(commentsList);

  useEffect(() => {
    dispatch(fetchComments({ page: currentPageNumber }));
  }, [currentPageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clickedPage = (page: number) => {
    setCurrentPageNumber(page);
  };

  return (
    <div className={styles.pageWrapper}>
      <span className={styles.title}>отзывы</span>
      <span className={styles.leaveReview}>оставить отзыв</span>
      <div className={styles.commentsWrapper}>
        {commentsList.items.map((item) => (
          <>
            <div className={styles.itemContainer}>
              <p className={styles.text}>
                <span className={styles.name}>{item.name}:</span>
                {item.text}
              </p>
              <div className={styles.date}>{item.date}</div>
            </div>
            {item.comment &&
              item.comment.map((innerItem) => (
                <div className={styles.replyWrapper}>
                  <div className={styles.replyItemContainer}>
                    <span className={styles.icon}>&#8617;</span>
                    <p className={styles.text}>
                      <span className={styles.name}>{innerItem.name}:</span>
                      {innerItem.text}
                    </p>
                    <div className={styles.date}>{innerItem.date}</div>
                  </div>
                </div>
              ))}
          </>
        ))}
      </div>
      <Pagination
        current={currentPageNumber}
        total={commentsList.total}
        onPage={10}
        clickedPage={clickedPage}
      />
    </div>
  );
}
