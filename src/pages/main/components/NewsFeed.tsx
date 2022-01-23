import React, { ReactElement } from "react";
import styles from "../styles.module.css";
import { DateFormat } from "../../../helpers/DateFormat";

interface INewsFeedProps {
  dateOfNew: string;
  image: string;
  newsItem: string;
}

export function NewsFeed({ dateOfNew, image, newsItem }: INewsFeedProps): ReactElement {
  return (
    <div>
      {/*newsList.sort( (a,b) =>b.id-a.id).map((element)*/}
      <div className={styles.content}>
        <div className={styles.newsImage}>
          <img src={image} alt="news" />
        </div>
        <div className={styles.newsTextData}>
          <p>{newsItem}</p>
          <DateFormat date={dateOfNew} />
        </div>
      </div>
    </div>
  );
}
