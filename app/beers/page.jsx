"use client";

import { useState, useEffect } from "react";
import styles from "./beers.module.css";
import Loading from "../Components/Loading";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  const [beers, setBeers] = useState([]);
  const [beerImgs, setBeerImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchBeers = async () => {
      const res = await fetch("/api/beers");
      const data = await res.json();
      setBeers(data);
      setBeerImgs(() => {
        beers.map((beer) => {
          return beer.beerImg;
        });
      });
      setIsLoading(false);
    };

    fetchBeers();
  }, []);

  useEffect(() => {
    const lastIndex = beers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, beers]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="relative">
      <ul className={styles.beers_list}>
        {beers.map((beer, beerIndex) => {
          let sliderPosition = "beer-queued";
          let nextBeer;
          if (beerIndex === index) {
            sliderPosition = "beer-current";
          }
          if (
            beerIndex === index + 1 ||
            (index === beers.length - 1 && beerIndex === 0)
          ) {
            nextBeer = "beer-next";
          }
          return (
            <li
              key={beer.id}
              className={`${styles.beers_list__item} ${sliderPosition}`}
            >
              <aside
                className={`${styles.beers_list__item_aside} ${styles.beer_text__container}`}
              >
                <header staggerChildren className={styles.beer_upper_text}>
                  <h4 className={`alt-textStyle ${styles.beer_text}`}>
                    {beer.type}
                  </h4>
                  <h2 className={styles.beer_text}>{beer.name}</h2>
                  <h6 className={`alt-textStyle ${styles.beer_text}`}>
                    {beer.alcoholContent}
                  </h6>
                </header>
                <div>
                  <h6 className={`alt-textStyle ${styles.beer_text}`}>
                    {beer.category}
                  </h6>
                  <p className={styles.beer_text}>{beer.description}</p>
                  {beer.glutenReduced ? (
                    <p className={styles.beer_text}>**Gluten Reduced</p>
                  ) : (
                    ""
                  )}
                </div>
              </aside>
              <article className={styles.beers_list__item_images_container}>
                <Image
                  src={beer.beerImg}
                  alt={`${beer.name} in a Last Best Place pint glass`}
                  height={300}
                  width={300}
                  className={styles.beer_glass}
                />
                <Image
                  src={beer.backgroundImg}
                  alt="Background image"
                  height={300}
                  width={300}
                  className={styles.beer_background}
                />
              </article>
              <aside className={styles.beers_list__item_aside}>
                <p>
                  <span>{beer.id}</span>/{beers.length}
                </p>
                {/* <div className={styles.beerImgs_container}>
                  {beerImgs.map((image) => {
                    return <Image src={image} alt="LBP beer in pint glass" width={100} height={250} className={}/>
                  })}
                </div> */}
              </aside>
            </li>
          );
        })}
      </ul>
      <div className={styles.beers_arrowIcons__container}>
        <BsFillArrowLeftCircleFill
          className={styles.beers_arrowIcon}
          onClick={() => setIndex(index - 1)}
        />
        <BsFillArrowRightCircleFill
          className={styles.beers_arrowIcon}
          onClick={() => setIndex(index + 1)}
        />
      </div>
    </main>
  );
};

export default page;
