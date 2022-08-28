import { baseBoxShadow } from "like-ui-components";
import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

import { INavigationLinks, LinkDirectionType } from "./navigationItems";

interface INavigationLinkProps {
  nav: INavigationLinks;
}

export const NavigationLink = ({ nav }: INavigationLinkProps) => {
  return (
    <Wrapper>
      <LinkWrapper $direction={nav.direction}>
        <StyledNavLink to={nav.path} exact={nav.exact}>
          <LinkName $direction={nav.direction}>{nav.name}</LinkName>
        </StyledNavLink>
      </LinkWrapper>
    </Wrapper>
  );
};

type ISCCResult = ReturnType<typeof css>;

const linkTypeSchema: Record<LinkDirectionType, ISCCResult> = {
  right: css`
    transform-origin: 0 100%;
    transform: skew(-35deg);

    @media screen and (max-width: 630px) {
      transform: none;
    }
  `,

  straight: css`
    transform-origin: 0 100%;
    transform: skew(35deg);

    &:hover,
    &:focus {
      border-bottom: 45px solid #e8c374;
      transition-duration: 0.3s;
    }

    @media screen and (max-width: 1080px) {
      width: 80px;
    }

    @media screen and (max-width: 768px) {
      width: 68px;
      border-bottom: 30px solid #edd6a2;
      border-left: 19px solid transparent;
      border-right: 19px solid transparent;
    }

    @media screen and (max-width: 630px) {
      width: auto;
      height: auto;
      border-bottom: none;
      border-left: none;
      border-right: none;

      &:hover {
        border-bottom: 0;
      }
  `,

  left: css`
    width: 120px;
    height: 0;
    border-bottom: 45px solid #edd6a2;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;

    @media screen and (max-width: 630px) {
      transform: none;
    }
  `,
};

const Wrapper = styled.li`
  padding: 0 2px;

  @media screen and (max-width: 630px) {
    padding: 0;
    margin: 0 10px;
    width: 220px;
    border: 1px double #e77f11;
    ${baseBoxShadow};
    border-radius: 4px;
  }
`;

const LinkWrapper = styled.div<{ $direction: LinkDirectionType }>`
  ${(p) => linkTypeSchema[p.$direction]};
`;

const LinkName = styled.span<{ $direction: LinkDirectionType }>`
  display: block;
  transform: ${(p) =>
    p.$direction === "right" ? "skew(35deg)" : p.$direction === "left" ? "skew(-35deg)" : "none"};

  @media screen and (max-width: 630px) {
    ${({ $direction }) =>
      $direction === "right" &&
      css`
        transform: none;
      `}

    ${({ $direction }) =>
      $direction === "left" &&
      css`
        transform: none;
      `}
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  line-height: 45px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.systemColors.white};
  text-shadow: 0.1em 0.1em 0.2em #6282ad;
  background-color: ${({ theme }) => theme.systemColors.background400};
  border-radius: 4px;
  text-decoration: none;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.systemColors.yellow100};
    transition: background-color 0.2s ease-in-out;
  }

  &:active {
    color: ${({ theme }) => theme.systemColors.orange400};
    text-shadow: none;
  }

  @media screen and (max-width: 768px) {
    line-height: 30px;
    font-size: 13px;
  }

  @media screen and (max-width: 654px) {
    font-size: 12px;
  }

  @media screen and (max-width: 630px) {
    line-height: 35px;
    padding: 0;
    font-size: 15px;
  }
`;
