import React, { useEffect, useState } from "react";
import styles from "@/styles/Home/WhichToEat.module.scss";
import Image from "next/image";
import heroimg from "../../public/imgs/5.jpg";
import heroimg1 from "../../public/imgs/4.jpg";

function WhichToEat() {
  return (
    <section className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <h1>Which would you rather eat? </h1>
        <div className={styles["container-inner"]}>
          <div className={styles["container-inner--box"]}>
            <h1>
              Traditional High Heat <br /> Kibble Sprayed <br /> with Flavoring.
            </h1>
            <div>
              <Image alt="dogs" src={heroimg1} />
            </div>
          </div>
          <div className={styles["container-inner--or"]}>
            <h1>OR</h1>
          </div>
          <div className={styles["container-inner--box"]}>
            <h1>
              Human Grade Slow Cooked <br /> Wild Boar Meat <br /> with Organic
              Vegetables.
            </h1>
            <div>
              <Image alt="dogs" src={heroimg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhichToEat;
