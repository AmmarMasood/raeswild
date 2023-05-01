import React, { useState } from "react";
import styles from "@/styles/Auth/AboutYou.module.scss";

interface AboutYou {
  buttons: JSX.Element;
}
function AboutYou(props: AboutYou) {
  const { buttons } = props;
  const [numberOfDogs, setNumberOfDogs] = useState(0);

  return (
    <div className={styles["container"]}>
      <div>
        <h1>How many dogs do you have?</h1>
      </div>
      {buttons}
    </div>
  );
}

export default AboutYou;
