"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../../home.module.css";
import Image from "next/image";
import Link from "next/link";
import event from "/public/images/home/events/default1.jpg";
import { motion, useInView, useAnimation } from "framer-motion";

const Events = () => {
  const [isEventToday, setIsEventToday] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      checkForEvents(data);
    };
    fetchEvents();
  }, []);

  const checkForEvents = (data) => {
    const currentDay = new Date().getDay();
    const currentEventsArray = data.find((event) => {
      return Number(event.dayCode) === currentDay;
    });
    if (currentEventsArray) {
      setIsEventToday(true);
      setCurrentEvent(currentEventsArray);
    }
  };

  const getEventTime = () => {
    const whenArray = currentEvent.when.split(", ");
    return whenArray[1];
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <section ref={ref} className={styles.events_section}>
      <Image
        src={isEventToday ? currentEvent.eventImg : event}
        alt="Image of an event at Last Best Place Brewery"
        className={styles.events_img}
        fill
      />
      <motion.div
        variants={{
          initial: { opacity: 0, y: "100%" },
          visible: { opacity: 1, y: 0 },
        }}
        initial="initial"
        animate={mainControls}
        transition={{ duration: 1, type: "linear" }}
        className={styles.events_content}
      >
        <h3>{isEventToday ? currentEvent.event : "Events"}</h3>
        <p>
          {isEventToday
            ? currentEvent.description
            : "At Last Best Place Brewery, we host a variety of exciting events throughout the year. From lively live music nights featuring local talent to engaging brewery tours and tasting sessions, there's always something happening for beer enthusiasts and curious newcomers alike. Join us as we create memorable experiences, where friends come together to raise a glass, share laughter, and immerse themselves in the vibrant world of craft beer."}
        </p>
        {isEventToday ? <small>Today, {getEventTime()}</small> : null}
        <div>
          <Link href="/events" className="btn-primary">
            Upcoming Events
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Events;
