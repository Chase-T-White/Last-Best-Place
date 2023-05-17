import React from "react";
import styles from "../../../home.module.css";
import beerWeek from "/public/images/home/beer/beerWeek.jpg";
import Image from "next/image";
import Link from "next/link";

const BeerOfWeek = () => {
  return (
    <article className={styles.beers_article}>
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
        <Link href="/beers">View Beers</Link>
      </div>
    </article>
  );
};

export default BeerOfWeek;
