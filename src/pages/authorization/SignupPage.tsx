import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../core/hooks/Hooks";
import { userSelector } from "../../modules/user/UserSelector";
import { SignUpType } from "../../api/types/SignupType";
import { signupUser } from "../../modules/user/SignupUserThunk";
import { clearState } from "../../modules/user/UserSlice";
import { Input } from "../../ui/input/Input";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import styles from "./styles.module.css";

type InputsSignUp = {
  userName: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export const SignupPage = () => {
  const { register, handleSubmit } = useForm<InputsSignUp>();
  const dispatch = useAppDispatch();
  const { token, isSuccess, isError, errorMessage } = useAppSelector(userSelector);
  const history = useHistory();

  const onSubmit: SubmitHandler<InputsSignUp> = async (data) => {
    let signUpData: SignUpType = {
      userName: "",
      email: "",
      password: "",
    };
    if (data.password === data.passwordRepeat) {
      signUpData.userName = data.userName;
      signUpData.email = data.email;
      signUpData.password = data.password;
    }
    await dispatch(signupUser(signUpData));
    history.push("/");
    window.location.reload();
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

    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return !!token ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.signInPage}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.signInWords}>Регистрация</div>
          <Input name="userName" ref={register} label="Имя пользователя" inputType="inputTxt" />
          <Input name="email" ref={register} label="E-mail" inputType="inputTxt" />
          <Input name="password" ref={register} label="Пароль" inputType="pswd" />
          <Input name="passwordRepeat" ref={register} label="Подтвердите пароль" inputType="pswd" />
          <button className={styles.buttonSubmit} type="submit">
            <p>Зарегестрироваться</p>
          </button>
          <div className={styles.moveToSignUp}>
            <p>
              <NavLink to="/login" className={styles.moveToSignUpLink}>
                Войти
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
