"use client";

import { useState, useEffect } from "react";
import styles from "../../../home.module.css";
import NewBeer from "./NewBeer";
import BeerAnnouncement from "./BeerAnnouncement";
import BeerOfWeek from "./BeerOfWeek";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Beers = () => {
  const carousalItems = [
    <NewBeer key={1} />,
    <BeerAnnouncement key={2} />,
    <BeerOfWeek key={3} />,
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === carousalItems.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 10000);

    return clearTimeout(timer);
  }, [index]);

  return (
    <section className={styles.beers_section}>
      <AnimatePresence initial={false} mode="sync">
        {carousalItems[index]}
        <BsFillArrowRightCircleFill
          className={styles.transition_icon}
          onClick={() => {
            if (index === carousalItems.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        />
      </AnimatePresence>
    </section>
  );
};

export default Beers;
