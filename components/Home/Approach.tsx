import React from "react";
import styles from "@/styles/Home/Approach.module.scss";
import Link from "next/link";
import img from "../../public/imgs/karsten-winegeart-Z-rSM6yKgxo-unsplash.jpg";
import Image from "next/image";

function Approach() {
  return (
    <section className={styles["section"]}>
      <div className={styles["section--about"]}>
        <div className={styles["section--about--inner"]}>
          <div className={styles["section--about--inner-textbox"]}>
            <h1>
              It’s time for a fresh <br />
              approach to pet food.
            </h1>
            <p>
              By sending food directly to you, we can invest in better
              ingredients and fresher food. Quality never found in a store.{" "}
              <Link href="#">
                Learn more about the importance of fresh food.
              </Link>
            </p>
          </div>

          <div className={styles["section--about--inner-listbox"]}>
            <ul>
              <li>
                <h3>&quot;Meals&quot;</h3>
                <p>
                  Powders like “Chicken Meal” can contain meat from diseased
                  livestock.
                </p>
              </li>
              <li>
                <h3>Preservatives</h3>
                <p>
                  Natural and/or artificial preservatives can keep pet foods
                  shelf-stable for years.
                </p>
              </li>
              <li>
                <h3>Brown Pellets</h3>
                <p>
                  Kibble is extremely processed regardless of the ingredient
                  claims (or pictures).
                </p>
              </li>
              <li>
                <h3>Label Tricks</h3>
                <p>
                  Foods can hide behind misleading bags. “Made with beef” can
                  mean just 3% beef.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["section--info"]}>
        <div className={styles["section--info--inner"]}>
          <div className={styles["section--info--inner-imagebox"]}>
            <Image src={img} alt="" layout="fill" />
          </div>
          <div className={styles["section--info--inner-textbox"]}>
            <h1>
              How we made <br />
              pet food healthy:
            </h1>
            <div>
              <div>
                <h3>Tested on Humans</h3>
                <p>
                  Human-grade food in human-friendly packaging. Less processing,
                  higher safety standards, and easy serving — just open and
                  pour!
                </p>
              </div>
              <div>
                <h3>Personalized Plans</h3>
                <p>
                  A vet-designed plan is customized to your dog’s individual
                  needs. Meals are pre-made and pre-portioned to their calorie
                  needs based on the <Link href="#">profile you create.</Link>
                </p>
              </div>
              <div>
                <h3>Delivered Within Days</h3>
                <p>
                  Your food is delivered to you within days of cooking. Never
                  deep frozen. Never stored on a shelf for months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Approach;
