import React from "react";
import styles from "../styles.module.css";
import { ITypeItem } from "../../../api/types/AddGoodsType";
import { ChangeAmount } from "../../../helpers/LocalStorageRequests";

interface ICartTypeProp {
  item: ITypeItem;
  productId: string;
}

export const CartType = ({ item, productId }: ICartTypeProp) => {
  return (
    <div className={styles.itemCountPrice}>
      <div className={styles.itemTypeName}>{item.type}</div>
      <div className={styles.money}>{item.price} руб.</div>
      <div
        className={styles.arrows}
        onClick={() =>
          ChangeAmount({
            productId: productId,
            type: item.type,
            add: false,
          })
        }
      >
        &#9668;
      </div>
      <div className={styles.amount}>{item.amount}</div>
      <div
        className={styles.arrows}
        onClick={() =>
          ChangeAmount({
            productId: productId,
            type: item.type,
            add: true,
          })
        }
      >
        &#9658;
      </div>
      <div className={styles.money}>{(item.price * item.amount).toFixed(2)} руб.</div>
    </div>
  );
};
