import React, { ReactElement } from "react";
import { IMenuItem } from "../../../api/types/IMenu";
import { useState } from "react";
import { Modal } from "../../../ui/modal/Modal";
import styles from "../styles.module.css";

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
        <p className={styles.itemName}>{element.name}</p>
        <div className={styles.price}>
          {element.pricelist.length > 1 ? "от " : ""}
          {element.pricelist[0].price}
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)} element={element} />
    </>
  );
}
