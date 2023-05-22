import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <article>
        <h2>
          Have a Question?
          <br />
          Check out our <Link href="#">FAQs</Link>
          <br />
          or
          <br />
          drop us a line and we'll get back to you asap!{" "}
        </h2>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="text" />
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
        </form>
      </article>
      <article>
        <h2>Come find us in midtown Bozeman</h2>
        <h5>605 N 7th Ave, Suite 101, Bozeman, MT 59715</h5>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.995734029014!2d-111.05148810809163!3d45.68576924406423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345444ed116c889%3A0xfe21aa8fbbb930bd!2s605%20N%207th%20Ave%20%23101%2C%20Bozeman%2C%20MT%2059715!5e1!3m2!1sen!2sus!4v1684635341189!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default page;
