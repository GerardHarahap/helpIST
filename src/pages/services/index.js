"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import Hero from "../../assets/serviceH.png";
import nid from "../../assets/nid.png";
import fan from "../../assets/fan.png";
import asp from "../../assets/aspiration.png";
import krs from "../../assets/krs.png";
import Link from "next/link";
import Search from "./search";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Services() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const buka = () => {
    setOpen(true);
  };
  return (
    <div className="bg-white">
      <Navbar />
      <div className="">
        <div className="">
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
        <div className="w-[1296px] mx-auto mt-7">
          <p className="text-[#1E2A56] font-bold text-xl">
            RESEARCH QUESTIONNER
          </p>
          <div className="border rounded-xl flex p-4 mt-7">
            <div className="w-[100px]">
              <Image src={nid} alt="img" height="80" width="80" />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <p className="text-[#1E2A56]">Anida Frida Maharani Putri</p>
                <p className="text-[#848484] text-sm underline ml-9">
                  anida.putri20@mhs.uinjkt.ac.id
                </p>
              </div>
              <p className="font-semibold text-[#05130A] mt-2">
                Analisis Kepuasan Pengguna dan Continuance Use Intention pada
                Aplikasi E-commerce menggunakan Expectation Confirmation Model
              </p>
              <p className="text-[#05130A] mt-2">
                Perkenalkan, saya Anida Frida, Mahasiswi S1 Program Studi Sistem
                Informasi Fakultas Sains dan Teknologi UIN Syarif Hidayatullah
                Jakarta yang sedang melakukan penelitian untuk menyelesaikan
                tugas akhir/skripsi dan membutuhkan responden dengan kriteria..
                .
              </p>
              <div className="flex mt-6">
                <p className="text-xs text-[#848484]">25 April 2023</p>
                <p className="text-xs text-[#848484] ml-14">8 min read</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1296px] mx-auto mt-7">
          <div className="border rounded-xl flex p-4 mt-7">
            <div className="w-[100px]">
              <Image src={fan} alt="img" height="80" width="80" />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <p className="text-[#1E2A56]">Muhammad Irfan Bahtiar</p>
                <p className="text-[#848484] text-sm underline ml-9">
                  Irfan Bahtiar20@mhs.uinjkt.ac.id
                </p>
              </div>
              <p className="font-semibold text-[#05130A] mt-2">
                Analisis Tingkat Kesuksesan Implementasi Layanan E-Letter
                Fakutas Sains dan Teknologi Menggunakan Model Delone & MClean
              </p>
              <p className="text-[#05130A] mt-2">
                Perkenalkan, saya Muhammad Irfan Bahtiar, Mahasiswa Sistem
                Informasi 2020, Fakultas Sains dan Teknologi, UIN Syarif
                Hidayatullah Jakarta. Saat ini saya sedang melakukan penelitian
                skripsi dan membutuhkan responden dari teman-teman...
              </p>
              <div className="flex mt-6">
                <p className="text-xs text-[#848484]">22 April 2023</p>
                <p className="text-xs text-[#848484] ml-14">25 min read</p>
              </div>
            </div>
          </div>
          <div className="flex items-end mt-16 relative">
            <p className="text-[#848484] text-sm mx-auto">
              <Link href="/questionnare">Tap for more</Link>
            </p>
            <button
              onClick={buka}
              className="bg-[#0046A5] text-white text-xl p-1 w-[150px] rounded-md right-0 absolute"
            >
              <span className="ml-3">Publish</span>
              <span className="text-3xl mx-3">+</span>
            </button>
          </div>
        </div>

        <div className="mx-auto w-[1123px] mt-28 cursor-pointer">
          <a href="https://bit.ly/Wadah-AspiraSI">
            <Image src={asp} alt="aspiration" width="1123" height="256" />
          </a>
        </div>

        <div className="mx-auto w-[1191px] mt-40 cursor-pointer">
          <Link href="krsservices">
            <Image src={krs} alt="krs" width="1191" height="355" />
          </Link>
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[835px] sm:max-h-[1000px]">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start sm:flex-col">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ms-auto mx-0 ">
                        <button
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                          cursor-pointer
                        >
                          <Image
                            src="/closed.svg"
                            width={15}
                            height={15}
                            alt="close"
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className=" -mt-10 mx-auto w-[740px]">
                        <div className=" flex justify-center pt-4 flex-col">
                          <p className="font-semibold text-2xl">
                            Submit Your Questionner
                          </p>
                          <p className="mt-3">
                            HelpISt will help distribute your research
                            questionnaire if you need respondents
                          </p>
                        </div>
                        <div className="h-[450px] mt-5">
                          <input
                            id="123"
                            className="w-full h-full border border-gray-300 rounded-lg p-6"
                            placeholder="enter your research"
                          ></input>
                        </div>
                        <div className="flex justify-end mb-2">
                          <button
                            onClick={() => setOpen(false)}
                            className="w-[150px] h-[40px] bg-[#0046A4] mt-5 text-white rounded-xl"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
