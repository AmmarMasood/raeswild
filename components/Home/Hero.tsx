import React from "react";
import Button from "../Shared/Button";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";
import styles from "@/styles/Home/Hero.module.scss";
import Image from "next/image";
import TodayCompany from "../../public/imgs/today-show-16fc7d.webp";
import FastCompany from "../../public/imgs/fast-company-dc4891.webp";
import GoogleCompany from "../../public/imgs/google-c6642d.webp";
import VogueCompany from "../../public/imgs/vogue-5dde5d.webp";
import CBSCompany from "../../public/imgs/cbs-news-logo-6bf9ca.webp";

function Hero() {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-top"]}>
        <div>
          <h1>A healthy life starts with healthy food.</h1>
          <p>Real food • Made fresh • Delivered</p>
          <Button
            text="Start Today"
            onClick={() => console.log("start today")}
          />
          <Link href={"/about"}>
            <FaRegPlayCircle /> Watch Our Ad, &quot;Forever&quot;
          </Link>
        </div>
        <div></div>
      </div>
      <div className={styles["hero-bottom"]}>
        <div>
          <Image src={TodayCompany} alt="" height={30} width={180} />
          <p>
            &quot;An online pet food company that makes feeding real food to
            dogs really easy.&quot;
          </p>
        </div>
        <div>
          <Image src={FastCompany} alt="" height={30} width={180} />
          <p>
            &quot;Researchers concluded that fresh diets do demonstrate a number
            of pet health benefits.&quot;
          </p>
        </div>
        <div>
          <Image src={GoogleCompany} alt="" height={70} width={180} />
          <p>Customer reviews</p>
        </div>
        <div>
          <Image src={VogueCompany} alt="" height={30} width={180} />
          <p>
            &quot;It is never deep frozen, and it never sits on a shelf. All you
            do is open the pack and pour.&quot;
          </p>
        </div>
        <div>
          <Image src={CBSCompany} alt="" height={30} width={180} />
          <p>
            &quot;Owners can get healthy dog food shipped right to their
            door.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
