import React from "react";
import styles from "@/styles/Home/Hero.module.scss";
import ReactPlayer from "react-player";

function Hero() {
  return (
    <section className={styles["hero"]}>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        src="https://res.cloudinary.com/dhpispmtz/video/upload/v1681837213/BannerVideo_yda50a.mp4"
        className={styles["video"]}
        width="100%"
        height="100%"
      />
    </section>
  );
}

export default Hero;
