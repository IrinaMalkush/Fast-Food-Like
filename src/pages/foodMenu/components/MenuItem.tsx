import React, { ReactElement } from "react";
import { useState } from "react";
import { Modal } from "../../../ui/modal/Modal";
import cart from "../../../assets/img/shoppingCardBlue.png";
import { IMenuItem } from "../../../api/types/IMenu";
import styles from "../styles.module.css";
import { AddCart } from "../../../helpers/LocalStorageRequests";

interface MenuItemProps {
  element: IMenuItem;
}

export function MenuItem({ element }: MenuItemProps): ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.menuItem} onClick={() => setOpen(!open)}>
        <div className={styles.smallImage}>
          <img src={element.image} alt={element.name} />
        </div>
        <p className={styles.itemNameMini}>{element.name}</p>
        <div className={styles.priceMini}>
          {element.pricelist.length > 1 ? "от " : ""}
          {element.pricelist[0].price}
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className={styles.top}>
          <p className={styles.itemName}>{element.name}</p>
          <p className={styles.description}>{element.description}</p>
        </div>
        <div className={styles.imagePrices}>
          <img className={styles.modalImage} src={element.fullimage} alt={element.name} />
          <div className={styles.prices}>
            {element.pricelist.length > 1 ? (
              element.pricelist.map((item, index) => (
                <div className={styles.price} key={item.pricename}>
                  <p className={styles.priceName}>{item.pricename}</p>
                  <div className={styles.priceCart}>
                    <p className={styles.priceNumber}>{item.price}</p>
                    <img
                      src={cart}
                      alt={"add to cart"}
                      className={styles.cart}
                      onClick={() =>
                        AddCart({
                          productId: element.id,
                          name: element.name,
                          type: element.pricelist[index].pricename,
                          price: element.pricelist[index].price,
                        })
                      }
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.price}>
                <p className={styles.nameCopy}>{element.name}</p>
                <div className={styles.priceCart}>
                  <p className={styles.onePrice}>{element.pricelist[0].price}</p>
                  <img
                    src={cart}
                    alt={"add to cart"}
                    className={styles.cart}
                    onClick={() =>
                      AddCart({
                        productId: element.id,
                        name: element.name,
                        type: element.pricelist[0].pricename,
                        price: element.pricelist[0].price,
                      })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
