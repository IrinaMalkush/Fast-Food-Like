import React from "react";
import "./stylesDelivery.css";

export function Delivery() {
  return (
    <div className="delivery">
      <div className="delivery-container">
        <div className="delivery-version-container">
          <p  className="delivery-title">У нас действует доставка по центру города Бендеры!</p>
          <p>Для этого необходимо позвонить по телефону</p>
          <p className="delivery-discount">0(775)05057</p>
          <p>и сделать заказ!</p>
          <p>Время доставки с 10:00 до 16:00, стоимость доставки 4р.</p>
        </div>
        <div className="delivery-version-container">
          <p className="delivery-title">Остальные же могут получить заказ на дом через службу такси.</p>
          <p>Для этого нужно всего три шага:</p>
          <p>1. Заказ Fast Food Like: 0(775)05057 </p>
          <p>2. Затем заказ такси: 15-17</p>
          <p>3. Получение заказа :-)</p>
          <p className="delivery-discount">При заказе через такси бонус -</p>
          <p className="delivery-discount"> 5% скидка !!!</p>
          <img src="/img/deliv.png" alt="delivery-in-center" className="deliv-image"></img>
          <img src="/img/delivery.jpg" alt="phone-taxi-getting-food" className="delivery-image"></img>
        </div>
      </div>
    </div>
  );
}
