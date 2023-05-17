import React from "react";
import styles from "../../home.module.css";
import newBeer from "/public/images/home/beer/newBeer.jpg";
import Image from "next/image";
import Link from "next/link";

const Beers = () => {
  return (
    <section className={styles.beers_section}>
      <Image
        src={newBeer}
        className={styles.beers_img}
        alt="New beer in glass and can on a beach"
        fill
      />
      <div className={styles.beers_content}>
        <h3>Coming Soon</h3>
        <p>
          Introducing "Sunshine Wheat," our upcoming summer delight. This
          refreshing brew combines the crispness of a wheat beer with hints of
          citrus and a touch of sunshine, delivering the perfect companion for
          warm days and good times.
        </p>
        <Link href="/beers">View Beers</Link>
      </div>
    </section>
  );
};

export default Beers;
