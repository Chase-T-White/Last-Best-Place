"use client";

import { useState, useEffect } from "react";
import styles from "../../../home.module.css";
import NewBeer from "./NewBeer";
import BeerAnnouncement from "./BeerAnnouncement";
import BeerOfWeek from "./BeerOfWeek";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Beers = () => {
  const carouselItems = [
    { id: 1, component: <NewBeer /> },
    { id: 2, component: <BeerAnnouncement /> },
    { id: 3, component: <BeerOfWeek /> },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [index, carouselItems.length]);

  return (
    <section className={styles.beers_section}>
      <AnimatePresence mode="wait">
        <motion.div
          key={carouselItems[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ height: "100%" }}
        >
          {carouselItems[index].component}
        </motion.div>
      </AnimatePresence>

      <BsFillArrowRightCircleFill
        className={styles.transition_icon}
        onClick={() => {
          setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }}
      />
    </section>
  );
};

export default Beers;
