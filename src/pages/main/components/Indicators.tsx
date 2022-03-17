import React, { ReactElement } from "react";
import { ICarouselItem } from "../../../api/types/ICarousel";
import styled from "styled-components";

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
    <Circle
      $current={currentPhotoIndex === element.id}
      tabIndex={currentPhotoIndex ? -1 : 0}
      onClick={onClick}
    />
  );
}

const Circle = styled.button<{ $current: boolean }>`
  width: 10px;
  height: ${(p) => (p.$current ? "15px" : "12px")};
  background-color: ${(p) => (p.$current ? "#6282ad" : "var(--background100)")};
  border-radius: 50%;
  border: ${(p) => (p.$current ? "2px solid #efede3" : "none")};
  margin: 4px;
  box-shadow: var(--base-shadow);
  opacity: 0.7;

  &:focus {
    outline: none;
    box-shadow: var(--base-shadow-border);
  }
`;
