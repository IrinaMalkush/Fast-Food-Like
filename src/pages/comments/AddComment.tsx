import React, { ReactElement, useState } from "react";
import { useForm, SubmitHandler, Path } from "react-hook-form";
import { Modal } from "../../ui/modal/Modal";
import styles from "./styles.module.css";
import { Loader } from "../../ui/loader/Loader";
import classNames from "classnames";

interface IFormInput {
  name: string;
  phone?: string;
  email?: string;
  text: string;
}

interface IInputProps {
  name: string;
  label: Path<IFormInput>;
  inputType: string;
  placeHolder?: string;
  necessarily?: boolean;
  maxLength?: number;
  err?: boolean;
}

export function AddComment(): ReactElement {
  const [open, setOpen] = useState<boolean>(false);
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("data: ", data);
    /*    setIsSending(true);

    await fetch("/api/addComment", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.status === 200) {
        setIsSending(false);
      } else {
        console.log("error: ", result.status);
      }
    });*/
  };

  return (
    <>
      <span className={styles.leaveReview} onClick={() => setOpen(!open)}>
        оставить отзыв
      </span>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <span className={styles.speech}>Пожалуйста, напишите, что вы думаете:</span>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classNames(styles.input, errors.name ? styles.errHeight : "")}>
              <div className={styles.inputName}>
                <div>
                  ваше имя
                  <span>&#42;</span>
                </div>
              </div>
              <input
                {...register("name", { required: true, maxLength: 30 })}
                className={styles.inputLine}
                type={"text"}
              />
              {errors.name && (
                <div className={styles.errorMessage}>
                  Введите ваше имя, не превышающее 30 символов
                </div>
              )}
            </div>

            <div className={classNames(styles.input, errors.phone ? styles.errHeight : "")}>
              <div className={styles.inputName}>
                <div>контактный номер телефона</div>
              </div>
              <input
                {...register("phone", { minLength: 5, maxLength: 16 })}
                className={styles.inputLine}
                type={"text"}
                placeholder={"оставьте ваш номер и мы вам перезвоним"}
              />
              {errors.phone && (
                <div className={styles.errorMessage}>Номер телефона введен не верно</div>
              )}
            </div>

            <div className={classNames(styles.input, errors.email ? styles.errHeight : "")}>
              <div className={styles.inputName}>
                <div>ваш e-mail</div>
              </div>
              <input
                {...register("email", { pattern: /^\S+@\S+$/i })}
                className={styles.inputLine}
                type={"text"}
              />
              {errors.email && <div className={styles.errorMessage}>Поле заполнено не верно</div>}
            </div>

            <div className={classNames(styles.input, errors.text ? styles.errHeight : "")}>
              <div className={styles.inputName}>
                <div>
                  ваше сообщение
                  <span>&#42;</span>
                </div>
              </div>
              <textarea
                {...register("text", { required: true, maxLength: 20 })}
                className={classNames(
                  styles.textAreaStyle,
                  errors.name || errors.phone || errors.email || errors.text
                    ? styles.textAreaErrors
                    : styles.textAreaNoErrors,
                )}
                placeholder={"напишите что-нибудь..."}
              />
              {errors.text && <div className={styles.errorMessage}>Поле заполнено не верно</div>}
            </div>
            <div className={styles.mark}>
              <span>&#42;</span> - поля, обязательные для заполнения
            </div>
            {isSending ? (
              <Loader />
            ) : (
              <button type="submit" className={styles.submitButton}>
                <p>{"Отправить"}</p>
              </button>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
}
