import React from "react";
import styles from "../../home.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <video className={styles.hero_video} autoPlay loop muted>
        <source src={`/videos/beers.mp4`} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
