"use client";

import { useState } from "react";
import styles from "../../../home.module.css";
import NewBeer from "./NewBeer";
import BeerAnnouncement from "./BeerAnnouncement";
import BeerOfWeek from "./BeerOfWeek";
import { motion, AnimatePresence } from "framer-motion";

const transitionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "linear",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Beers = () => {
  return (
    <section className={styles.beers_section}>
      <AnimatePresence initial={false}>
        {/* <NewBeer /> */}
        <BeerAnnouncement />
        {/* <BeerOfWeek /> */}
      </AnimatePresence>
    </section>
  );
};

export default Beers;
