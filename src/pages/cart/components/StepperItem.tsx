import React, { FC, memo } from "react";
import classNames from "classnames";
import styles from "../styles.module.css";

interface IStepperItemProps {
  active: boolean;
  step: number;
  onClick?: (index: number) => void;
}

export const StepperItem: FC<IStepperItemProps> = memo(({ step, active, onClick, children }) => {
  return (
    <>
      <li
        className={classNames(styles.stepLi, active ? styles.activeStep : styles.notActiveStep)}
        onClick={() => onClick?.(step)}
      >
        <span className={styles.link}>
          <span
            className={classNames(
              styles.stepNumber,
              active ? styles.activeNumber : styles.notActiveNumber,
            )}
          >
            {step}
          </span>
          <span className={styles.stepTitle}>{children}</span>
        </span>
      </li>
    </>
  );
});
