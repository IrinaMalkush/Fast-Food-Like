import { baseBoxShadow } from "like-ui-components";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { commentsSelector } from "../../modules/comment/CommentsSelector";
import { fetchComments } from "../../modules/comment/FetchCommentsThunk";
import { Pagination } from "../common/pagination/Pagination";
import { AddComment } from "./AddComment";

export const Comments = () => {
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
    <Wrapper>
      <Title>отзывы</Title>
      <AddComment />
      <Speech>
        Мы всегда стремимся обеспечить идеальное обслуживание наших покупателей и предложить
        качественную продукцию, и ваша точка зрения помогает нам в этом. Пожалуйста, напишите, что
        вы думаете о нас, нашей продукции, обслуживании. Что вам понравилось? Что НЕ понравилось?
        Обратная связь от вас — это лучший способ понять, все ли мы делаем верно. И улучшить то, что
        можно улучшить! Напишите все, что думаете о нашей работе — честно и открыто. Будем
        благодарны, если вы поможете сделать компанию еще более полезной для клиентов!
      </Speech>
      <CommentsWrapper>
        {commentsList.items.map((comment) => (
          <Comment key={comment.id}>
            <ItemContainer>
              <Text>
                <Name>{comment.name}:</Name>
                {comment.text}
              </Text>
              <Date>{comment.date}</Date>
            </ItemContainer>
            {comment.comment &&
              comment.comment.map((reply) => (
                <ReplyWrapper key={reply.id}>
                  <ReplyContainer>
                    <Icon>&#8617;</Icon>
                    <Text>
                      <Name>{reply.name}:</Name>
                      {reply.text}
                    </Text>
                    <Date>{reply.date}</Date>
                  </ReplyContainer>
                </ReplyWrapper>
              ))}
          </Comment>
        ))}
      </CommentsWrapper>
      <Pagination
        current={currentPageNumber}
        total={commentsList.total}
        onPage={10}
        clickedPage={clickedPage}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.systymColors.brown200};
  font-size: 28px;
  text-transform: uppercase;
  margin: 50px 0 0;
`;

export const Speech = styled.span`
  padding: 20px 60px;
  font-size: 18px;
  line-height: 28px;
  color: #564743;
  text-align: center;
`;

const CommentsWrapper = styled.div`
  margin: 0 30px;
`;

const Comment = styled.div``;

const ItemContainer = styled.div`
  background-color: ${({ theme }) => theme.systymColors.background100};
  border: 3px solid ${({ theme }) => theme.systymColors.border};
  ${baseBoxShadow};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 40px 80px 0;
  padding: 15px 20px;

  & > * {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.systymColors.brown50};
  padding: 0 0 0 8px;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.systymColors.brown200};
  margin: 0 8px 2px 12px;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.systymColors.brown400};
  margin-left: 30px;
`;

const ReplyWrapper = styled.div`
  margin-left: 50px;
`;

const ReplyContainer = styled.div`
  background-color: ${({ theme }) => theme.systymColors.background100};
  border: 3px solid ${({ theme }) => theme.systymColors.border};
  ${baseBoxShadow};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 10px 60px 10px 80px;
  padding: 15px 20px;
  position: relative;

  & > * {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Icon = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.systymColors.blue400};
  position: absolute;
  top: 10px;
  left: 12px;
`;
