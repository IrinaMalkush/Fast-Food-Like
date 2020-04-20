import React from "react";
import "./InDevStage.css";

export function Comments() {
  return (
    <div className="in-dev-stage">
      <div className="in-dev-stage-container">
        <p>Страница находится в разработке</p>
        <img
          src="/img/inwork.jpg"
          alt="the-page-is-in-development-stage"
          className="in-dev-stage-image"
        ></img>
      </div>
    </div>
  );
}
