import React from "react";
import styles from "@/styles/Home/VetsAck.module.scss";
import Image from "next/image";
import placeholder from "../../public/imgs/60111.jpg";

function VetsAck() {
  return (
    <div className={styles["vets-ack"]}>
      <h1>
        Formulated by nutritionists, <br />
        praised by vets.
      </h1>
      <p>
        “One of the most exciting innovations in pet food, The Farmer’s Dog is a{" "}
        <br />
        safe alternative to conventional brands.”
      </p>
      <p>Dr. Catriona Love</p>

      <div className={styles["vets-ack--pics"]}>
        <Image src={placeholder} alt="" height={80} width={80} />
        <Image src={placeholder} alt="" height={80} width={80} />
        <Image src={placeholder} alt="" height={80} width={80} />
      </div>
    </div>
  );
}

export default VetsAck;
