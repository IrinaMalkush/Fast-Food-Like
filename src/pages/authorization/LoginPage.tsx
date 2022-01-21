import * as React from "react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { clearState } from "../../modules/user/UserSlice";
import { userSelector } from "../../modules/user/UserSelector";
import styles from "./styles.module.css";
import { loginUser } from "../../modules/user/LoginUserThunk";
import { Input } from "../../ui/input/Input";

export type InputsLogin = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<InputsLogin>();
  const dispatch = useAppDispatch();
  const { token, isSuccess, isError } = useAppSelector(userSelector);

  const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
    await dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
    }
  }, [isSuccess]);

  let [showingPassword, setShowingPassword] = useState<boolean>(false);
  const showPassword = () => {
    setShowingPassword(!showingPassword);
  };

  return (
    <div className={styles.signInPage}>
      {isError && (
        <div className={styles.notification}>
          <div className={styles.notificationText}>
            Пользователь с введенным e-mail / паролем не найден.
          </div>
        </div>
      )}
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signInWords}>Вход</div>
          <Input name="email" ref={register} label="E-mail" inputType="inputTxt" />
          <Input name="password" ref={register} label="Пароль" inputType="pswd" err={isError} />
          <button type="submit" className={styles.buttonSubmit}>
            <p>Войти</p>
          </button>
          <div className={styles.moveToSignUp}>
            <p>
              Не зарегестрированы?{" "}
              <NavLink to="/signup" className={styles.moveToSignUpLink}>
                Зарегестрироваться
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
