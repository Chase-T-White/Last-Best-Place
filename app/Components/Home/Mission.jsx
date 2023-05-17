import React from "react";
import styles from "../../home.module.css";
import Image from "next/image";
import missionImg from "/public/images/home/mission/mission.jpg";

const Mission = () => {
  return (
    <section className={styles.mission_section}>
      <h1 className={styles.mission_heading}>OUR MISSION</h1>
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
          <p>
            At Last Best Place Brewery, we are dedicated to crafting more than
            just exceptional beers. Our mission is to create an inviting and
            vibrant atmosphere where friends and families can come together to
            share memorable moments. With an unwavering commitment to quality,
            we strive to curate an experience filled with laughter, camaraderie,
            and the joy of forgetting the world outside, if only for a few
            hours. Join us and discover the perfect blend of exceptional brews,
            warm hospitality, and an ambiance that celebrates the best of life.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Mission;
