import React, { ReactElement, useState } from "react";
import { SocialLink } from "../../ui/socialLink/SocialLink";
import logo from "../../assets/img/logo.jpg";
import insta from "../../assets/img/insta.png";
import cart from "../../assets/img/shoppingCardWhite.png";
import styles from "./styles.module.css";
import { Modal } from "../../ui/modal/Modal";
import { NavLink } from "react-router-dom";
import { Cart } from "../cart/Cart";
import { useAppDispatch } from "../../core/hooks/Hooks";
import { signOut } from "../../modules/user/UserSlice";

export function Header(): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const LogOut = async () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    await dispatch(signOut());
    window.location.reload();
  };

  return (
    <div className={styles.headerContainer}>
      <div>
        <div className={styles.phones}>
          <div className={styles.icon}>&#9742;</div>
          <p>0(533)55455</p>
          <p> - Тирасполь</p>
        </div>
        <div className={styles.phones}>
          <div className={styles.icon}>&#9742;</div>
          <p>0(775)05057</p>
          <p> - Бендеры</p>
        </div>
        <nav className={styles.socialLinks}>
          <SocialLink
            href="https://www.instagram.com/like_pmr/"
            title="instagram.com"
            src={insta}
          />
          <a href="https://www.instagram.com/like_pmr/" className={styles.linkText}>
            - мы в Instagram
          </a>
        </nav>
      </div>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="fast-food-like-logo" />
        </a>
      </div>
      <div className={styles.rightBlock}>
        {localStorage.getItem("token") ? (
          <div className={styles.signedIn}>
            <div className={styles.hello}>Привет, {localStorage.getItem("username")}</div>
            <div className={styles.signOut} onClick={() => LogOut()}>
              Выйти
            </div>
          </div>
        ) : (
          <div className={styles.signInOrLogin}>
            <NavLink to={"/signup"} className={styles.register}>
              зарегестрироваться
            </NavLink>
            или
            <NavLink to={"/login"} className={styles.register}>
              войти
            </NavLink>
          </div>
        )}
        <div className={styles.cartWrapper}>
          <img src={cart} alt={"корзина"} className={styles.cart} onClick={() => setOpen(!open)} />
        </div>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Cart />
        </Modal>
      </div>
    </div>
  );
}
