"use client";

import React from "react";
import styles from "../../../home.module.css";
import Image from "next/image";
import can from "/public/images/home/beer/canBeer.png";
import dadBod from "/public/images/home/beer/dadBod.png";
import Link from "next/link";
import { motion } from "framer-motion";

const dadBodVariant = {
  initial: {
    top: 200,
  },
  popUp: {
    top: 0,
    transition: {
      duration: 2,
      delay: 5,
      type: "linear",
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};

const BeerAnnouncement = () => {
  return (
    <article className={styles.beers_article}>
      <div className={styles.announcement_content}>
        <div className={styles.announcement_img_container}>
          <Image src={can} alt="LBP beer can" fill />
          <motion.div
            variants={dadBodVariant}
            initial="initial"
            animate="popUp"
          >
            <Image src={dadBod} alt="Dad Bod" fill />
          </motion.div>
        </div>
        <div className={styles.announcemet_text_content}>
          <h1>We Have Cans!</h1>
          <p>Grab a 6-pack to-go from our tasting room cooler!</p>
          <Link href="/beers" className="btn-primary">
            View Beers
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BeerAnnouncement;
