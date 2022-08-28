import React from "react";
import styled from "styled-components";

import logo from "../../assets/img/logo.jpg";
import { Phones } from "./components/Phones";
import { RightBlock } from "./components/RightBlock";

export const Header = () => {
  return (
    <HeaderContainer>
      <Phones />
      <Logo>
        <Link href="/">
          <Image src={logo} alt="fast-food-like-logo" />
        </Link>
      </Logo>
      <RightBlock />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  height: 170px;
  width: 170px;
  margin: 0 15px;
`;

const Link = styled.a``;

const Image = styled.img`
  height: 100%;
  border-radius: 8px;
`;
