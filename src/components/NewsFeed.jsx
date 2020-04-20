import React from "react";
import { newsList } from "./NewsList";

export function NewsFeed() {
  return (
    <div>
      {newsList.sort( (a,b) =>b.id-a.id).map((element) => {
        return (
          <div  className="content">
            <div className="news-image">
              <img src={element.image} alt="news"></img>
            </div>
            <div className="news-text-date">
              <p>{element.new}</p>
              <p>{element.dateofnew}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
