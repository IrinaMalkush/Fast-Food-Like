import React, { ReactElement } from "react";
import styles from "../styles.module.css";
import { ICart } from "../../../api/types/AddGoodsType";
import { CartType } from "./CartType";

interface CartItemProps {
  item: ICart;
}

export const CartItem = ({ item }: CartItemProps): ReactElement => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.typesContainer}>
        {item.value.map((i) => (
          <CartType item={i} productId={item.productId} />
        ))}
      </div>
    </div>
  );
};
