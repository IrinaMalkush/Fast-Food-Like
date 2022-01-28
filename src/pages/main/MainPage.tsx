import React, { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { newsSelector } from "../../modules/news/NewsSelector";
import { fetchNews } from "../../modules/news/FetchNewsThunk";
import { NewsFeed } from "./components/NewsFeed";
import { INewsItem } from "../../api/types/INew";
import { Carousel } from "./components/Carousel";
import styles from "./styles.module.css";
import { Pagination } from "../../ui/pagination/Pagination";
import { NumberOfItemsOnPage } from "../../ui/pagination/NumberOfItemsOnPage";
import { Loader } from "../../ui/loader/Loader";

export function MainPage(): ReactElement {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [itemsOnPage, setItemsOnPage] = useState(10);

  const dispatch = useAppDispatch();
  const newsList = useAppSelector(newsSelector);
  console.log("newsList: ", newsList);
  let pageCount = Math.ceil(newsList.total / itemsOnPage);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPageNumber, pageSize: itemsOnPage }));
  }, [currentPageNumber, itemsOnPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectNumberOfItems = (page: number) => {
    setItemsOnPage(page);
  };

  const clickedPage = (selectedItem: { selected: number }): void => {
    setCurrentPageNumber(selectedItem.selected + 1);
    // dispatch(fetchNews({ page: selectedItem.selected + 1, pageSize: itemsOnPage }));
  };

  const currentPageNews = newsList ? (
    newsList.items.map((item: INewsItem, index) => (
      <NewsFeed
        key={index}
        dateOfNew={item.dateOfNew}
        image={item.image}
        newsItem={item.newsItem}
      />
    ))
  ) : (
    <Loader />
  );

  return (
    <div className={styles.container}>
      <Carousel />
      <p className={styles.newsTitle}>Новости Fast Food Like</p>
      {currentPageNews}
      <div className={styles.paginationContainer}>
        <Pagination pageCount={pageCount} clickedPage={clickedPage} />
      </div>
      <NumberOfItemsOnPage selectNumberOfItems={selectNumberOfItems} />
    </div>
  );
}
