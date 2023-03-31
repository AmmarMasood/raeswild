import React from "react";
import styles from "@/styles/Home/PlanFeature.module.scss";
import Image from "next/image";
import heroimg from "../../public/imgs/hero-img.jpg";
import Button from "../Shared/Button";
import progress from "../../public/imgs/progress-steps-desktop-9515cb.gif";

function PlanFeature() {
  return (
    <section className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <div className={styles["container--about"]}>
          <div>
            <h1>
              Better for them. <br />
              Easier for you.
            </h1>
            <p>
              Skip the stores, preservatives, and retail markups. Our
              vet-developed plans guide you to the best diet, while
              perfectly-timed refrigerated deliveries make sure you never run
              out.
            </p>
            <h2>Plan Features</h2>
            <ul>
              <li>
                Free & Flexible <br />
                Deliveries
              </li>
              <li>
                Nationwide <br />
                Shipping
              </li>
              <li>
                Eco Friendly <br />
                Packaging
              </li>
              <li>
                24-Hour
                <br />
                Customer Service
              </li>
            </ul>
          </div>
          <div>
            <Image alt="dogs" src={heroimg} layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles["container--working"]}>
          <h1>How your plan works</h1>
          <div>
            <Image src={progress} alt="" layout="fill" objectFit="contain" />
          </div>
          <div>
            <div>
              <h2>Build Your Plan</h2>
              <p>
                Simply tell us a little bit about your dog, and we’ll create a
                plan with personalized portions to meet their unique nutritional
                and caloric needs.
              </p>
            </div>
            <div>
              <h2>Try it Out</h2>
              <p>
                To start, you’ll get your first box with up to two weeks of
                fresh food – perfect for your dog to get a taste.
              </p>
            </div>
            <div>
              <h2>BFall in Love</h2>
              <p>
                If you and your dog love it – we think you will! – you’re all
                set. You’ll start receiving boxes of food automatically whenever
                you’re running low.
              </p>
            </div>
          </div>
          <Button
            text="Build My Plan"
            onClick={() => console.log("build my plan")}
          />
        </div>
      </div>
    </section>
  );
}

export default PlanFeature;
