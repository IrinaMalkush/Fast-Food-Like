import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { INewsItem } from "../../api/types/INew";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { fetchNews } from "../../modules/news/FetchNewsThunk";
import { newsSelector } from "../../modules/news/NewsSelector";
import { NumberOfItemsOnPage } from "../common/pagination/NumberOfItemsOnPage";
import { Pagination } from "../common/pagination/Pagination";
import { Carousel } from "./components/Carousel";
import { NewsFeed } from "./components/NewsFeed";

export const MainPage = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [itemsOnPage, setItemsOnPage] = useState(10);

  const dispatch = useAppDispatch();
  const newsList = useAppSelector(newsSelector);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPageNumber, pageSize: itemsOnPage }));
  }, [currentPageNumber, itemsOnPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectNumberOfItems = (page: number) => {
    setItemsOnPage(page);
  };

  const clickedPage = (page: number) => {
    setCurrentPageNumber(page);
    // dispatch(fetchNews({ page: page, pageSize: itemsOnPage }));
  };

  const currentPageNews = newsList.items.map((item: INewsItem) => (
    <NewsFeed
      dateOfNew={item.dateofnew}
      image={item.image}
      newsItem={item.newsitem}
      key={item.id}
    />
  ));

  return (
    <Container>
      <Carousel />
      <NewsTitle>Новости Fast Food Like</NewsTitle>
      {currentPageNews}
      <Pagination
        current={currentPageNumber}
        total={newsList.total}
        clickedPage={clickedPage}
        onPage={itemsOnPage}
      />
      <NumberOfItemsOnPage selectNumberOfItems={selectNumberOfItems} />
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const NewsTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: var(--base-font);
  color: #948865;

  @media screen and (max-width: 522px) {
    font-size: 20px;
  }

  @media screen and (max-width: 354px) {
    font-size: 15px;
  }
`;
