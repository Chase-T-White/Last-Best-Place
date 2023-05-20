"use client";

import styles from "../../home.module.css";
import Image from "next/image";
import missionImg from "/public/images/home/mission/mission.jpg";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className={styles.mission_section}>
      <h1 className={styles.mission_heading}>MISSION</h1>
      <article className={styles.mission_content}>
        <div className={styles.mission_img_container}>
          <Image
            src={missionImg}
            placeholder="blur"
            alt="Owner at counter with beer"
            className={styles.mission_img}
            fill
          />
        </div>
        <div className={styles.mission_text}>
          <motion.p
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, type: "linear" },
            }}
          >
            At Last Best Place Brewery, we are dedicated to crafting more than
            just exceptional beers. Our mission is to create an inviting and
            vibrant atmosphere where friends and families can come together to
            share memorable moments. With an unwavering commitment to quality,
            we strive to curate an experience filled with laughter, camaraderie,
            and the joy of forgetting the world outside, if only for a few
            hours. Join us and discover the perfect blend of exceptional brews,
            warm hospitality, and an ambiance that celebrates the best of life.
          </motion.p>
        </div>
      </article>
    </section>
  );
};

export default Mission;
