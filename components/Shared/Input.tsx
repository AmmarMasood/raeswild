import React from "react";
import styles from "@/styles/Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  value: string;
  name: string;
}
function Input(props: InputProps) {
  const { type, placeholder, onChange, style, value, name } = props;

  return (
    <input
      className={styles["input"]}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
      value={value}
      name={name}
    />
  );
}

export default Input;
