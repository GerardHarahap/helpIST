"use client";
import React from "react";
import Image from "next/image";
import footer from "../assets/footer.png";

export default function Footer() {
  return (
    <div className="bg-white pb-10 mt-24">
      <hr className="my-20" />
      <div className="w-[1129px] h-[320px] mx-auto mb-14">
        <Image src={footer} alt="img" width="1129" height="320" />
      </div>
    </div>
  );
}
