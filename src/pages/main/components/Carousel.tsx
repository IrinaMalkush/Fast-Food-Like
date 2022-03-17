import React, { ReactElement, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/Hooks";
import { carouselSelector } from "../../../modules/carousel/CarouselSelector";
import { fetchCarousel } from "../../../modules/carousel/FetchCarouselThank";
import { ICarouselItem } from "../../../api/types/ICarousel";
import { Indicators } from "./Indicators";
import styled from "styled-components";

export function Carousel(): ReactElement {
  const dispatch = useAppDispatch();
  const carouselList = useAppSelector(carouselSelector);

  let [currentPhotoIndex, setCurrentIndex] = useState<number>(0);
  const currentPhoto = carouselList.items[currentPhotoIndex];

  const nextPhoto = () => {
    setCurrentIndex(currentPhotoIndex === carouselList.total - 1 ? 0 : currentPhotoIndex + 1);
  };

  useEffect(() => {
    dispatch(fetchCarousel(null));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Banner>
        {currentPhoto === undefined ? (
          <LoadingBanner>Loading...</LoadingBanner>
        ) : (
          <BannerContainer $current={true} key={currentPhoto.id}>
            <CurrentPhoto src={currentPhoto.photo} alt="banner" />
          </BannerContainer>
        )}
        <CarouselIndicators>
          {carouselList.items.map((element: ICarouselItem) => (
            <Indicators
              element={element}
              currentPhotoIndex={currentPhotoIndex}
              onClick={() => {
                setCurrentIndex(element.id);
              }}
              key={element.id}
            />
          ))}
        </CarouselIndicators>
      </Banner>
    </>
  );
}

const Banner = styled.div`
  background-color: var(--background100);
  box-shadow: var(--base-shadow);
  border: 3px solid var(--base-border);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 850px;
  margin: 10px;
  padding: 0;
  overflow: hidden;
  height: 350px;
  position: relative;

  @media screen and (max-width: 1080px) {
    width: 730px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 600px;
    height: 250px;
  }

  @media screen and (max-width: 644px) {
    width: 500px;
    height: 210px;
  }

  @media screen and (max-width: 542px) {
    width: 480px;
    height: 190px;
  }

  @media screen and (max-width: 522px) {
    width: 450px;
    height: 185px;
  }

  @media screen and (max-width: 494px) {
    width: 310px;
    height: 130px;
  }

  @media screen and (max-width: 354px) {
    width: 290px;
    height: 120px;
  }
`;

const LoadingBanner = styled.div`
  color: #64533c;
  font-size: 20px;
  padding-top: 150px;
`;

const BannerContainer = styled.div<{ $current: boolean }>`
  animation: ${(p) => (p.$current ? "translating 5s ease-in-out" : "none")};
  @keyframes translating {
    from {
      transform: translate(120px, 0);
      opacity: 0.05;
    }

    25%,
    73% {
      transform: translate(0, 0);
      opacity: 1;
    }

    98% {
      transform: translate(-120px, 0);
      opacity: 0.05;
    }

    to {
      transform: translate(-120px, 0);
      opacity: 0;
    }
  }
`;

const CurrentPhoto = styled.img`
  height: 348px;
  margin: 1px;
  z-index: 1;

  @media screen and (max-width: 1080px) {
    height: 298px;
  }

  @media screen and (max-width: 768px) {
    height: 248px;
  }

  @media screen and (max-width: 644px) {
    height: 208px;
  }

  @media screen and (max-width: 542px) {
    height: 188px;
  }

  @media screen and (max-width: 494px) {
    height: 128px;
  }
`;

const CarouselIndicators = styled.div`
  z-index: 10;
  position: absolute;
  top: 320px;
  left: 370px;
  box-sizing: content-box;
  display: inline;
`;
