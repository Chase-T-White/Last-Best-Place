"use client";

import { useState } from "react";
import styles from "../../../home.module.css";
import NewBeer from "./NewBeer";
import BeerAnnouncement from "./BeerAnnouncement";
import BeerOfWeek from "./BeerOfWeek";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Beers = () => {
  return (
    <section className={styles.beers_section}>
      <NewBeer />
      {/* <BeerAnnouncement />
      <BeerOfWeek /> */}
    </section>
  );
};

export default Beers;
