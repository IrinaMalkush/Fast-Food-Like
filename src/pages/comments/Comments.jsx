import React from "react";
import devPage from '../../assets/img/inwork.jpg';
import "../inDevStage/InDevStage.css";

export function Comments() {
  return (
    <div className="in-dev-stage">
      <div className="in-dev-stage-container">
        <p>Страница находится в разработке</p>
        <img
          src={devPage}
          alt="the-page-is-in-development-stage"
          className="in-dev-stage-image"
        />
      </div>
    </div>
  );
}
