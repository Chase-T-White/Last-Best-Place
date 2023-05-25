"use client";

import { useState, useEffect } from "react";
import styles from "../lbp.module.css";
import PageHeader from "@/app/Components/PageHeader";
import TeamRow from "@/app/Components/LBP/TeamRow";
import Loading from "@/app/Components/Loading";
import headerImg from "/public/images/lbp/teamHeader.jpg";

const page = () => {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch("/api/team");
      const data = await res.json();
      setTeam(data);
      setIsLoading(false);
    };

    fetchTeam();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <PageHeader heading={"Meet the Team"} img={headerImg} />
      <article className={styles.team_container}>
        {team.map((member) => {
          return <TeamRow member={member} />;
        })}
      </article>
    </section>
  );
};

export default page;
