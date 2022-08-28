import React from "react";
import styled from "styled-components";

import notFound from "../../assets/img/noPageFound.png";

export const NoPageFound = () => {
  return (
    <Wrapper>
      <Image src={notFound} alt="no-page-found" />
      <Text>404... Страница не найдeна...</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 35px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 35px;
  }

  @media screen and (max-width: 320px) {
    margin-top: 20px;
  }
`;

const Image = styled.img`
  height: 430px;

  @media screen and (max-width: 480px) {
    width: 244px;
    height: 417px;
    margin-left: 15px;
  }

  @media screen and (max-width: 320px) {
    width: 163px;
    height: 278px;
    margin-left: 15px;
  }
`;

const Text = styled.p`
  margin: 45px;
  padding-top: 60px;
  color: #574d32;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    margin: 15px;
    padding-top: 0;
    font-size: 20px;
    text-align: right;
  }

  @media screen and (max-width: 320px) {
    margin: 15px;
    padding-top: 0;
    font-size: 17px;
    text-align: right;
  }
`;
