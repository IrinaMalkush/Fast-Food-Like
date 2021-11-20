import React, { ReactElement, useEffect } from "react";
import deliveryMan from "../../assets/img/deliv.png";
import delivery from "../../assets/img/delivery.jpg";
import styles from "./styles.module.css";

export function Delivery(): ReactElement {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.delivery}>
      <div className={styles.container}>
        <div className={styles.versionContainer}>
          <p className={styles.title}>У нас действует доставка по центру города Бендеры!</p>
          <p>Для этого необходимо позвонить по телефону</p>
          <p className={styles.discount}>0(775)05057</p>
          <p>и сделать заказ!</p>
          <p>Время доставки с 10:00 до 16:00, стоимость доставки 4р.</p>
        </div>
        <div className={styles.versionContainer}>
          <p className={styles.title}>
            Остальные же могут получить заказ на дом через службу такси.
          </p>
          <p>Для этого нужно всего три шага:</p>
          <p>1. Заказ Fast Food Like: 0(775)05057 </p>
          <p>2. Затем заказ такси: 15-17</p>
          <p>3. Получение заказа :-)</p>
          <p className={styles.discount}>При заказе через такси бонус -</p>
          <p className={styles.discount}> 5% скидка !!!</p>
          <img src={deliveryMan} alt="delivery-in-center" className={styles.imageMan} />
          <img src={delivery} alt="phone-taxi-getting-food" className={styles.imageOrder} />
        </div>
      </div>
    </div>
  );
}
