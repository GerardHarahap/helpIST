"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import hero from "../../assets/infh.png";
import satu from "../../assets/inf1.png";
import dua from "../../assets/inf2.png";
import tiga from "../../assets/inf3.png";
import ber from "../../assets/infb.png";
import lom from "../../assets/infl.png";
import bea from "../../assets/infbea.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ber1 from "../../assets/berita1.png";
import ber2 from "../../assets/berita2.png";
import ber3 from "../../assets/berita3.png";
import ber4 from "../../assets/berita4.png";
import lom1 from "../../assets/lomba1.png";
import lom2 from "../../assets/lomba2.png";
import lom3 from "../../assets/lomba3.png";
import lom4 from "../../assets/lomba4.png";
import bea1 from "../../assets/beasiswa1.png";
import bea2 from "../../assets/beasiswa2.png";
import bea3 from "../../assets/beasiswa3.png";
import bea4 from "../../assets/beasiswa4.png";
import Image from "next/image";
import Link from "next/link";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";

function App() {
  const [progressWidth, setProgressWidth] = useState(20);

  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <NextIcon />,
    prevArrow: <PrevIcon />,
    afterChange: (index) => {
      setProgressWidth((100 / 5) * (index + 1));
    },
  };
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <div className="w-[1536px] h-[835px]">
          <Image src={hero} alt="hero" width="1536" height="835" />
        </div>

        <div className="flex justify-around mt-10">
          <div>
            <div>
              <div className="w-[900px]">
                <Image src={ber} alt="img" width="900" height="70" />
              </div>
              <div className="App p-10 w-[900px] mx-auto my-auto">
                <Slider {...settings}>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Link href="/berita">
                      <Image src={ber1} alt="img" width="287" height="340" />
                    </Link>
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={ber2} alt="img" width="287" height="340" />
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={ber3} alt="img" width="287" height="340" />
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={ber4} alt="img" width="287" height="340" />
                  </div>
                </Slider>
                <div className="progress">
                  <div
                    style={{ width: `${progressWidth}%` }}
                    className="progress--fill"
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[900px]">
                <Image src={lom} alt="img" width="900" height="70" />
              </div>
              <div className="App p-10 w-[900px] mx-auto my-auto">
                <Slider {...settings}>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={lom1} alt="img" width="287" height="340" />
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Link href="/lomba">
                      <Image src={lom2} alt="img" width="287" height="340" />
                    </Link>
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={lom3} alt="img" width="287" height="340" />
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={lom4} alt="img" width="287" height="340" />
                  </div>
                </Slider>
                <div className="progress">
                  <div
                    style={{ width: `${progressWidth}%` }}
                    className="progress--fill"
                  ></div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[900px]">
                <Image src={bea} alt="img" width="900" height="70" />
              </div>
              <div className="App p-10 w-[900px] mx-auto my-auto">
                <Slider {...settings}>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={bea1} alt="img" width="287" height="340" />
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={bea2} alt="img" width="287" height="340" />
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Link href="/beasiswa">
                      <Image src={bea3} alt="img" width="287" height="340" />
                    </Link>
                  </div>
                  <div className="w-[287px] h-[340px] pr-3">
                    <Image src={bea4} alt="img" width="287" height="340" />
                  </div>
                </Slider>
                <div className="progress">
                  <div
                    style={{ width: `${progressWidth}%` }}
                    className="progress--fill"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[360px] ">
            <div className="w-[360px] ">
              <Image src={satu} alt="img" width="360" height="70" />
            </div>
            <div className="w-[360px] mt-4">
              <Image src={tiga} alt="img" width="360" height="70" />
            </div>
            <div className="w-[360px] mt-4">
              <Image src={dua} alt="img" width="360" height="820" />
            </div>
          </div>
        </div>
        <div className="bg-[#0046A4] h-[350px] px-40 flex flex-col justify-center align-middle">
          <p className="font-bold text-5xl text-center text-white">
            Kanal Video Sistem Informasi
          </p>
          <p className="text-xl- text-center text-white mt-7">
            Selalu ada informasi dan hal menarik yang terjadi, baik itu berasal
            dari dalam kampus, dosen, mahasiswa, staff ataupun alumni yang kami
            tampilkan pada video dibawah ini:
          </p>
          <button className="bg-white text-2xl w-[215px] h-[50px] text-[#0046A4] mx-auto rounded-2xl mt-12">
            <a href="https://www.youtube.com/@himsiuinjakartaofficial2114/featured">
              Click Here ▶
            </a>
          </button>
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
    </div>
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

export default App;
