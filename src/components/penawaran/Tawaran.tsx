import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Tawaran() {
  return (
    <section className="mb-[72px] mt-4 space-y-6 px-20 max-lg:px-6">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
          <Image
            src="/bg9.jpg"
            alt="pulau rubiah"
            width={1920}
            height={1080}
            className="w-full h-[30vh] object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Trip Senorkeling Pulau Rubiah</h2>
            <p className="line-clamp-3 mb-4">
              Nikmati hari senorkeling dan bersenang-senang di Pulau Rubiah.
              Wisatawan bisa bersenorkeling dan berenang di antara gerombolan
              ikan di perairan biru jernih dan dangkal .Saat ini, pulau ini
              menjadi tujuan liburan utama bagi wisatawan yang berada di Sabang.
              Perjalanan singkat dengan speed boat dari Pantai Iboih di Sabang
              akan membawa wisatawan langsung ke Pulau Rubiah. Segera hubungi
              kami dengan mengklik tombol dibawah untuk informasi lebih lanjut.
            </p>
            <div className="space-x-2">
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Pesan
              </Link>
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
          <Image
            src="/bg3.jpg"
            alt="dolphin trip"
            width={1920}
            height={1080}
            className="w-full h-[30vh] object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Dolphin Trip</h2>
            <p className="line-clamp-3 mb-4">
              Mengikuti trip lumba-lumba adalah pengalaman yang tak terlupakan
              bagi para wisatawan. Dengan mengarungi perairan yang jernih,
              wisatawan memiliki kesempatan untuk melihat lumba-lumba berenang
              bebas di habitat alaminya. Wisatawan akan disuguhi pemandangan
              lumba-lumba yang bermain-main dengan riang di sekitar boat,
              menyajikan momen yang ajaib dan mengesankan bagi wisatawan. Segera
              hubungi kami dengan mengklik tombol dibawah untuk informasi lebih
              lanjut.
            </p>
            <div className="space-x-2">
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Pesan
              </Link>
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
          <Image
            src="/bg9.jpg"
            alt="pulau rubiah"
            width={1920}
            height={1080}
            className="w-full h-[30vh] object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Peralatan Senorkeling</h2>
            <p className="line-clamp-3 mb-4">
              Nikmati keindahan terumbu karang dan kehidupan laut dengan menyewa
              peralatan snorkeling berkualitas dari kami. Dengan harga
              terjangkau, wisatawan bisa merasakan pengalaman snorkeling yang
              tak terlupakan! Kami menyediakan pelampung, kacamata, dan fin,
              serta berbagai paket lainya yang bisa disesuaikan dengan kebutuhan
              wisatawan. Dengan lokasi kami yang strategis, Anda bisa segera
              menuju spot snorkeling pulau Rubiah tanpa perlu repot. Segera
              hubungi kami dengan mengklik tombol dibawah untuk informasi lebih
              lanjut.
            </p>
            <div className="space-x-2">
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Pesan
              </Link>
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
          <Image
            src="/bg3.jpg"
            alt="dolphin trip"
            width={1920}
            height={1080}
            className="w-full h-[30vh] object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">Penginapan</h2>
            <p className="line-clamp-3 mb-4">
              Temukan kenyamanan dan keindahan di penginapan kami yang
              startegis. Dengan fasilitas lengkap dan layanan prima, kami siap
              menyambut wisatawan dengan kamar yang bersih, nyaman, dan
              dilengkapi dengan Wi-Fi, AC, dan lainya. Kami juga menawarkan
              paket spesial untuk keluarga dan pasangan, serta diskon-diskon
              yang menarik. Segera reservasi dengan mengklik tombol dibawah
              untuk penawaran terbaik.
            </p>
            <div className="space-x-2">
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Pesan
              </Link>
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
          <Image
            src="/bg9.jpg"
            alt="pulau rubiah"
            width={1920}
            height={1080}
            className="w-full h-[30vh] object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl">
              Rental Transportasi {"("}Mobil/Motor{")"}
            </h2>
            <p className="line-clamp-3 mb-4">
              Nikmati perjalanan wisatawan dengan menyewa kendaraan dari kami.
              Dengan pilihan kendaraan yang lengkap dan kondisi siap pakai, kami
              siap memenuhi kebutuhan transportasi wisatawan. Tersedia berbagai
              tipe mobil dan motor, mulai dari yang ekonomis hingga mewah.
              Proses pemesanan mudah dan cepat, dengan harga sewa yang bersaing
              dan diskon khusus untuk penyewaan jangka panjang. Segera hubungi
              kami dengan mengklik tombol dibawah untuk informasi lebih lanjut.
            </p>
            <div className="space-x-2">
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Pesan
              </Link>
              <Link
                href={""}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
