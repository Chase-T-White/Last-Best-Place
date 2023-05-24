"use client";

import { useState } from "react";
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
      <ul className="nav-links_container">
        <li className="nav-link">
          <Link href={"/beers"}>Our Beers</Link>
        </li>
        <li className="nav-link">
          <Link href={"/events"}>Events</Link>
        </li>
        <li
          className="nav-link nav-dropdown"
          onFocus={() => setShowDropdown(true)}
        >
          LPB
          <AiFillCaretDown />
          <div className="nav-link__dropdown">
            <div>
              <Link href={"lpb/story"}>Our Story</Link>
            </div>
            <div>
              <Link href={"lpb/team"}>Meet the Crew</Link>
            </div>
            <div>
              <Link href={"lpb/faq"}>FAQ</Link>
            </div>
          </div>
        </li>
        <li className="nav-link">
          <Link href={"/contact"}>Get In Touch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
