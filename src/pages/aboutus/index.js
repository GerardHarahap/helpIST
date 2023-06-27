"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import hero from "../../assets/heroabout.png";
import main from "../../assets/mainabout.png";

export default function page() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white mb-80">
        <div className="w-[1272px] mx-auto mt-10 mb-48 bg-white">
          <p className="font-bold text-9xl text-[#1E2A56] text-center">
            This is HelpISt
          </p>
          <p className="text-2xl text-justify mt-9">
            HelpISt is an information systems student digital service that
            provides various information related to student needs. HelpISt
            provides services to answer problems and provide solutions related
            to complaints experienced by students, study plan cards, acceptance
            of aspirations and also disseminate information related to
            scholarships, contest info and news.
          </p>
        </div>
        <div className="w-[1536px] h-[984px] mb-16">
          <Image src={hero} width="1536" height="984" alt="Hero Image" />
        </div>
        <div className="w-[1536px] h-[3330px] bg-white">
          <Image src={main} width="1536" height="3330" alt="Main Image" />
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
    </div>
  );
}
