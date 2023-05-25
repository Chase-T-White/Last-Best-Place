"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logoOriginalNoBg.png";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="main-nav">
      <div className="nav-logo">
        <Link href={"/"}>
          <Image src={logo} alt="LBP Logo" width={75} height={75} />
        </Link>
      </div>
      <div>
        <ul className="nav-links_container">
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
      </div>
    </nav>
  );
};

export default Navbar;
