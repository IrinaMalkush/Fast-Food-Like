import React from "react";
import styled from "styled-components";

import { ReactComponent as MenuHamburger } from "../../assets/svgs/menu.svg";
import { RouterSwitchNavigation } from "../routerSwitch/RouterSwitchNavigation";
import { navigationItems } from "./components/navigationItems";
import { NavigationLink } from "./components/NavigationLink";

export const Navigation = () => {
  return (
    <>
      <NavigationMenu>
        <Toggle type="checkbox" hidden id="menu" />
        <ToggleMenu htmlFor="menu">
          <MenuHamburger />
        </ToggleMenu>
        <MenuLinks>
          {Object.values(navigationItems).map((item) => (
            <NavigationLink nav={item} key={item.name} />
          ))}
        </MenuLinks>
      </NavigationMenu>
      <MainPart>
        <RouterSwitchNavigation />
      </MainPart>
    </>
  );
};

const NavigationMenu = styled.nav`
  height: 45px;
  position: sticky;
  top: 0;
  z-index: 999;
  background: linear-gradient(to right, #eda516, #e77f11);
  box-shadow: -2px 4px 7px rgba(164, 139, 113, 0.25);

  @media screen and (max-width: 768px) {
    height: 30px;
  }

  @media screen and (max-width: 630px) {
    height: 30px;
    border-top: 1px solid #f4c91c;
    border-bottom: 1px solid #f4c91c;
  }
`;

const Toggle = styled.input`
  @media screen and (max-width: 630px) {
    margin: 0;
  }

  @media screen and (max-width: 630px) {
    &:checked ~ ul {
      display: block;
    }
  }
`;

const ToggleMenu = styled.label`
  display: none;
  cursor: pointer;
  position: relative;
  height: 30px;

  @media screen and (max-width: 630px) {
    display: block;
  }

  @media screen and (max-width: 630px) {
    & > svg {
      position: absolute;
      top: 3px;
      left: 15px;
    }
`;

const MainPart = styled.main`
  background-color: ${({ theme }) => theme.systemColors.background200};
  box-sizing: content-box;
  min-height: 600px;
`;

const MenuLinks = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 630px) {
    display: none;
    overflow: unset;
  }
`;
