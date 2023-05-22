"use client";

import React from "react";
import styles from "../../../home.module.css";
import newBeer from "/public/images/home/beer/newBeer.jpg";
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

const NewBeer = () => {
  return (
    <motion.article
      className={styles.beers_article}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image
        src={newBeer}
        className={styles.beers_img}
        alt="New beer in glass and can on a beach"
        fill
      />
      <motion.div className={styles.beers_content} variants={childVariants}>
        <h3>Coming Soon</h3>
        <p>
          Introducing "Sunshine Wheat," our upcoming summer delight. This
          refreshing brew combines the crispness of a wheat beer with hints of
          citrus and a touch of sunshine, delivering the perfect companion for
          warm days and good times.
        </p>
        <div>
          <Link href="/beers" className="btn-primary">
            View Beers
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default NewBeer;
