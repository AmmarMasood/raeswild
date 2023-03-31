import React from "react";
import styles from "@/styles/Button.module.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}
function Button(props: ButtonProps) {
  const { text, onClick, style, disabled } = props;

  return (
    <button
      className={`${styles["button"]} ${
        disabled && styles["button--disabled"]
      }`}
      onClick={onClick}
      style={{
        ...style,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
