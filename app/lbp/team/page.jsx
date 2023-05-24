"use client";

import { useState, useEffect } from "react";
import styles from "../lbp.module.css";
import PageHeader from "@/app/Components/PageHeader";
import Loading from "@/app/Components/Loading";
import Image from "next/image";
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
          return (
            <div key={member.id} className={styles.member_background}>
              <div className="page-wrapper">
                <div className={styles.member_container}>
                  <div className={styles.member_imgContainer}>
                    <Image
                      src={member.teamMemberImg}
                      alt={`Picture of ${member.name}`}
                      fill
                    />
                  </div>
                  <div className={styles.member_textContainer}>
                    <h3>{member.name}</h3>
                    <p>
                      <strong>{member.title}</strong>
                    </p>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default page;
