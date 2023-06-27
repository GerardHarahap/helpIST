"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import hero from "../../assets/beasiswah.png";
import img from "../../assets/beasiswa.png";
import side1 from "../../assets/side 1.png";
import side2 from "../../assets/side 2.png";
import side3 from "../../assets/side 3.png";
import side4 from "../../assets/side 4.png";

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
              <span className="font-bold">
                Gedung Kemahasiswaan UIN Jakarta
              </span>
              {"  "}tahun akademik 2022/2023 menyediakan sejumlah beasiswa
              pendidikan bagi mahasiswa. Beasiswa diberikan kepada para
              mahasiswa program S1 dan S2 yang masih aktif. Kepala Subbagian
              Kesejahteraan Mahasiswa Rosmayenni mengatakan, beasiswa yang
              diberikan berasal dari pemerintah dan swasta, lembaga dan
              perseorangan. “Besaran angka beasiswanya bervariasi. Ada yang full
              semester tapi ada juga sekali bantuan,” katanya di Gedung
              Kemahasiswaan, Selasa (24/5/2022).
            </p>

            <p className="text-justify font-bold mt-7">
              Berikut adalah beberapa beasiswa yang ditawarkan di UIN Jakarta
              dari sejumlah lembaga dan perseorangan
            </p>
            <p className="text-justify mt-7">
              Pertama, beasiswa Badan Layanan Umum (BLU) UIN Jakarta. Beasiswa
              diberikan kepada para mahasiswa yang mendaftar ke Fakultas Adab
              dan Humaniora, Fakultas Ushuluddin, Fakultas Syari’ah dan Hukum,
              dan Fakultas Dirasat Islamiyah. Syarat calon penerima beasiswa
              adalah lulus seleksi Ujian Mandiri dan hanya mendaftar di beberapa
              program studi tertentu di masing-masing fakultas.
            </p>
            <p className="text-justify mt-7">
              Kedua, beasiswa Kartu Indonesia Pintar atau KIP Kuliah. Beasiswa
              diberikan kepada mahasiswa yang memiliki salah satu kartu program
              bantuan nasional, seperti Kartu Indonesia Pintar (KIP), Kartu
              Jakarta Pintar (KJP), dan Kartu Keluarga Sejahtera (KKS) Program
              Keluarga Harapan (PKH). Penerima beasiswa (KIP Kuliah) lain adalah
              mahasiswa angkatan 2022 yang orang tua/walinya meninggal dunia
              atau mengalami pemutusan hubungan kerja (PHK) karena terdampak
              Covid-19 serta mahasiswa yang memiliki prestasi akademik dengan
              uang kuliah tunggal (UKT) level 1, 2, dan 3. “Mulai tahun ini
              calon penerima program beasiswa tersebut ditambah untuk para
              penyandang disabilitas. Beasiswa ini tidak mensyaratkan adanya
              level UKT 1-3 tapi semua level UKT,” kata Rosmayenni. Dia
              menambahkan, beasiswa pemegang KIP Kuliah di UIN Jakarta tersedia
              kuota sebanyak 500 mahasiswa. Kuota tersebar di 12 fakultas dan
              dengan angka kuota bervariasi di masing-masing program studi.
            </p>

            <p className="text-justify mt-7">
              Ketiga, Beasiswa Kartu Jakarta Mahasiswa Unggul (KJMU). Beasiswa
              diberikan kepada mahasiswa yang memiliki Kartu Jakarta Pintar
              (KJP) dan terdaftar di Data Terpadu Kesejahteraan Sosial
              Kementerian Sosial.
            </p>
            <p className="text-justify mt-7">
              Keempat, Beasiswa Yayasan Beasiswa Jakarta (YBJ). Beasiswa
              diberikan kepada mahasiswa penduduk DKI Jakarta yang dibuktikan
              dengan Kartu Tanda Penduduk (KTP) dan Kartu Keluarga (KK) serta
              kuliah di perguruan tinggi di wilayah DKI Jakarta, termasuk UIN
              Jakarta.
            </p>
            <p className="text-justify mt-7">
              Kelima, Beasiswa Karya Salemba Empat (KSE). Beasiswa diberikan
              kepada mahasiswa yang belum menikah dan tidak sedang menerima
              beasiswa dari lembaga lain. Kelima, Beasiswa Badan Amil Zakat
              Nasional (Baznas). Beasiswa diberikan kepada mahasiswa aktif yang
              duduk di semester V dan memiliki IPK minimal 3,00.
            </p>
            <p className="text-justify mt-7">
              Keenam, Beasiswa Djarum Beasiswa Plus Djarum Foundation. Besiswa
              diberikan kepada mahasiswa yang sedang menempuh pendidikan di
              semester IV dengan nilai IPK minimun 3,20 di semester III dan
              dapat mempertahankannya di semester IV. Kemudian aktif
              berorganisasi, baik di dalam maupun di luar kampus.
            </p>
            <p className="text-justify mt-7">
              Ketujuh, Beasiswa Prestasi Social Trust Fund (STF) UIN Jakarta.
              Beasiswa diberikan kepada mahasiswa semester 2-7 yang kurang mampu
              namun berprestasi dengan nilai IPK 3,20, aktif dalam organisasi,
              dan memiliki prestasi non-akademik.
            </p>
            <p className="text-justify mt-7">
              Kedelapan, Beasiswa Profesor Azyumard Azra Scholarship. Beasiswa
              diberikan kepada mahasiswa Program Studi Magister Sejarah atau
              mahasiswa di program studi lain (Konsentrasi Sejarah) dan sedang
              melakukan penelitian untuk penulisan tesis.
            </p>
            <p className="text-justify mt-7">
              Kesembilan, Beasiswa Profesor Nabilah Lubis Scholarship. Beasiswa
              diberikan kepada mahasiswa program S1 dan S2 yang sedang kuliah di
              Program Studi Bahasa dan Sastra Arab di UIN Jakarta. Beasiswa ini
              bertujuan untuk mendukung kajian Bahasa Arab serta memperkuat
              kajian Islam dan peradaban. (ns)
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
