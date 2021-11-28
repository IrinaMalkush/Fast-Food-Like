import React, { ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { fetchComments } from "../../modules/comment/FetchCommentsThunk";
import { commentsSelector } from "../../modules/comment/CommentsSelector";
import { Pagination } from "../../ui/pagination/Pagination";
import { AddComment } from "./AddComment";

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
      <AddComment />
      <span className={styles.speech}>
        Мы всегда стремимся обеспечить идеальное обслуживание наших покупателей и предложить
        качественную продукцию, и ваша точка зрения помогает нам в этом. Пожалуйста, напишите, что
        вы думаете о нас, нашей продукции, обслуживании. Что вам понравилось? Что НЕ понравилось?
        Обратная связь от вас — это лучший способ понять, все ли мы делаем верно. И улучшить то, что
        можно улучшить! Напишите все, что думаете о нашей работе — честно и открыто. Будем
        благодарны, если вы поможете сделать компанию еще более полезной для клиентов!
      </span>
      <div className={styles.commentsWrapper}>
        {commentsList.items.map((item) => (
          <div key={item.id}>
            <div className={styles.itemContainer}>
              <p className={styles.text}>
                <span className={styles.name}>{item.name}:</span>
                {item.text}
              </p>
              <div className={styles.date}>{item.date}</div>
            </div>
            {item.comment &&
              item.comment.map((innerItem) => (
                <div className={styles.replyWrapper} key={innerItem.id}>
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
          </div>
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
