"use client";

import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import hero from "../../assets/krsservice.png";
import img from "../../assets/krss.png";
import Accordion from "./accordion.js";
import Footer from "../footer";

const data = [
  {
    header:
      "Analisis Tingkat Kesuksesan Implementasi Layanan E-Letter Fakutas Sains dan  Teknologi Menggunakan Model Delone",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
  },
  {
    header:
      "Analisis Tingkat Kesuksesan Implementasi Layanan E-Letter Fakutas Sains dan  Teknologi Menggunakan Model Delone",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
  },
  {
    header:
      "Analisis Tingkat Kesuksesan Implementasi Layanan E-Letter Fakutas Sains dan  Teknologi Menggunakan Model Delone",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
  },
  {
    header:
      "Analisis Tingkat Kesuksesan Implementasi Layanan E-Letter Fakutas Sains dan  Teknologi Menggunakan Model Delone",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
  },
  {
    header:
      "Analisis Tingkat Kesuksesan Implementasi Layanan E-Letter Fakutas Sains dan  Teknologi Menggunakan Model Delone",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus eligendi earum, neque, nobis asperiores quos obcaecati dignissimos quidem facere a quis distinctio. Cumque eligendi commodi ad nostrum nam unde deserunt amet eum vel, necessitatibus placeat hic, quos autem, quia itaque inventore. Impedit sit mollitia tenetur, enim pariatur recusandae rem?",
  },
];

export default function page() {
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <div className="w-[1296px] h-[543px] mx-auto mt-10">
          <Image src={hero} alt="hero" width="1296" height="543" />
        </div>
        <div className="accordion-container w-[1280px] mx-auto mt-24">
          <p className="text-center font-bold text-5xl text-[#1E2A56] mb-10">
            Frequently Asked Questions
          </p>
          <Accordion data={data} />
        </div>
        <div className="w-[1128px] h-[551px] mx-auto mt-36">
          <Image src={img} alt="image" width="1128" height="551" />
        </div>
        <div className="flex justify-center flex-col">
          <p className="text-center font-bold text-6xl text-[#1E2A56] mt-36">
            Any Questions?
          </p>
          <button className="w-[348px] h-[112px] bg-[#0046A5] text-white font-bold text-4xl mx-auto rounded-2xl mt-10">
            <a href="https://wa.me/6285333263645">Click Here</a>
          </button>
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
    </div>
  );
}
