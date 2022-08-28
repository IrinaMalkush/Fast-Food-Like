import { textShadowOrange } from "like-ui-components";
import React from "react";
import styled from "styled-components";

export const Phones = () => {
  return (
    <Wrapper>
      <Phone>
        <Icon>&#9742;</Icon>
        <Number>0(533)55455</Number>
        <City> - Тирасполь</City>
      </Phone>
      <Phone>
        <Icon>&#9742;</Icon>
        <Number>0(775)05057</Number>
        <City> - Бендеры</City>
      </Phone>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px 16px;
  width: 468px;
`;

const Phone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.systemColors.white};
  ${textShadowOrange};
  font-size: 18px;
  margin: 0 8px 2px 0;
`;

const Number = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.systemColors.white};
  ${textShadowOrange};
  margin: 0;
  padding: 10px 5px 0 0;
`;

const City = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.systemColors.white};
  ${textShadowOrange};
  margin: 0;
  padding: 10px 0 1px;
`;
