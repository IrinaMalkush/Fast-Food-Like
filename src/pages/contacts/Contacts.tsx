import { baseBoxShadow } from "like-ui-components";
import React, { useEffect } from "react";
import styled from "styled-components";

import { AddressOnMap } from "./map/AddressOnMap";

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Text>Мы ждём вас по адресам:</Text>
      <AddressWrapper>
        <FirstAddressWrapper>
          <Address>
            <Smile> &#9786; </Smile> Бендеры, ул.Суворова, остановка троллейбусов 2, 3 и 4 возле
            школы бокса{" "}
          </Address>
        </FirstAddressWrapper>

        <FirstWorkTime>
          <WorkTime>9:00 - 23:00</WorkTime>
        </FirstWorkTime>

        <FirstMapWrapper>
          <AddressOnMap Xcoord={46.822167680023256} Ycoord={29.483098566886962} />
        </FirstMapWrapper>

        <SecondAddressWrapper>
          <Address>
            <Smile> &#9786; </Smile> г. Тирасполь, ул. Свердлова 36, ТЦ "ЛИМО"{" "}
          </Address>
        </SecondAddressWrapper>

        <SecondWorkTime>
          <WorkTime>9:00 - 2:00</WorkTime>
        </SecondWorkTime>

        <SecondMapWrapper>
          <AddressOnMap Xcoord={46.834937} Ycoord={29.62033} />
        </SecondMapWrapper>
      </AddressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-top: 28px;
  padding-bottom: 100px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.systymColors.brown400};
  font-size: 20px;
  margin-left: 50px;
  margin-top: 0;
`;

const AddressWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-areas:
    "firstaddress firsttime firstmap"
    "secondaddress secondtime secondmap";
  grid-template-columns: 335px 130px 1fr;
  gap: 4px;

  & > * {
    border: 2px double ${({ theme }) => theme.systymColors.border};
    background-color: ${({ theme }) => theme.systymColors.background100};
    ${baseBoxShadow};
  }

  @media screen and (max-width: 1080px) {
    margin: 15px;
    grid-template-areas:
      "firstaddress firsttime"
      "firstmap firstmap"
      "secondaddress secondtime"
      "secondmap secondmap";
    grid-template-columns: 1fr 200px;
  }

  @media screen and (max-width: 768px) {
    margin: 10px;
    grid-template-columns: 1fr 140px;
  }

  @media screen and (max-width: 480px) {
    margin: 5px;
    grid-template-areas:
      "firstaddress" "firsttime"
      "firstmap"
      "secondaddress" "secondtime"
      "secondmap";
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 320px) {
    margin: 6px;
  }
`;

const FirstAddressWrapper = styled.div`
  grid-area: firstaddress;
`;

const SecondAddressWrapper = styled.div`
  grid-area: secondaddress;
`;

const FirstWorkTime = styled.div`
  grid-area: firsttime;
`;

const SecondWorkTime = styled.div`
  grid-area: secondtime;
`;

const FirstMapWrapper = styled.div`
  grid-area: firstmap;
`;

const SecondMapWrapper = styled.div`
  grid-area: secondmap;
`;

const Address = styled.p`
  font-size: 17px;
  color: ${({ theme }) => theme.systymColors.brown400};
  margin: 15px;
  line-height: 25px;
`;

const Smile = styled.span`
  font-size: 25px;
  color: #fd7209;
`;

const WorkTime = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.systymColors.brown400};
  margin: 18px;
  line-height: 25px;
  text-align: center;
`;
