import React, { ReactElement, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CartItem } from "./components/CartItem";
import { CartStepper } from "./components/CartStepper";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { GetFromCart } from "../../helpers/LocalStorageRequests";
import { ICart } from "../../api/types/AddGoodsType";

export function Cart(): ReactElement {
  let [cartItems, setCartItems] = useState<ICart[]>([]);

  useEffect(() => {
    GetFromCart().then((value) => {
      setCartItems(value);
    });
  }, [cartItems]);

  const [currentStep, setCurrentStep] = useState(1);
  const setStep = (step: number) => {
    setCurrentStep(step);
  };

  const [totalSum, setTotalSum] = useState(0);
  const setTotal = (total: number) => {
    setTotalSum(total);
  };

  const [showMore, setShowMore] = useState(false);

  const { register, handleSubmit } = useForm();

  function onSubmitButton(data: any) {
    console.log(data);
  }

  return (
    <>
      <div className={styles.title}>корзина</div>
      <CartStepper steps={steps} currentStep={currentStep} />
      {currentStep === 1 && (
        <div className={styles.firstStep}>
          <div className={styles.itemsContainer}>
            {cartItems ? (
              cartItems.map((item) => <CartItem item={item} key={item.productId} />)
            ) : (
              <div>Корзина пуста</div>
            )}
          </div>
          <div className={styles.result}>
            к оплате:{" "}
            <div className={styles.sum}>
              {cartItems
                ? cartItems
                    .reduce(
                      (sum, current) =>
                        sum + current.value.reduce((s, curr) => s + curr.price * curr.amount, 0),
                      0,
                    )
                    .toFixed(2)
                : 0}{" "}
              руб.
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.proceedButton} onClick={() => setStep(2)}>
              оформить заказ
            </button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className={styles.orderContainer}>
          <div className={classNames(styles.itemName, styles.toPay)}>
            Итого к оплате: <div className={styles.sum}>{totalSum} руб.</div>
          </div>
          <div className={styles.itemName}>Выберете способ доставки:</div>
          <form onSubmit={handleSubmit(onSubmitButton)}>
            <div className={styles.radioButton}>
              <label htmlFor="field-address">
                <input
                  {...register("delivery")}
                  type="radio"
                  name="delivery"
                  value="address"
                  id="field-address"
                  onClick={() => setShowMore(true)}
                />
                Доставка
              </label>
            </div>
            {showMore && (
              <div className={styles.orderData}>
                <input
                  {...register("city")}
                  type="text"
                  name="city"
                  placeholder="город"
                  id="city"
                />
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  placeholder="улица, дом, квартира"
                  id="address"
                />
                <input
                  {...register("phone")}
                  type="text"
                  name="phone"
                  placeholder="контактный номер телефона"
                  id="phone"
                />
              </div>
            )}
            <div className={styles.radioButton}>
              <label htmlFor="field-self" className={styles.radioButton}>
                <input
                  {...register("delivery")}
                  type="radio"
                  name="delivery"
                  value="self"
                  id="field-self"
                  onClick={() => setShowMore(false)}
                />
                Самовывоз
              </label>
            </div>
            <div className={styles.buttonSubmitContainer}>
              <button type="submit" className={styles.proceedButton}>
                Оплатить
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

const steps = ["редактирование заказа", "оформление заказа", "оплата"];

const cart = [
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
  {
    name: "куринные наггетсы",
    price: 20,
    count: 1,
  },
  {
    name: "бигбургер",
    price: 45,
    count: 2,
  },
];
