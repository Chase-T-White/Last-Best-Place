import React from "react";
import Image from "next/image";
import building from "/public/images/home/visit/visit1.jpg";
import inside from "/public/images/home/visit/visit2.jpg";

const Visit = () => {
  return (
    <section className={styles.visit_section}>
      <div className="visit_img_block">
        <div className="block_img_container">
          <Image
            src={building}
            alt="Street view of Last Best Place Brewery"
            fill
          />
        </div>
        <div className="block_img_container">
          <Image
            src={inside}
            alt="Inside taproom view of Last Best Place Brewery"
            fill
          />
        </div>
      </div>
      <div className="visit_content">
        <div className="visit_address">
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
        <div className="visit_hours">
          <h5>Hours</h5>
          <p>
            <strong>Sunday-Saturday</strong>
            <br />
            12:00pm - 8:00pm
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visit;
