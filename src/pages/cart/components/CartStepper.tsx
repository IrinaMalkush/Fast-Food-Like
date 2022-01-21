import React, { Fragment } from "react";
import { StepperItem } from "./StepperItem";
import styles from "../styles.module.css";

interface ICartStepperProps {
  steps: string[];
  onChange?: (index: number) => void;
  currentStep: number;
}

export const CartStepper = ({ currentStep, steps, onChange }: ICartStepperProps) => {
  return (
    <nav className={styles.stepperWrapper}>
      {steps.map((item, index) => (
        <Fragment key={index}>
          <div>
            <StepperItem active={index + 1 === currentStep} step={index + 1} onClick={onChange}>
              {item}
            </StepperItem>
          </div>
          <div className={styles.separator} />
        </Fragment>
      ))}
    </nav>
  );
};
