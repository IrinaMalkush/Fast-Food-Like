import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.css";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return createPortal(
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit mountOnEnter>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContainer}>
          <span onClick={onClose}>&#10008;</span>
          <div className={styles.content} ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body,
  );
};
