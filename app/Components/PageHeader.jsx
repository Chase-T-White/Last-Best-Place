import React from "react";
import Image from "next/image";

const PageHeader = ({ heading, img }) => {
  return (
    <header className="pageHeader">
      <h2>{heading}</h2>
      <div>
        <Image src={img} alt="Beer taps" fill />
      </div>
    </header>
  );
};

export default PageHeader;
