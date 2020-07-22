import React from "react";
import { newsList } from "./NewsList";
import "./stylesEvents.css";

export function Events() {
  return (
    <div className="promotion-container">
      <div>
      {newsList.map((element) => {
        if (Boolean(element.promotion)) { 
        return (
          <div  className="promotion-content" key={element.id}>
            <div className="promotion-image">
              <img src={element.image} alt="prom"></img>
            </div>
            <div className="prom-text-date">
              <p>{element.new}</p>
              <p>{element.dateofnew}</p>
            </div>
          </div>
        );}
      })}
      </div>
    </div>
  );
}
