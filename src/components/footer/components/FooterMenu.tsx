import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterMenu = () => {
  return (
    <Menu>
      <MenuItem>
        <StyledNavLink to={"/"}>Главная</StyledNavLink>
        <Divider />
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={"/menu"}>Меню</StyledNavLink>
        <Divider />
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={"/delivery"}>Доставка</StyledNavLink>
        <Divider />
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={"/events"}>Акции</StyledNavLink>
        <Divider />
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={"/contacts"}>Контакты</StyledNavLink>
        <Divider />
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={"/comments"}>Отзывы</StyledNavLink>
        <Divider />
      </MenuItem>
      <MenuItem>
        <StyledNavLink to={"/gallery"}>Галерея</StyledNavLink>
      </MenuItem>
    </Menu>
  );
};

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;

  @media screen and (max-width: 392px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #948865;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 542px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

const Divider = styled.div`
  height: 16px;
  width: 1px;
  background-color: #948865;
  margin: 0 10px;

  @media screen and (max-width: 542px) {
    margin: 0 3px;
  }

  @media screen and (max-width: 480px) {
    margin: 0 2px;
  }
`;
