"use client";

import React from "react";
import styles from "../../../home.module.css";
import Image from "next/image";
import can from "/public/images/home/beer/canBeer.png";
import dadBod from "/public/images/home/beer/dadBod.png";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "linear",
      when: "beforeChildren",
    },
    exit: {
      x: "100vw",
      transition: {
        duration: 1,
        type: "linear",
      },
    },
  },
};

// const childVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//     },
//   },
// };

const BeerAnnouncement = () => {
  return (
    <motion.article
      className={styles.beers_article}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.announcement_content}>
        <div className={styles.announcement_img_container}>
          <Image src={can} alt="LBP beer can" fill />
          <motion.div
            initial={{ y: 200, x: 50, rotate: -25 }}
            animate={{
              y: 0,
              x: 0,
              rotate: -25,
            }}
            transition={{
              duration: 1,
              type: "linear",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3,
            }}
          >
            <Image src={dadBod} alt="Dad Bod" fill />
          </motion.div>
        </div>
        <div className={styles.announcemet_text_content}>
          <h1>We Have Cans!</h1>
          <p>Grab a 6-pack to-go from our tasting room cooler!</p>
          <Link href="/beers" className="btn-primary btn__dark-shadow ">
            View Beers
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BeerAnnouncement;
