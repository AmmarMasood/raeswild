import React from "react";
import styles from "@/styles/Input.module.scss";
import { Input as AntdInput, InputProps as AntdInputProps } from "antd";

interface InputProps extends AntdInputProps {
  type: string;
  placeholder: string;
  style?: React.CSSProperties;
  name: string;
}
function Input(props: InputProps) {
  const { type, placeholder, onChange, style, value, name } = props;

  return (
    <AntdInput
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
