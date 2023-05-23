import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import PageHeader from "../Components/PageHeader";
import headerImg from "/public/images/lbp/contactHeader.jpg";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";

const page = () => {
  return (
    <section>
      <PageHeader heading={"Contact Us"} img={headerImg} />
      <div className="page-wrapper">
        <article className={styles.contact_article}>
          <h2 className="center">Have a Question?</h2>
          <div className={styles.contact_form_container}>
            <div className={styles.contact_text_container}>
              <p>
                We would love to hear from you! We may have already answered
                your question. Check out our <Link href="#">FAQs.</Link>
                <br />
                <strong>(406) 266-2913</strong>
              </p>
              <div className={styles.visit_icons_container}>
                <Link
                  href="https://www.facebook.com/LBPbrewing/"
                  target="_blank"
                >
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
            <form action="" className={styles.contact_form}>
              <div>
                <div>
                  <label htmlFor="first">First Name</label>
                  <input type="text" name="first" id="text" />
                </div>
                <div>
                  <label htmlFor="last">Last Name</label>
                  <input type="text" name="last" id="text" />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="comment">Comment</label>
                <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </article>
        <article className={styles.contact_article}>
          <h2 className="center">Come find us in midtown Bozeman</h2>
          <h5 className="center">
            605 N 7th Ave, Suite 101, Bozeman, MT 59715
          </h5>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.995734029014!2d-111.05148810809163!3d45.68576924406423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345444ed116c889%3A0xfe21aa8fbbb930bd!2s605%20N%207th%20Ave%20%23101%2C%20Bozeman%2C%20MT%2059715!5e1!3m2!1sen!2sus!4v1684635341189!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.contact_map}
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  );
};

export default page;
