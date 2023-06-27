"use client";

import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import hero from "../../assets/lombah.png";
import img from "../../assets/lomba.png";
import side1 from "../../assets/side 1.png";
import side2 from "../../assets/side 2.png";
import side3 from "../../assets/side 3.png";
import side4 from "../../assets/side 4.png";
import Footer from "../footer";

export default function page() {
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <div className="w-[1536px] h-[519px]">
          <Image src={hero} alt="hero" width="1536" height="519" />
        </div>
        <div className="flex justify-around">
          <div className="w-[848px] ">
            <Image src={img} alt="img" width="848" height="597" />

            <p className="text-justify mt-7">
              Kegiatan{"  "}
              <span className="font-bold">
                Business Plan Competition Kopma dr. Angka ITS 2023
              </span>
              merupakan sebuah acara yang disajikan dalam bentuk perlombaan
              penyusunan proposal dan video rencana wirausaha. Kegiatan ini
              dilakukan dengan harapan adanya ide-ide baru terkait teknologi
              yang jika diimplementasikan dapat menjadi sebuah bisnis yang
              menarik.Lomba Bisnis Plan Kopma dr. Angka ITS 2023 merupakan lomba
              yang terbuka untuk Mahasiswa aktif dibuktikan dengan Scan KTM
              (Kartu Tanda Mahasiswa). Pendaftaran dibuka hingga tanggal 27 Mei
              2023. Oleh karena itu, jangan sampai ketinggalan ya!
            </p>
            <p className="text-justify mt-1">
              Business Plan Competition Kopma dr. Angka ITS 2023
            </p>

            <p className="text-justify font-bold mt-7">Tema dan Subtema</p>
            <p className="text-justify mt-1">
              Tema: "Innovative Technology Solutions for a Better Future" dengan
              subtema:
            </p>
            <ul className="list-disc mt-1 ml-9">
              <li>
                Revolutionizing Financial Technology for Better Financial
                Inclusion
              </li>
              <li>Technology-Enabled Education for Lifelong Learning</li>
              <li>Innovative Solutions for Sustainable Food and Beverages</li>
              <li>Creative Industry Transformation through Technology</li>
              <li>Technology for Environmental Sustainability</li>
              <li>Digital Marketing Solutions for The New Age</li>
            </ul>

            <p className="text-justify font-bold mt-2">Timeline</p>
            <ul className="list-disc mt-1 ml-9">
              <li>Pendaftaran gelombang 1: 8-20 Mei 2023</li>
              <li>Pendaftaran geleombang 2: 21-27 Mei 2023</li>
              <li>TM: 28 Mei 2023</li>
              <li>Batas pengumpulan proposal dan video BPC: 8 Juni 2023</li>
              <li>Pengumuman finalis: 13 Juni 2023</li>
              <li>Presentasi dan pengumuman pemenang: 17 Juni 2023</li>
            </ul>

            <p className="text-justify font-bold mt-7">Ketentuan Pendaftaran</p>
            <p className="text-justify mt-1">
              1) Pendaftaran proposal Business Plan dikenai biaya sebesar Rp
              75.000 untuk gelombang pertama dan Rp. 85.000 untuk gelombang
              kedua2) Pendaftaran kegiatan ini bisa dilakukan secara online pada
              link yang telah disediakan3) Apabila peserta mengalami
              permasalahan dalam pendaftaran dapat mengkonfirmasikan kembali
              kepada panitia dengan menghubungi contact person yang telah
              ditunjuk.4) Peserta wajib mengupload twibbon yang dapat diunduh di
              link: dan menggunakan caption yang telah ditentukan. Peserta juga
              wajib follow akun Instagram @diesnatkopma_its dan @kopma_its.
              Twibbon dapat diakses di link : https://intip.in/TwibbonBPC5)
              Peserta wajib repost poster lomba di SG dan tag akun Instagram
              @diesnatkopma_its dan @kopma_its6) Pengiriman proposal dan/atau
              video yang melewati batas waktu yang ditentukan akan ditolak dan
              dianggap gugur.
            </p>

            <p className="text-justify font-bold mt-2">Biaya Pendaftaran</p>
            <ul className="list-disc mt-1 ml-9">
              <li>Gelombang 1 = 75K</li>
              <li>Gelombang 2 = 85K</li>
            </ul>
            <p className="text-justify font-bold mt-2">Hadiah</p>
            <ul className="list-disc mt-1 ml-9">
              <li>Juara I : Rp 2.000.000 + piala + sertifikat</li>
              <li>Juara II : Rp 1.500.000 + piala + sertifikat</li>
              <li>Juara III : Rp 1.000.000 + piala + sertifikat</li>
              <li>Juara Best Teamwork : Rp 200.000 + sertifikat</li>
            </ul>
            <p className="text-justify font-bold mt-2">Link Penting</p>
            <ul className="list-disc mt-1 ml-9">
              <li>Pendaftaran : intip.in/PendaftaranBPCDiesnatKopmaITS</li>
              <li>Panduan : intip.in/GuidebookBPCDiesnatKopmaITS</li>
            </ul>
            <p className="text-justify font-bold mt-2">Narahubung</p>
            <ul className="list-disc mt-1 ml-9">
              <li>085784300564 (Arindah)</li>
              <li>082245621115 (Ugga)</li>
            </ul>
            <p className="text-justify mt-2">
              Mungkin itu saja informasi tentang Business Plan Competition Kopma
              dr. Angka ITS 2023. Silahkan bagikan artikel ini ke teman-teman
              anda sehingga bisa memberikan kebermanfaatan bagi lebih banyak
              orang lagi. Silahkan klik jadwal lomba 2023 untuk mendapatkan
              update lomba 2023 terbaru yang kami kategorikan berdasarkan
              deadline (bulan).
            </p>
          </div>
          <div className="w-[452px]">
            <div className="">
              <Image src={side1} alt="sideImg" width={452} />
            </div>
            <div className="mt-7">
              <Image src={side2} alt="sideImg" width={452} />
            </div>
            <div className="mt-7">
              <Image src={side3} alt="sideImg" width={452} />
            </div>
            <div className="mt-7">
              <Image src={side4} alt="sideImg" width={452} />
            </div>
          </div>
        </div>
      </div>
      <div id="down">
        <Footer />
      </div>
    </div>
  );
}
