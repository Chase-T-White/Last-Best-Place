import { useEffect, useRef } from "react";
import styles from "../../lbp/lbp.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

const TeamRow = ({ member }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start({
        opacity: 1,
        y: 0,
      });
    }
  });
  return (
    <div ref={ref} key={member.id} className={styles.member_background}>
      <div className="page-wrapper">
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={mainControls}
          transition={{ duration: 0.75, type: "linear" }}
          className={styles.member_container}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default TeamRow;
