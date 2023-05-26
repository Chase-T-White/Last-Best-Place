"use client";

import { useState, useEffect } from "react";
import styles from "../lbp.module.css";
import Loading from "@/app/Components/Loading";
import PageHeader from "@/app/Components/PageHeader";
import headerImg from "/public/images/lbp/faqHeader.jpg";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedID, setSelectedID] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch("/api/faq");
      const data = await res.json();
      setFaqs(data);
      setIsLoading(false);
    };

    fetchFaqs();
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <PageHeader heading={"FAQs"} img={headerImg} />
      <article className={styles.faqs_contentContainer}>
        <div className="page-wrapper">
          <h4>
            <strong>
              We all have questons.
              <br />
              Here are some answers to our frequently asked questions.
            </strong>
          </h4>
          <div>
            {faqs.map((faq) => {
              return (
                <div
                  key={faq.id}
                  className={styles.faq_container}
                  onClick={() => {
                    if (selectedID === faq.id) {
                      setShowAnswer(!showAnswer);
                    } else {
                      setSelectedID(faq.id);
                      setShowAnswer(true);
                    }
                  }}
                >
                  <header className={styles.faq_questionContainer}>
                    <h5>{faq.question}</h5>
                    {selectedID === faq.id && showAnswer ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )}
                  </header>
                  <AnimatePresence>
                    {selectedID === faq.id && showAnswer && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.5 }}
                        className={styles.faq_answerContainer}
                      >
                        <p>{faq.answer}</p>
                        {faq.withPicture && (
                          <div className={styles.faq_imgContainer}>
                            <Image src={faq.image} alt="picture" fill />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
