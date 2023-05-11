import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logoOriginalNoBg.png";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
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
        <li className="nav-link nav-dropdown">
          LPB
          <AiFillCaretDown />
          <div className="nav-link__dropdown">
            <Link href={"lpb/story"}>Our Story</Link>
            <Link href={"lpb/team"}>Meet the Crew</Link>
            <Link href={"lpb/faq"}>FAQ</Link>
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
