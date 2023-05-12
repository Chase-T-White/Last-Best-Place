"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
  const [isDayOfEvent, setIsDayOfEvent] = useState(false);
  const [isEventNow, setIsEventNow] = useState(false);
  const [isPastEvent, setIsPastEvent] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({});

  useEffect(() => {
    eventCountDown();
  }, []);

  const eventCountDown = () => {
    const eventTimeStart = new Date("May 13, 2023 15:00:00");
    const eventTimeEnd = new Date("May 13, 2023 20:00:00");
    const currentTime = new Date().getTime();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const timeRemaining = eventTime.getTime() - currentTime;

    if (currentMonth === 4 && currentDay === 13) {
      setIsDayOfEvent(true);
    }

    if (eventTimeStart.getTime() < currentTime < eventTimeEnd) {
      setIsEventNow(true);
    }

    if (eventTimeEnd < currentTime) {
      setIsPastEvent(true);
      return;
    }
  };

  return (
    <section>
      <header>
        <h3>
          We are excited to be a part of this years Montana Brewers Spring
          Rendezvous presented by Montana Brewers Association!
        </h3>
        <p>
          Join us May 13th from 3PM - 8PM for live music and Montana-made craft
          beer!
        </p>
        <p>
          <Link href="https://www.sellout.io/events/montana-brewers-spring-rendezvous-2023">
            For more information or to get your tickets now, click here!
          </Link>
        </p>
      </header>
      <article>
        <h3>Montana Brewers Spring Rendezvous Countdown</h3>
        <div className="countDown">
          <div className="timer">
            <h4>{timeRemaining.days}</h4>
            <small>Days</small>
          </div>
          <div className="timer">
            <h4>{timeRemaining.hours}</h4>
            <small>Hours</small>
          </div>
          <div className="timer">
            <h4>{timeRemaining.minutes}</h4>
            <small>Minutes</small>
          </div>
          <div className="timer">
            <h4>{timeRemaining.seconds}</h4>
            <small>Seconds</small>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Countdown;
