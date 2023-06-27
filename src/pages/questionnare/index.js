import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import Hero from "../../assets/serviceH.png";
import main from "../../assets/question.png";
import back from "../../assets/back.png";
import Link from "next/link";
import Search from "../services/search";

export default function () {
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <div>
          <div className="flex justify-center mt-6">
            <Image src={Hero} width="1296" height="369" alt="hero"></Image>
          </div>
          <div className="flex justify-center flex-col -mt-72 mb-48">
            <div className="mx-auto mb-10">
              <p className="font-bold text-5xl text center text-white">
                How Can We Help?
              </p>
            </div>
            <div className="mx-auto">
              <Search />
            </div>
          </div>
        </div>
        <div className="w-[1296px] h-[1494px] mx-auto mt-14">
          <Image src={main} alt="img" width="1296" height="1494" />
        </div>
        <div className="w-[93px] h-[33px] mx-auto mt-14">
          <Link href="/services">
            <Image src={back} alt="img" width="93" height="33" />
          </Link>
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
    </div>
  );
}
