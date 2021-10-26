import React from "react";
import notFound from '../../assets/img/noPageFound.png';

export function NoPageFound() {
  return (
    <div className="notFound">
      <img src={notFound} alt="no-page-found"/>
      <p>404... Страница не найдeна...</p>
    </div>
  );
}
