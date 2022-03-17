import React, { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { newsSelector } from "../../modules/news/NewsSelector";
import { fetchNews } from "../../modules/news/FetchNewsThunk";
import { NewsFeed } from "./components/NewsFeed";
import { INewsItem } from "../../api/types/INew";
import { Carousel } from "./components/Carousel";
import { Pagination } from "../../ui/pagination/Pagination";
import { NumberOfItemsOnPage } from "../../ui/pagination/NumberOfItemsOnPage";
import styled from "styled-components";

export function MainPage(): ReactElement {
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
}

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
