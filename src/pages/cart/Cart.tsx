import React, { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { cartSelector } from "../../modules/cart/CartSelector";
import { fetchGoods } from "../../modules/cart/FetchGoodsThunk";
import { CartItem } from "./components/CartItem";
import { CartStepper } from "./components/CartStepper";
import styles from "./styles.module.css";

export function Cart(): ReactElement {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(cartSelector);

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

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
            {cart.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>
          <div className={styles.result}>
            к оплате:{" "}
            <div className={styles.sum}>
              {cart.reduce((sum, current) => sum + current.price * current.count, 0)} руб.
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
          {/*<div className={classNames(styles.itemName, styles.toPay)}>*/}
          <div className={styles.itemName}>
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
