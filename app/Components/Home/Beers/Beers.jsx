import React from "react";
import styles from "../../../home.module.css";
import NewBeer from "./NewBeer";
import BeerAnnouncement from "./BeerAnnouncement";
import BeerOfWeek from "./BeerOfWeek";

const Beers = () => {
  return (
    <section className={styles.beers_section}>
      <BeerOfWeek />
    </section>
  );
};

export default Beers;
