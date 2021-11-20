import React, { ReactElement } from "react";
import { ICarouselItem } from "../../../api/types/ICarousel";
import classNames from "classnames";
import styles from "../styles.module.css";

interface IIndicatorsProps {
  element: ICarouselItem;
  currentPhotoIndex: number;
  onClick: () => void;
}

export function Indicators({
  element,
  currentPhotoIndex,
  onClick,
}: IIndicatorsProps): ReactElement {
  return (
    <button
      className={
        currentPhotoIndex === element.id
          ? classNames(styles.indicator, styles.isCurrent)
          : styles.indicator
      }
      tabIndex={currentPhotoIndex ? -1 : 0}
      onClick={onClick}
    />
  );
}
