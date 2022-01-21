import React, { ReactElement } from "react";
import styles from "../styles.module.css";
import { ICart } from "../../../api/types/ICart";

interface CartItemProps {
  item: ICart;
}

export const CartItem = ({ item }: CartItemProps): ReactElement => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.itemCountPrice}>
        <div className={styles.money}>{item.price} руб.</div>
        <div className={styles.arrows}>&#9668;</div>
        <div className={styles.amount}>{item.count}</div>
        <div className={styles.arrows}>&#9658;</div>
        <div className={styles.money}>{item.price * item.count} руб.</div>
      </div>
    </div>
  );
};
