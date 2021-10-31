import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { IMenuItem } from "../../api/types/IMenu";
import styles from "./styles.module.css";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  element: IMenuItem;
}

export const Modal: FC<IModalProps> = ({ isOpen, onClose, element }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit mountOnEnter>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <span onClick={onClose}>&#10008;</span>
          <div className={styles.content} ref={ref}>
            <div className={styles.top}>
              <p className={styles.itemName}>{element.name}</p>
              <p className={styles.description}>{element.description}</p>
            </div>
            <div className={styles.imagePrices}>
              <img className={styles.modalImage} src={element.fullimage} alt={element.name} />
              <div className={styles.prices}>
                {element.pricelist.length > 1 ? (
                  element.pricelist.map((item) => (
                    <div className={styles.price}>
                      <p className={styles.priceName}>{item.pricename}</p>
                      <p className={styles.priceNumber}>{item.price}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.price}>
                    <p className={styles.nameCopy}>{element.name}</p>
                    <p className={styles.onePrice}>{element.pricelist[0].price}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
};
