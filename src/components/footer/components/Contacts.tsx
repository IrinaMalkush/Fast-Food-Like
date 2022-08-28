import React from "react";
import styled from "styled-components";

import instaBW from "../../../assets/img/instabw.png";

export const Contacts = () => {
  return (
    <Wrapper>
      <Phone>
        <PhoneNumber>&#x260E; Телефон: 0 (775) 05057</PhoneNumber>
      </Phone>
      <LinksMenu>
        <Links target="_blank" href="https://www.instagram.com/like_pmr/" rel="noopener noreferrer">
          <LinkImage src={instaBW} alt="instagram-link" />
          <LinkName>- Instagram</LinkName>
        </Links>
      </LinksMenu>
      <Addresses>
        <AddressText>
          <span role="img" aria-label="like">
            &#x1F44D;
          </span>{" "}
          Бендеры, ул.Суворова, остановка троллейбусов 2, 3 и 4 возле школы бокса
        </AddressText>
        <AddressText>
          <span role="img" aria-label="like">
            &#x1F44D;
          </span>{" "}
          г. Тирасполь, ул. Свердлова 36, ТЦ "ЛИМО"
        </AddressText>
      </Addresses>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  @media screen and (max-width: 392px) {
    width: 300px;
  }
`;

const Phone = styled.div`
  margin: 5px 20px;
  width: 352px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 1080px) {
    margin: 5px 10px;
    width: 290px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 340px;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 340px;
    justify-content: center;
  }

  @media screen and (max-width: 392px) {
    margin: 10px 0 0 0;
    width: 290px;
    justify-content: center;
  }
`;

const PhoneNumber = styled.p`
  margin: 5px 10px;
  color: #948865;

  @media screen and (max-width: 1080px) {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    font-size: 14px;
  }

  @media screen and (max-width: 392px) {
    margin: 0;
    font-size: 14px;
  }
`;

const LinksMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 5px;
  }

  @media screen and (max-width: 480px) {
    margin: 5px;
  }

  @media screen and (max-width: 392px) {
    margin: 5px;
  }
`;

const Links = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin: 0 30px;

  @media screen and (max-width: 1080px) {
    margin: 0 0 0 10px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
  }

  @media screen and (max-width: 392px) {
    margin: 0;
  }
`;

const LinkImage = styled.img`
  height: 20px;

  @media screen and (max-width: 768px) {
    height: 16px;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    height: 16px;
    margin: 0;
  }

  @media screen and (max-width: 392px) {
    height: 16px;
    margin: 0;
  }
`;

const LinkName = styled.p`
  text-decoration: none;
  color: #948865;
  margin: 5px;
  font-size: 16px;
  width: 85px;

  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    font-size: 15px;
  }

  @media screen and (max-width: 392px) {
    margin: 0;
    font-size: 15px;
  }
`;

const Addresses = styled.div`
  margin: 5px 20px;
  width: 352px;

  @media screen and (max-width: 1080px) {
    margin: 5px 10px;
    width: 290px;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 350px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 350px;
  }

  @media screen and (max-width: 392px) {
    margin: 0;
    width: 290px;
  }
`;

const AddressText = styled.p`
  margin: 5px;
  color: #948865;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    font-size: 14px;
  }

  @media screen and (max-width: 392px) {
    margin: 0;
    font-size: 12px;
  }
`;
