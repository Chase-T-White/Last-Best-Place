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

const parentVariant = {
  initial: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.75, type: "linear", when: "beforeChildren" },
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.5, type: "linear", when: "afterChildren" },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 70,
    rotate: 5,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
    y: 70,
    rotate: 5,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
};

const imgVariants = {
  initialLg: {
    opacity: 0,
    scale: 1.5,
  },
  initialSm: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.9,
      duration: 0.75,
      type: "linear",
    },
  },
  exitLg: {
    opacity: 0,
    scale: 1.5,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
  exitSm: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
};

const page = () => {
  const [beers, setBeers] = useState([]);
  const [currentBeer, setCurrentBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchBeers = async () => {
      const res = await fetch("/api/beers");
      const data = await res.json();
      setBeers(data);
      setCurrentBeer(data[0]);
      setIsLoading(false);
    };

    fetchBeers();
  }, []);

  useEffect(() => {
    setCurrentBeer(beers[index]);
  }, [index, beers]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className={styles.beers_list}>
      <AnimatePresence>
        <motion.article
          key={index}
          className={`${styles.beers_list__item}`}
          variants={parentVariant}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          <aside
            className={`${styles.beers_list__item_aside} ${styles.beer_text__container}`}
          >
            <motion.header
              className={styles.beer_upper_text}
              variants={textVariants}
            >
              <h4 className={`alt-textStyle ${styles.beer_text}`}>
                {currentBeer.type}
              </h4>
              <h2 className={styles.beer_text}>{currentBeer.name}</h2>
              <h6 className={`alt-textStyle ${styles.beer_text}`}>
                {currentBeer.alcoholContent}
              </h6>
            </motion.header>
            <motion.div
              variants={textVariants}
              className={styles.beer_lower_text}
            >
              <h6 className={styles.beer_text}>
                <strong>{currentBeer.category}</strong>
              </h6>
              <p className={styles.beer_text}>{currentBeer.description}</p>
              {currentBeer.glutenReduced ? (
                <p
                  className={`${styles.beer_text} ${styles.beer_text__gluten}`}
                >
                  <em>**Gluten Reduced</em>
                </p>
              ) : (
                ""
              )}
            </motion.div>
          </aside>
          <article className={styles.beers_list__item_images_container}>
            <motion.div
              variants={imgVariants}
              initial="initialLg"
              animate="visible"
              exit="exitLg"
              className={styles.beer_glass_container}
            >
              <Image
                src={currentBeer.beerImg}
                alt={`${currentBeer.name} in a Last Best Place pint glass`}
                fill
                className={styles.beer_glass}
              />
            </motion.div>
            <div className={styles.beer_background_container}>
              <motion.div
                variants={imgVariants}
                initial="initialLg"
                animate="visible"
                exit="exitLg"
                className={styles.beer_subContainer}
              >
                <Image
                  src={currentBeer.backgroundImg}
                  alt="Background image"
                  fill
                  className={styles.beer_background}
                />
              </motion.div>
            </div>
          </article>
          <aside className={styles.beers_list__item_aside}>
            <p>
              <span>{currentBeer.id}</span>/{beers.length}
            </p>
            <motion.div
              variants={imgVariants}
              initial="initialSm"
              animate="visible"
              exit="exitSm"
              className={styles.beerImgs_container}
            >
              <Image
                src={beers[index === beers.length - 1 ? 0 : index + 1].beerImg}
                alt="LBP beer in pint glass"
                fill
              />
            </motion.div>
          </aside>
        </motion.article>
      </AnimatePresence>

      <div className={styles.beers_arrowIcons__container}>
        <BsFillArrowLeftCircleFill
          className={styles.beers_arrowIcon}
          onClick={() => {
            if (index === 0) {
              setIndex(beers.length - 1);
            } else {
              setIndex(index - 1);
            }
          }}
        />
        <BsFillArrowRightCircleFill
          className={styles.beers_arrowIcon}
          onClick={() => {
            if (index === beers.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        />
      </div>
    </main>
  );
};

export default page;
