import React, { useEffect, useState } from "react";
import styles from "@/styles/Home/WhichToEat.module.scss";
import Image from "next/image";
import heroimg from "../../public/imgs/5.jpg";
import heroimg1 from "../../public/imgs/4.jpg";
import heroimg2 from "../../public/imgs/6.jpg";
import paw from "../../public/imgs/icons8-dog-paw-64.png";
import dogs from "../../public/imgs/6.jpg";

function WhichToEat() {
  return (
    <section className={styles[""]}>
      <Image
        src={dogs}
        alt="dogs"
        className={styles["outer-container--topimage"]}
      />
      <div className={styles["container"]}>
        <div className={styles["container--inner"]}>
          <h1>
            <Image src={paw} alt="dow-paw" />
            <span>Which would you rather eat?</span>
            <Image src={paw} alt="dow-paw" />
          </h1>
          <div className={styles["container--inner--container"]}>
            <div className={`${styles["container--inner-box"]} `}>
              <Image alt="dogs" src={heroimg1} />
              <div className={`${styles["container--inner-box--textbox"]} `}>
                <h3>
                  Traditional High Heat <br />
                  Kibble Sprayed <br /> with Flavoring.
                </h3>
              </div>
            </div>
            <div className={styles["or-container"]}>
              <h3>OR</h3>
            </div>
            <div
              className={`${styles["container--inner-box"]} ${styles["container--inner-box--reverse"]}`}
            >
              <Image alt="dogs" src={heroimg} />
              <div className={`${styles["container--inner-box--textbox"]} `}>
                <h3>
                  Human Grade Slow Cooked <br />
                  Wild Boar Meat <br /> with Organic Vegetables.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles["layout"]}></div> */}
    </section>
  );
}

export default WhichToEat;
