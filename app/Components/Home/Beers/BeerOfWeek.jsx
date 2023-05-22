import React from "react";
import styles from "../../../home.module.css";
import beerWeek from "/public/images/home/beer/beerWeek.jpg";
import Image from "next/image";
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

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const BeerOfWeek = () => {
  return (
    <motion.article
      className={styles.beers_article}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <h1>Beer of the Week</h1> */}
      <div className={styles.beerWeek_img_container}>
        <Image
          src={beerWeek}
          alt="Beer of the Week"
          className={styles.beerWeek_img}
          fill
        />
      </div>
      <div className={styles.beerWeek_content}>
        <h2>Twilight Haze</h2>
        <p>
          This hazy IPA was chosen for its exceptional balance of tropical fruit
          flavors and a smooth, velvety mouthfeel. Bursting with notes of juicy
          mango, pineapple, and a hint of citrus, Twilight Haze is the perfect
          companion to unwind and embrace the magic of twilight hours, making it
          an easy choice for our Beer of the Week selection.
        </p>
        <Link href="/beers" className="btn-primary btn__dark-shadow">
          View Beers
        </Link>
      </div>
    </motion.article>
  );
};

export default BeerOfWeek;
