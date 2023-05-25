import { useRef, useEffect } from "react";
import styles from "../../events/events.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const EventRow = ({ event, isMedium }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
    if (!isInView) {
      mainControls.start("initial");
    }
  }, [isInView]);

  const parentVariant = {
    initial: { x: 0 },
    animate: { x: 0 },
  };

  const childVariants = isMedium
    ? {
        initial: {
          opacity: 0,
          y: "10%",
          transition: {
            duration: 0.75,
            type: "linear",
          },
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            type: "linear",
          },
        },
      }
    : {
        initial: {
          x: "-50%",
        },
        animate: {
          x: 0,
          transition: {
            duration: 0.75,
            type: "linear",
          },
        },
      };

  return (
    <motion.div
      ref={ref}
      key={event.id}
      variants={parentVariant}
      initial="initial"
      animate={isMedium ? mainControls : undefined}
      whileHover={isMedium ? undefined : "animate"}
      className={styles.event_row}
    >
      <motion.div variants={childVariants} className={styles.event_container}>
        <div className={styles.event_imgContainer}>
          <Image src={event.eventImg} alt="event image" fill />
        </div>
        <div className={styles.events_text_container}>
          <h4>{event.event}</h4>
          <strong>
            <small>{event.when}</small>
          </strong>
          <p>{event.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventRow;
