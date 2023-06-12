import React, { ReactNode } from "react";
import styles from "./CommonButton.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  img?: ReactNode;
  variant?: "filled" | "outlined";
  style?: Record<string, any>;
  addon?: ReactNode;
}

const CommonButton = ({
  text,
  style,
  img,
  addon,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <button
        style={{ ...style }}
        {...props}
        className={styles.button + " " + styles["button__" + variant]}
      >
        {text || img} {addon}
      </button>
    </div>
  );
};

export default CommonButton;
