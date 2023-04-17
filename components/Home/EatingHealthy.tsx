import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import img1 from "../../public/imgs/food-before.jpg";
import img2 from "../../public/imgs/food-after.jpg";
import styles from "@/styles/Home/EatingHealthy.module.scss";
import Button from "../Shared/Button";
import vegi from "../../public/imgs/vegetable.png";

const EatingHealthy = () => {
  const ref = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // const handleScroll = () => {
    //   const scrollPosition = (ref?.current as any).getBoundingClientRect().top;
    //   const windowHeight = window.innerHeight;
    //   if (
    //     scrollPosition < windowHeight &&
    //     scrollPosition > -(ref?.current as any).offsetHeight
    //   ) {
    //     const scrollPercentage =
    //       (windowHeight - scrollPosition) /
    //       (windowHeight + (ref?.current as any).offsetHeight + 200);
    //     setScrollPercentage(scrollPercentage);
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageStyle1: any = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease-out",
    transform: `translateX(-${scrollPercentage * 150}%)`,
    zIndex: 1,
  };

  const imageStyle2: any = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <section className={styles["eating-healthy-outer"]}>
      <div className={styles["eating-healthy"]}>
        <h1>Rae’s Wild – We Make Fresh Dog Food. Delivered To Your Door.</h1>
        {/* <p>
          Like you, we love our pets and care about their health. That’s why we
          created The Farmer’s Dog — a service that delivers balanced, freshly
          made pet food with simple recipes, guided by science, and driven by
          love.
        </p>

        <div className={styles["eating-healthy--inner"]}>
          <div className={styles["eating-healthy--inner--textcontainer"]}>
            <div>
              <Image src={vegi} alt="" width={40} height={40} />
              <div>
                <h2>Real Food</h2>
                <p>
                  Human-grade meat and veggies in simple recipes, made for dogs
                </p>
              </div>
            </div>
            <div>
              <Image src={vegi} alt="" width={40} height={40} />
              <div>
                <h2>USDA Kitchens</h2>
                <p>Safety and quality never before available to pets</p>
              </div>
            </div>
          </div>
          <div
            className={styles["eating-healthy--inner-imgcontainer"]}
            ref={ref}
          >
            <Image
              src={img1}
              alt="Image 1"
              style={imageStyle1}
              height={300}
              width={300}
            />
            <Image
              src={img2}
              alt="Image 2"
              style={imageStyle2}
              height={300}
              width={300}
            />
          </div>
          <div className={styles["eating-healthy--inner--textcontainer"]}>
            <div>
              <Image src={vegi} alt="" width={40} height={40} />
              <div>
                <h2>Made Fresh</h2>
                <p>Maintain whole food and nutritional integrity</p>
              </div>
            </div>
            <div>
              <Image src={vegi} alt="" width={40} height={40} />
              <div>
                <h2>Vet Developed</h2>
                <p>
                  Nutrition that exceeds industry standards for dogs (AAFCO)
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <Button text="Sign Up" onClick={() => console.log("")} />
      </div>
    </section>
  );
};

export default EatingHealthy;
