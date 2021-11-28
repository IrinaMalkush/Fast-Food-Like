import * as React from "react";
import { useState } from "react";
import { ReactComponent as OpenedEye } from "../../assets/svgs/eye_rounded.svg";
import { ReactComponent as ClosedEye } from "../../assets/svgs/close_eye_rounded.svg";
import styles from "./styles.module.css";
import classNames from "classnames";

type InputType = "small" | "large";

interface IInputProps {
  name: string;
  label: string;
  inputType: string;
  placeHolder?: string;
  necessarily?: boolean;
  maxLength?: number;
  inputSize?: InputType;
  err?: boolean;
}

export const Input = React.forwardRef(
  (
    {
      name,
      label,
      inputType,
      placeHolder,
      necessarily = false,
      inputSize = "small",
      maxLength,
      err,
    }: IInputProps,
    ref: any,
  ): React.ReactElement => {
    let [showingPassword, setShowingPassword] = useState<boolean>(false);
    const showPassword = () => {
      setShowingPassword(!showingPassword);
    };

    const setInputType = () => {
      if (inputType === "inputTxt") return "text";
      else if (inputType === "pswd") return showingPassword ? "text" : "password";
      else return;
    };

    return (
      <div className={classNames(styles.input, err ? styles.errHeight : "")}>
        <div className={styles.inputName}>
          <div>{necessarily && <span>&#42;</span>}</div>
        </div>
        {inputType === "pswd" &&
          (showingPassword ? (
            <OpenedEye className={styles.displayEye} onClick={showPassword} />
          ) : (
            <ClosedEye className={styles.displayEye} onClick={showPassword} />
          ))}
        {inputSize === "small" ? (
          <input
            {...ref(name, { required: !!necessarily, maxLength: maxLength })}
            className={styles.inputLine}
            placeholder={placeHolder}
            type={setInputType()}
          />
        ) : (
          <textarea
            name={name}
            ref={ref}
            className={styles.textAreaStyle}
            placeholder={placeHolder}
            required={!!necessarily}
          />
        )}
        {err && <div className={styles.errorMessage}>Поле заполнено не верно</div>}
      </div>
    );
  },
);
