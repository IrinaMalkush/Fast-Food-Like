import React, { useState, useEffect } from "react";
import { promotionslist } from "./PromotionsList";
import { NewsFeed } from "./NewsFeed";
import "./stylesMainPage.css";

export function MainPage() {
  const [currentPhotoIndex, setCurrentIndex] = useState(0);
  const currentPhoto = promotionslist[currentPhotoIndex];
  const nextPhoto = () => {
    setCurrentIndex(
      currentPhotoIndex === promotionslist.length - 1
        ? 0
        : currentPhotoIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 5000);
    return () => clearInterval(interval);
  });

  function GetCurrentPhoto({ children, ...restProps }) {
    const className = `banner-container ${currentPhoto ? "current" : ""}`;
    return (
      <div className={className} {...restProps}>
        {children}
      </div>
    );
  }

  const RenderIndicators = () => {
    return (
      <div className="indicators">
        {promotionslist.map((element) => {
          return (
            <button
              className={
                currentPhotoIndex === element.id
                  ? "indicator is-current"
                  : "indicator"
              }
              tabIndex={currentPhotoIndex ? -1 : 0}
              onClick={() => {
                setCurrentIndex(element.id);
              }}
            ></button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="banner">
        <GetCurrentPhoto>
          <img src={currentPhoto.photo} alt="bunner" />
        </GetCurrentPhoto>
      </div>
      <div>{RenderIndicators()}</div>
      <p className="news-title">Новости Fast Food Like</p>
      <NewsFeed />
    </div>
  );
}
