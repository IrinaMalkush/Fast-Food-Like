import React from "react";
import "./stylesDelivery.css";

export function Delivery() {
  return (
    <div className="delivery">
      <div className="delivery-container">
        <p>Как получить заказ на дом:</p>
        <p>1. Заказ Fast Food Like: 0(775)05057 </p>
        <p>2. Затем заказ такси: 15-17</p>
        <p>3. Получение заказа :-)</p>
        <p className="delivery-discount">При заказе через такси бонус -</p>
        <p className="delivery-discount"> 5% скидка !!!</p>
        <img src="/img/delivery.jpg" alt="phone-taxi-getting-food" className="delivery-image"></img>
      </div>
    </div>
  );
}
