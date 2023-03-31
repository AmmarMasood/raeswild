import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "@/styles/HorizontalScroller.module.scss";

interface HorizontalScrollerProps {
  children: any;
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className={styles["button"]}
      style={{ left: 20 }}
    >
      <FaAngleLeft />
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      style={{ right: 20 }}
      className={styles["button"]}
    >
      <FaAngleRight />
    </button>
  );
}

function HorizontalScroller(props: HorizontalScrollerProps) {
  const { children } = props;
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      wrapperClassName={styles["container"]}
    >
      {children}
    </ScrollMenu>
  );
}

export default HorizontalScroller;
