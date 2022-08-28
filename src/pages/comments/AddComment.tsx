import { Loader, Modal } from "like-ui-components";
import React, { useState } from "react";
import { Path, SubmitHandler, useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";

import { Speech } from "./Comments";
import styles from "./styles.module.css";

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

export const AddComment = () => {
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
      <LeaveReview onClick={() => setOpen(!open)}>оставить отзыв</LeaveReview>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Speech>Пожалуйста, напишите, что вы думаете:</Speech>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*<div className={classNames(styles.input, errors.name ? styles.errHeight : "")}>*/}
            <InputWrapper>
              <InputName>
                <div>
                  ваше имя
                  <span>&#42;</span>
                </div>
              </InputName>
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
            </InputWrapper>

            {/*<div className={classNames(styles.input, errors.phone ? styles.errHeight : "")}>*/}
            <div className={styles.input}>
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

            {/*<div className={classNames(styles.input, errors.email ? styles.errHeight : "")}>*/}
            <div className={styles.input}>
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

            {/*<div className={classNames(styles.input, errors.text ? styles.errHeight : "")}>*/}
            <div className={styles.input}>
              <div className={styles.inputName}>
                <div>
                  ваше сообщение
                  <span>&#42;</span>
                </div>
              </div>
              <textarea
                {...register("text", { required: true, maxLength: 20 })}
                // className={classNames(
                //   styles.textAreaStyle,
                //   errors.name || errors.phone || errors.email || errors.text
                //     ? styles.textAreaErrors
                //     : styles.textAreaNoErrors,
                // )}
                className={styles.textAreaStyle}
                placeholder={"напишите что-нибудь..."}
              />
              {errors.text && <div className={styles.errorMessage}>Поле заполнено не верно</div>}
            </div>
            <Mark>
              <Star>&#42;</Star> - поля, обязательные для заполнения
            </Mark>
            {isSending ? (
              <Loader />
            ) : (
              <SubmitButton type="submit">
                <p>{"Отправить"}</p>
              </SubmitButton>
            )}
          </form>
        </FormContainer>
      </Modal>
    </>
  );
};

const RainbowAnimation = keyframes`
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
`;

const LeaveReview = styled.span`
  color: ${({ theme }) => theme.systymColors.brown50};
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
  text-transform: uppercase;
  align-self: flex-end;
  cursor: pointer;
  background: linear-gradient(to right, #0c328c, #f1c91a, #f98600);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${RainbowAnimation} 5s ease-in-out infinite;
  animation: ${RainbowAnimation} 5s ease-in-out infinite;
  padding: 10px 36px;
  box-shadow: 0 2px 22px 2px rgba(43, 57, 72, 0.15);
`;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  margin-left: 30px;
  position: relative;
  padding: 8px 0;
`;

const Mark = styled.div`
  padding-left: 32px;
  color: #736849;
`;

const Star = styled.span`
  padding: 2px;
  color: #ff4d00;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  background-color: #edd6a2;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #fe6d02;
  text-transform: uppercase;
  width: 200px;
  position: absolute;
  bottom: 36px;
  right: 46px;

  &:hover {
    background-color: #e8c374;
    transition: background-color 0.2s ease-in-out;
  }

  &:focus {
    box-shadow: 2px 4px 22px rgba(254, 109, 2, 0.6);
  }
`;

const InputName = styled.div`
  height: 26px;
  display: flex;
  align-items: center;
`;
