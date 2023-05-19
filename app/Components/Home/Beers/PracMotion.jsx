import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const spinnyVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      type: "linear",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2,
      type: "linear",
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 1,
      type: "linear",
    },
  },
};

const imgVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
      type: "linear",
    },
  },
};

const buttonVariant = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const PracMotion = () => {
  const data = [
    {
      id: 1,
      image: "/images/home/beer/beerWeek.jpg",
    },
    {
      id: 2,
      image: "/images/home/beer/canOriginal.jpg",
    },
    {
      id: 3,
      image: "/images/home/beer/announcementDadOriginal.jpg",
    },
  ];
  const [index, setIndex] = useState(0);
  const [viewData, setViewData] = useState(data[0]);

  useEffect(() => {
    setViewData(data[index]);
  }, [index]);

  return (
    <article className="practice">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="practice-box"
          variants={spinnyVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.header variants={childrenVariant} className="practice-text">
            <h5>Heading</h5>
          </motion.header>
          <motion.p variants={childrenVariant} className="practice-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            perspiciatis.
          </motion.p>
          <div className="practice-pill">
            <motion.div
              variants={imgVariant}
              className="practice-img_container"
            >
              <Image
                src={`${viewData.image}`}
                alt="practice image"
                className="practice-img"
                width={150}
                height={150}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="prac-icons_container">
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          whileTap="tap"
          className="prac-icons__container"
        >
          <BsFillArrowLeftCircleFill
            className="prac-arrow"
            onClick={() => {
              if (index === 0) {
                setIndex(2);
              } else {
                setIndex(index - 1);
              }
            }}
          />
        </motion.div>
        <motion.div
          variants={buttonVariant}
          whileHover="hover"
          whileTap="tap"
          className="prac-icons__container"
        >
          <BsFillArrowRightCircleFill
            className="prac-arrow"
            onClick={() => {
              if (index === 2) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          />
        </motion.div>
      </div>
    </article>
  );
};

export default PracMotion;
