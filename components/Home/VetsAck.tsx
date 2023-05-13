import React from "react";
import styles from "@/styles/Home/VetsAck.module.scss";
import Image from "next/image";
import placeholder from "../../public/imgs/60111.jpg";
import Button from "../Shared/Button";
import Link from "next/link";

function VetsAck() {
  return (
    <div className={styles["vets-ack"]}>
      <h1>
        Answer a few questions and let us cook for your pup. <br /> You
        won&apos;t be disappointed and neither will your pup.
      </h1>
      <Link href={"/signup"}>
        <Button text="Sign Up" onClick={() => console.log()} />
      </Link>
      {/* <p>
        “One of the most exciting innovations in pet food, The Farmer’s Dog is a{" "}
        <br />
        safe alternative to conventional brands.”
      </p> */}
      {/* <p>Dr. Catriona Love</p>

      <div className={styles["vets-ack--pics"]}>
        <Image src={placeholder} alt="" height={80} width={80} />
        <Image src={placeholder} alt="" height={80} width={80} />
        <Image src={placeholder} alt="" height={80} width={80} />
      </div> */}
    </div>
  );
}

export default VetsAck;
