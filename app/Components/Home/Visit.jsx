"use client";

import React from "react";
import styles from "../../home.module.css";
import Image from "next/image";
import Link from "next/link";
import building from "/public/images/home/visit/visit1.jpg";
import inside from "/public/images/home/visit/visit2.jpg";
import { motion } from "framer-motion";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";

const Visit = () => {
  return (
    <section className={styles.visit_section}>
      <div className={styles.visit_img_block}>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "linear" } }}
          className={styles.block_img_container}
        >
          <Image
            src={building}
            alt="Street view of Last Best Place Brewery"
            fill
          />
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 1, type: "linear" } }}
          className={styles.block_img_container}
        >
          <Image
            src={inside}
            alt="Inside taproom view of Last Best Place Brewery"
            fill
          />
        </motion.div>
      </div>
      <div className={styles.visit_content}>
        <div className={styles.visit_lbpInfo}>
          <div className={styles.visit_address}>
            <h5>LBP</h5>
            <p>
              605 N 7th Ave
              <br />
              Suite, 101
              <br />
              Bozeman, MT 59715
            </p>
            <p>406-266-2913</p>
          </div>
          <div className={styles.visit_hours}>
            <h5>Hours</h5>
            <p>
              <strong>Sunday-Saturday</strong>
              <br />
              12:00pm - 8:00pm
            </p>
            <div className={styles.visit_icons_container}>
              <Link href="https://www.facebook.com/LBPbrewing/" target="_blank">
                <AiFillFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/lastbestplacebrewingco/?hl=en"
                target="_blank"
              >
                <AiFillInstagram />
              </Link>
              <AiFillMail />
            </div>
          </div>
        </div>
        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.995734029014!2d-111.05148810809163!3d45.68576924406423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345444ed116c889%3A0xfe21aa8fbbb930bd!2s605%20N%207th%20Ave%20%23101%2C%20Bozeman%2C%20MT%2059715!5e1!3m2!1sen!2sus!4v1684635341189!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.lbp_map}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Visit;
