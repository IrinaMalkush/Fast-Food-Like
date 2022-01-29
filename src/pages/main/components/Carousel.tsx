import React, { ReactElement } from "react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../core/hooks/Hooks";
import { banner, fetchCarousel } from "../../../modules/carousel/FetchCarouselThank";
import { ICarouselItem } from "../../../api/types/ICarousel";
import { Indicators } from "./Indicators";
import classNames from "classnames";
import styles from "../styles.module.css";

export function Carousel(): ReactElement {
  const dispatch = useAppDispatch();
  // const carouselList = useAppSelector(carouselSelector);
  const carouselList = banner;
  console.log("carousel: ", carouselList);
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

  const indicators = carouselList.items.map((element: ICarouselItem) => (
    <Indicators
      element={element}
      currentPhotoIndex={currentPhotoIndex}
      onClick={() => {
        setCurrentIndex(element.id);
      }}
      key={element.id}
    />
  ));

  return (
    <>
      <div className={styles.banner}>
        {currentPhoto === undefined ? (
          <div className={styles.loadingBanner}>Loading...</div>
        ) : (
          <div className={classNames(styles.bannerContainer, styles.current)} key={currentPhoto.id}>
            <img src={currentPhoto.photo} alt="banner" />
          </div>
        )}
        <div className={styles.indicators}>{indicators}</div>
      </div>
    </>
  );
}
