"use client";

import { useState, useEffect } from "react";
import styles from "./events.module.css";
import Loading from "../Components/Loading";
import Image from "next/image";
import { motion } from "framer-motion";
import headerPic from "/public/images/events/headerPic.jpg";
import PageHeader from "../Components/PageHeader";

const eventVariants = {
  initial: {
    x: -880,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.75,
      type: "linear",
    },
  },
};

const page = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      setEvents(data);
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const eventRow = (event) => {
    return (
      <div className={styles.event_row}>
        <motion.div
          variants={eventVariants}
          initial="initial"
          whileHover="animate"
          className={styles.event_container}
        >
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
      </div>
    );
  };

  return (
    <section>
      <PageHeader heading={"LBP Events"} img={headerPic} />
      <article className={styles.events_category}>
        <h2>Weekly Events</h2>
        <div>
          {events
            .filter((event) => event.specialEvent === false)
            .map((event) => eventRow(event))}
        </div>
      </article>
      <article className={styles.events_category}>
        <h2>Upcoming Events</h2>
        <div>
          {events
            .filter((event) => event.specialEvent === true)
            .map((event) => eventRow(event))}
        </div>
      </article>
    </section>
  );
};

export default page;
