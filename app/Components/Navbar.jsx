"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logoOriginalNoBg.png";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const sideNavVariant = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        type: "linear",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.5,
        type: "linear",
        when: "afterChildren",
      },
    },
  };

  const childVariants = {
    initial: {
      y: "10%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "linear",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "linear",
      },
    },
  };

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <Link href={"/"}>
          <Image src={logo} alt="LBP Logo" width={75} height={75} />
        </Link>
      </div>
      <div>
        <ul className="nav-links_container nav-menuHidden">
          <li className="nav-link">
            <Link href={"/beers"}>Our Beers</Link>
          </li>
          <li className="nav-link">
            <Link href={"/events"}>Events</Link>
          </li>
          <li
            className="nav-link"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            LPB
            <AiFillCaretDown />
            <div
              className={`nav-link ${
                showDropdown
                  ? "nav-link__dropdown"
                  : "nav-link__hidden-dropdown"
              }`}
              onClick={() => setShowDropdown(false)}
            >
              <div>
                <Link href={"lbp/story"}>Our Story</Link>
              </div>
              <div>
                <Link href={"lbp/team"}>Meet the Crew</Link>
              </div>
              <div>
                <Link href={"lbp/faq"}>FAQ</Link>
              </div>
            </div>
          </li>
          <li className="nav-link">
            <Link href={"/contact"}>Get In Touch</Link>
          </li>
        </ul>
        <AnimatePresence>
          {navOpen && (
            <motion.ul
              variants={sideNavVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="nav-links_container nav-menuCollapse"
            >
              <motion.li variants={childVariants} className="nav-link">
                <Link href={"/beers"}>Our Beers</Link>
              </motion.li>
              <motion.li variants={childVariants} className="nav-link">
                <Link href={"/events"}>Events</Link>
              </motion.li>
              <motion.li
                variants={childVariants}
                className="nav-link"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                LPB
                <AiFillCaretDown />
                <div
                  className={`nav-link ${
                    showDropdown
                      ? "nav-link__dropdown"
                      : "nav-link__hidden-dropdown"
                  }`}
                  onClick={() => setShowDropdown(false)}
                >
                  <div>
                    <Link href={"lbp/story"}>Our Story</Link>
                  </div>
                  <div>
                    <Link href={"lbp/team"}>Meet the Crew</Link>
                  </div>
                  <div>
                    <Link href={"lbp/faq"}>FAQ</Link>
                  </div>
                </div>
              </motion.li>
              <motion.li variants={childVariants} className="nav-link">
                <Link href={"/contact"}>Get In Touch</Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="nav-iconContainer">
          <IoMdMenu className="nav-icon" onClick={() => setNavOpen(true)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
