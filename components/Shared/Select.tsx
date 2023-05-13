import React from "react";
import { Select as AntdSelect, SelectProps as AntdSelectProps } from "antd";
import styles from "@/styles/Select.module.scss";

interface ISelect extends AntdSelectProps {
  handleChange: (v: any) => void;
  style?: any;
  defaultValue: string;
  options: {
    value: string;
    label: string;
  }[];
}

function Select(props: ISelect) {
  const { handleChange, defaultValue, style, options } = props;
  return (
    <AntdSelect
      className={styles["container"]}
      defaultValue={defaultValue}
      style={style}
      onChange={handleChange}
      options={options}
    />
  );
}

export default Select;
