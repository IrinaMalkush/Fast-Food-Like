import React from "react";
import styled from "styled-components";

import { Contacts } from "./components/Contacts";
import { FooterMenu } from "./components/FooterMenu";

export const PageFooter = () => {
  return (
    <Footer>
      <FooterMenu />
      <Contacts />
      <Copyright>2018-2022 &copy; Fast Food Like</Copyright>
      <CopyDev>Разработка сайта: Ирина Долгонюк</CopyDev>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.systemColors.white};
  color: #948865;
  margin: 10px 0 0 0;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    margin: 8px 0 10px 0;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    margin: 8px 0 10px 0;
    font-size: 12px;
  }
`;

const CopyDev = styled.p`
  color: #948865;
  margin: 0 15px 15px 0;
  font-size: 12px;
  align-self: flex-end;

  @media screen and (max-width: 768px) {
    margin: 0 10px 10px 0;
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    margin: 0 8px 8px 0;
    font-size: 10px;
  }
`;
