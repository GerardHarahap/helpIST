"use client";
import Image from "next/image";
import Navbar from "./navbar";
import Hero from "../assets/HERO IMG.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import Footer from "./footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="bg-white">
        <Navbar />
        <div className="bg-[#0046A4] flex p-5 h-[620px]  justify-around rounded-br-[200px]">
          <div className="ml-10 overflow-hidden rounded-xl ">
            <Image
              className=""
              src={Hero}
              width="676"
              height="597"
              alt="Hero Image"
            />
          </div>
          <div className="w-1/2 text-white justify-center items-center content-center mx-auto p-8 text-justify ">
            <p className="font-semibold text-5xl mb-16 ml-5">HelpISt</p>
            <p className="text-2xl ml-5">
              HelpISt is an information systems student digital service that
              provides various information related to student needs. HelpISt
              provides services to answer problems and provide solutions related
              to complaints experienced by students, study plan cards,
              acceptance of aspirations and also disseminate information related
              to scholarships, contest info and news.
            </p>
          </div>
        </div>

        <div className="w-1/2 mx-auto mt-28">
          <p className="font-semibold text-5xl text-center mb-11">Vision</p>
          <p className="text-2xl text-center">
            Menjadi program studi yang unggul dan terkemuka dalam menghasilkan
            profesional bidang SI yang menjiwai nilai dan etika keislaman, dan
            ke-Indonesiaan
          </p>
        </div>

        <div className="w-[1245px] h-[756px] mx-auto mt-20">
          <Image src={home1} alt="img" width="1245" height="756" />
        </div>
        <div className="w-[1261px] h-[627px] mx-auto mt-36">
          <Image src={home2} alt="img" height="627" width="1261" />
        </div>
        <Footer />
      </div>
    </>
  );
}

const PrevIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--left ">
      <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
    </div>
  );
};

const NextIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--right">
      <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
    </div>
  );
};
