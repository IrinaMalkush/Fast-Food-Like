import React from "react";
import { newsList } from "../../componentsss/NewsList";
import "./stylesEvents.css";

export function Events() {
  return (
    <div className="promotion">
      <div className="promotion-container">
      {newsList.map((element) => {
        if (Boolean(element.promotion)) { 
        return (
          <div  className="promotion-content" key={element.id}>
            <div className="promotion-image">
              <img src={element.image} alt="prom"/>
            </div>
            <div className="prom-text-date">
              <p>{element.new}</p>
              <p>{element.dateofnew}</p>
            </div>
          </div>
        );} else { return null}
      })}
      </div>
    </div>
  );
}
