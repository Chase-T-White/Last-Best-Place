"use client";

import { useState, useEffect } from "react";
import styles from "./events.module.css";
import Loading from "../Components/Loading";
import headerPic from "/public/images/events/headerPic.jpg";
import PageHeader from "../Components/PageHeader";
import EventRow from "../Components/Events/EventRow";
import { useIsMedium } from "../hooks/utils";

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

  const isMedium = useIsMedium();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <PageHeader heading={"LBP Events"} img={headerPic} />
      <article className={styles.events_category}>
        <h2>Weekly Events</h2>
        <div>
          {events
            .filter((event) => event.specialEvent === false)
            .map((event) => (
              <EventRow event={event} isMedium={isMedium} />
            ))}
        </div>
      </article>
      <article className={styles.events_category}>
        <h2>Upcoming Events</h2>
        <div>
          {events
            .filter((event) => event.specialEvent === true)
            .map((event) => (
              <EventRow event={event} isMedium={isMedium} />
            ))}
        </div>
      </article>
    </section>
  );
};

export default page;
