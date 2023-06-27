"use client";

import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";
import hero from "../../assets/beritah.png";
import img from "../../assets/berita.png";
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
                UNIVERSITAS Islam Negeri (UIN) Syarif Hidayatullah Jakarta
              </span>
              {"  "}akan memasuki usia ke-66 pada 1 Juni mendatang. Perguruan
              tinggi keagamaan Islam negeri yang berdiri dengan nama awal
              Akademi Dinas Ilmu Agama (ADIA) itu memiliki sejarah dan rekam
              jejak panjang dalam khazanah dunia pendidikan Indonesia. Alumninya
              pun memiliki peran dan kontribusi signifikan di berbagai sektor
              dan bidang. Pun ada banyak tokoh dan intelegensia dari UIN Jakarta
              berkaliber nasional hingga memiliki nama mendunia. Reputasi UIN
              Jakarta pun diakui oleh berbagai kalangan baik di level nasional
              maupun di kancah internasional. Karena itu, setiap Rektor yang
              memimpin UIN Jakarta memikul “tugas akbar”, yakni haruslah tetap
              mempertahankan rekognisi nasional dan global, serta terus
              mengembangkan dan memperkokoh kualitas, peran, dan kontribusi
              civitas akademika dan alumni UIN Jakarta. Jumat (17/3) sore, tim
              KORAN SINDO berkesempatan mewawancarai Prof. Asep Saepudin Jahar,
              M.A. Ph.D., Rektor UIN Jakarta masa bakti 2023-2027 (Rektor
              ke-14). Alumnus Pondok Modern Darussalam Gontor, Ponorogo itu
              resmi menjabat per 1 Maret 2023 setelah dilantik oleh Menteri
              Agama Yaqut Cholil Qoumas. Asep yang juga lulusan Universitas
              McGill, Kanada dan Universitas Leipzig, Jerman.
            </p>
            <p className="text-justify mt-7">
              Ihwal utama yang menjadi penekanan mantan Dekan Fakultas Syariah
              dan Hukum serta Direktur Sekolah Pascasarjana UIN Jakarta itu
              adalah mengintegrasikan Islam, sains, dan teknologi sehingga mampu
              memperkokoh kiprah civitas akademika dan lulusan UIN Jakarta.
              Sorot mata Asep tajam, penuturannya penuh optimisme, dan disertai
              pula tamsil, canda, dan tawa. Berikut petikan wawancara khusus
              KORAN SINDO dengan Rektor UIN Syarif Hidayatullah yang baru saja
              terpilih.
            </p>

            <p className="text-justify font-bold mt-7">
              Apa visi-misi Bapak sebagai Rektor UIN Jakarta periode 2023-2027
              agar UIN Jakarta menjadi barometer pendidikan Islam?
            </p>
            <p className="text-justify mt-2">
              Tentu saya tetap menghadirkan UIN Jakarta sebagai poros keilmuan
              dari sebagaimana telah dihadirkan oleh Harun Nasution, kemudian
              Azyumardi Azra, Komaruddin Hidayat, dan seterusnya. Dan, dalam
              konteks ini UIN Jakarta adalah kiblat keilmuan, bagaimana
              positioning UIN dalam kajian Islam ini adalah sebagai core values
              dan core academic. Itu poin besar. Tentu dua core ini yang ingin
              kita unggulkan di dalam konteks percaturan akademik, perhelatan
              global, yang akan kita kembangkan adalah bagaimana studi Islam
              yang bisa merespon perubahan-perubahan modern dalam konteks di
              dunia muslim dan internasional. Sehingga, inilah yang disebut
              integrasi.Jadi, integrasi Islam, sains, dan teknologi. Dan,
              bagaimana itu menjadi perhatian besar dunia. Poin saya, bagaimana
              kajian-kajian studi itu di Timur Tengah dan di mana, di sinilah
              menjadi tempatnya. Yang kedua, kalau untuk merespon modernitas,
              ini bagaimana di dalam merespon isu-isu sosial, politik, dan
              ekonomi Islam yang memang diramu di UIN Jakarta. Yang sudah
              dirintis tapi belum selesai (oleh rektor-rektor sebelumnya),
              formulasinya seperti apa di dalam konteks kurikulum, kajian, dan
              teaching. Ibaratnya dalam kaidah usul fikih “maa laa yudraku
              kulluhu laa yutraku kulluhu”. Karena itulah bagaimana kita
              melakukan integrasi Islam, sains, dan teknologi. Maka, kalau
              dinarasikan secara singkat adalah kita ingin menghadirkan UIN
              Jakarta ini sebagai suatu universitas yang unggul di dunia global
              dalam kajian Islam, sains, dan teknologi atau integrasi Islam,
              sains, dan teknologi. Itu secara core academic-nya.
            </p>
            <p className="text-justify mt-7">
              Namun, tetap di dalamnya ya itu tadi dia menjadi poros, menjadi
              kiblat, menjadi pusat kajian, yang memang dari Asia, Eropa, dan
              Timur Tengah. Sehingga, kalau ingin melihat potret Islam, ingin
              melihat potret masyarakat untuk bagaimana mensinergikan dan
              bagaimana mendialogkan Islam dengan perubahan-perubahan ya ke UIN
              Syarif Hidayatullah Jakarta. Memang harus kerja keras. Karena,
              budaya yang sudah ada harus kita rombak lagi dan itulah
              tantangannya. Tapi harus kita ubah dan itu butuh keberanian. Insya
              Allah kita bersinergi dengan para pimpinan (fakultas dan sekolah
              pascasarjana) untuk melakukan itu. Kita juga ubah bagian-bagian di
              biro yang men-support-nya. Karena, untuk perubahan itu butuh
              pemahaman.
            </p>
            <p className="text-justify font-bold mt-7">
              Apakah sinergi yang Bapak maksud tadi karena selama ini belum
              maksimal upaya memajukan potret Islam dan masyarakat maupun dalam
              mensinergikan Islam dengan perubahan-perubahan?
            </p>
            <p className="text-justify mt-2">
              Artinya, kita mereaktualisasikan dan aktualisasikan pemikiran,
              supaya ini bisa menjadi kebutuhan dunia. Itu salah satunya ya.
              Nah, seperti itulah UIN Jakarta, ingin menghadirkan harmoni. Maka
              itulah, untuk kajian-kajian yang sains, kemudian sosial, kemudian
              Islamic Studies kita tekankan, tentu core Islamic Studies harus
              dijaga walaupun secara kapitalisasi dalam konteks payment itu kan
              tidak sama dengan kedokteran dan sebagainya. Tetapi dia (islamic
              studies) adalah menjadi tradisi UIN yang harus kita subsidi karena
              ini (islamic studies) yang menjadi distingtif-nya, menjadi nilai
              tambahnya. Ya kita melanjutkan apa yang sudah dirintis oleh Harun
              Nasution, oleh Azyumardi Azra, oleh seluruh yang lain, oleh para
              pemimpin (rektor) sebelumnya. Kira-kira itu poin besarnya.
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
