import React from "react";
import styles from "@/styles/Chip.module.scss";

interface IChip {
  text: string;
  selected: boolean;
  onClick: (text: any) => void;
  style?: any;
}

function Chip(props: IChip) {
  const { text, selected, onClick, style } = props;
  return (
    <div
      className={styles["container"]}
      onClick={onClick}
      style={{
        backgroundColor: selected ? "#1de783" : "#fff",
        color: selected ? "#fff" : "#000",
        ...style,
      }}
    >
      {text}
    </div>
  );
}

export default Chip;
