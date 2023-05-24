import React from "react";
import styles from "../lbp.module.css";
import PageHeader from "@/app/Components/PageHeader";
import headerImg from "/public/images/lbp/storyHeader.jpg";

const page = () => {
  return (
    <section>
      <PageHeader heading={"Our Journey"} img={headerImg} />
      <article className={styles.story_contentContainer}>
        <div className="page-wrapper">
          <div className={styles.story_videoContainer}>
            <video className={styles.story_video} autoPlay loop muted>
              <source src={`/videos/beers.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
