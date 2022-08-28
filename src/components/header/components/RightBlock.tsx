import { Modal, SocialLink, textShadowOrange } from "like-ui-components";
import React, { useState } from "react";
import styled from "styled-components";

import insta from "../../../assets/img/insta.png";
import cart from "../../../assets/img/shoppingCardWhite.png";
import { Cart } from "../../../pages/cart/Cart";

export const RightBlock = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <SocialLinks>
        <LinkText href="https://www.instagram.com/like_pmr/">мы в Instagram:</LinkText>
        <SocialLink href="https://www.instagram.com/like_pmr/" title="instagram.com" src={insta} />
      </SocialLinks>
      <CartWrapper>
        <CartIcon src={cart} alt={"корзина"} onClick={() => setOpen(true)} />
      </CartWrapper>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Cart />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const SocialLinks = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 20px 16px 8px 16px;
  width: 200px;
`;

const LinkText = styled.a`
  font-size: 15px;
  color: ${({ theme }) => theme.systemColors.white};
  ${textShadowOrange};
  margin: 12px 6px 4px 0;
  text-decoration: none;
  text-transform: uppercase;
`;

const CartWrapper = styled.div`
  margin: 16px 34px;
  cursor: pointer;
`;

const CartIcon = styled.img`
  height: 48px;
`;
