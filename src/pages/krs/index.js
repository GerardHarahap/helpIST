"use client";
import React from "react";
import Navbar from "../navbar";
import krsH from "../../assets/krsH.png";
import faq from "../../assets/faq.png";
import inf from "../../assets/inf.png";
import Image from "next/image";
import Footer from "../footer";

export default function () {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container">
        <div className="w-[1296px] h-[543px] mx-auto mt-8">
          <Image src={krsH} width="1296" height="543" alt="Hero" />
        </div>

        <div className="w-[1119px] h-[847px] mx-auto mt-36">
          <Image src={faq} width="1119" height="847" alt="faq" />
        </div>

        <div className="w-[1128px] h-[551px] mx-auto mt-60">
          <Image src={inf} width="1128p" height="551" alt="information" />
        </div>

        <div className="mx- flex flex-col justify-center mt-32">
          <p className="text-[#1E2A56] font-extrabold text-6xl text-center">
            Any Questions?
          </p>
          <button className="mx-auto font-bold bg-[#0046A5] w-[348px] h-[85px] text-white text-4xl rounded-xl mt-14">
            Click Here
          </button>
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
    </div>
  );
}
