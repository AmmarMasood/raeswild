import React, { useEffect, useState } from "react";
import styles from "@/styles/Home/PlanFeature.module.scss";
import Image from "next/image";
import heroimg from "../../public/imgs/3.jpg";
import heroimg2 from "../../public/imgs/2.jpg";
import heroimg3 from "../../public/imgs/1.jpg";
import Button from "../Shared/Button";
import progress from "../../public/imgs/progress-steps-desktop-9515cb.gif";

function PlanFeature() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <div className={styles["container--about"]}>
          <div>
            <h1>Wild Boar Meat</h1>
            {/* <p>
              Skip the stores, preservatives, and retail markups. Our
              vet-developed plans guide you to the best diet, while
              perfectly-timed refrigerated deliveries make sure you never run
              out.
            </p> */}
            {/* <h2>Benefits</h2> */}
            <ul>
              <li>Packed with Vitamins and Minerals</li>
              <li>Lean Protein with Low Cholesterol</li>
              <li>Higher Level of Nutrition compared to farm raised pigs</li>
              <li>No Antibiotics or Hormones</li>
            </ul>
          </div>
          <div>
            <Image alt="dogs" src={heroimg} layout="fill" objectFit="contain" />
          </div>
        </div>
        {isMobile ? (
          <div className={styles["container--about"]}>
            <div>
              <h1>Vet-Nutritionist Approved</h1>
              {/* <p>
              Skip the stores, preservatives, and retail markups. Our
              vet-developed plans guide you to the best diet, while
              perfectly-timed refrigerated deliveries make sure you never run
              out.
            </p> */}
              {/* <h2>Benefits</h2> */}
              <ul>
                <li>Calibrated and Tailored to Your Dog</li>
                <li>Exceeds AAFCO Standards</li>
              </ul>
            </div>
            <div>
              <Image
                alt="dogs"
                src={heroimg2}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        ) : (
          <div className={styles["container--about-reverse"]}>
            <div>
              <Image
                alt="dogs"
                src={heroimg2}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1>Vet-Nutritionist Approved</h1>
              {/* <p>
              Skip the stores, preservatives, and retail markups. Our
              vet-developed plans guide you to the best diet, while
              perfectly-timed refrigerated deliveries make sure you never run
              out.
            </p> */}
              {/* <h2>Benefits</h2> */}
              <ul>
                <li>Calibrated and Tailored to Your Dog</li>
                <li>Exceeds AAFCO Standards</li>
              </ul>
            </div>
          </div>
        )}
        <div className={styles["container--about"]}>
          <div>
            <h1>All Made Fresh</h1>
            {/* <p>
              Skip the stores, preservatives, and retail markups. Our
              vet-developed plans guide you to the best diet, while
              perfectly-timed refrigerated deliveries make sure you never run
              out.
            </p> */}
            {/* <h2>Benefits</h2> */}
            <ul>
              <li>All Organic Ingredients</li>
              <li>USDA Kitchens</li>
              <li>Slow Cooked </li>
            </ul>
          </div>
          <div>
            <Image
              alt="dogs"
              src={heroimg3}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* <div className={styles["container--working"]}>
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
        </div> */}
      </div>
    </section>
  );
}

export default PlanFeature;
