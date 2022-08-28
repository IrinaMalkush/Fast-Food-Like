import React from "react";
import styled from "styled-components";

interface INewsFeedProps {
  dateOfNew: string;
  image: string;
  newsItem: string;
}

export const NewsFeed = ({ dateOfNew, image, newsItem }: INewsFeedProps) => {
  return (
    <>
      {/*newsList.sort( (a,b) =>b.id-a.id).map((element)*/}
      <Content>
        <NewsImage>
          <Image src={image} alt="news" />
        </NewsImage>
        <NewsTextData>
          <Item>{newsItem}</Item>
          <Date>{dateOfNew}</Date>
        </NewsTextData>
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--textDark);
  padding: 10px;
  width: 750px;
  background-color: var(--background100);
  box-shadow: var(--base-shadow);
  border: 3px solid var(--base-border);
  border-radius: 6px;
  box-sizing: content-box;
  margin-bottom: 20px;

  @media screen and (max-width: 1080px) {
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    width: 600px;
  }

  @media screen and (max-width: 644px) {
    width: 460px;
  }

  @media screen and (max-width: 542px) {
    width: 460px;
  }

  @media screen and (max-width: 522px) {
    width: 440px;
  }

  @media screen and (max-width: 494px) {
    width: 370px;
  }

  @media screen and (max-width: 394px) {
    width: 300px;
  }
`;

const NewsImage = styled.div``;

const Image = styled.img`
  width: 200px;
`;

const NewsTextData = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-left: 15px;
`;

const Item = styled.div``;

const Date = styled.div`
  color: var(--textLight);
  font-size: 15px;
  line-height: 40px;
  margin: 10px 10px 0 0;
  align-self: flex-end;
`;
