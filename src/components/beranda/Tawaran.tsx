import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Tawaran() {
  return (
    <section className="space-y-10 mt-4 px-20 max-lg:px-6">
      <h1 className="font-bold text-3xl text-center">Apa Yang Kami Tawarkan</h1>
      <div className="space-y-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-24 h-[2px] bg-gray-900" />
            <h2 className="font-semibold text-3xl">01</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
            <div className="lg:col-span-3 h-[50vh] rounded-xl relative">
              <Image
                src="/bg9.jpg"
                alt="pulau rubiah"
                width={1920}
                height={1080}
                className="size-full object-cover rounded-xl"
              />
              <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                <h3 className="font-semibold text-xl">Pulau Rubiah</h3>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
              <div>
                <h3 className="font-bold text-2xl">
                  Trip Senorkeling Pulau Rubiah
                </h3>
                <p>
                  Nikmati hari senorkeling dan bersenang-senang di Pulau Rubiah.
                  Wisatawan bisa bersenorkeling dan berenang di antara
                  gerombolan ikan di perairan biru jernih dan dangkal .Saat ini,
                  pulau ini menjadi tujuan liburan utama bagi wisatawan yang
                  berada di Sabang. Perjalanan singkat dengan speed boat dari
                  Pantai Iboih di Sabang akan membawa wisatawan langsung ke
                  Pulau Rubiah. Segera hubungi kami dengan mengklik tombol
                  dibawah untuk informasi lebih lanjut.
                </p>
              </div>
              <Link
                href={"/penawaran/senorkeling"}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-end gap-2">
            <h2 className="font-semibold text-3xl">02</h2>
            <div className="w-24 h-[2px] bg-gray-900" />
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
            <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
              <div>
                <h3 className="font-bold text-2xl">Dolphin Trip</h3>
                <p>
                  Mengikuti trip lumba-lumba adalah pengalaman yang tak
                  terlupakan bagi para wisatawan. Dengan mengarungi perairan
                  yang jernih, wisatawan memiliki kesempatan untuk melihat
                  lumba-lumba berenang bebas di habitat alaminya. Wisatawan akan
                  disuguhi pemandangan lumba-lumba yang bermain-main dengan
                  riang di sekitar boat, menyajikan momen yang ajaib dan
                  mengesankan bagi wisatawan. Segera hubungi kami dengan
                  mengklik tombol dibawah untuk informasi lebih lanjut.
                </p>
              </div>
              <Link
                href={"/penawaran/dolphin-trip"}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Detail
              </Link>
            </div>
            <div className="lg:col-span-3 max-lg:-order-1 h-[50vh] rounded-xl relative">
              <Image
                src="/bg3.jpg"
                alt="dolphin trip"
                width={1920}
                height={1080}
                className="size-full object-cover rounded-xl"
              />
              <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                <h3 className="font-semibold text-xl">Dolphin Trip</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-24 h-[2px] bg-gray-900" />
            <h2 className="font-semibold text-3xl">03</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
            <div className="lg:col-span-3 h-[50vh] rounded-xl relative">
              <Image
                src="/bg9.jpg"
                alt="pulau rubiah"
                width={1920}
                height={1080}
                className="size-full object-cover rounded-xl"
              />
              <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                <h3 className="font-semibold text-xl">Teupin Layeu</h3>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
              <div>
                <h3 className="font-bold text-2xl">Peralatan Senorkeling</h3>
                <p>
                  Nikmati keindahan terumbu karang dan kehidupan laut dengan
                  menyewa peralatan snorkeling berkualitas dari kami. Dengan
                  harga terjangkau, wisatawan bisa merasakan pengalaman
                  snorkeling yang tak terlupakan! Kami menyediakan pelampung,
                  kacamata, dan fin, serta berbagai paket lainya yang bisa
                  disesuaikan dengan kebutuhan wisatawan. Dengan lokasi kami
                  yang strategis, Anda bisa segera menuju spot snorkeling pulau
                  Rubiah tanpa perlu repot. Segera hubungi kami dengan mengklik
                  tombol dibawah untuk informasi lebih lanjut.
                </p>
              </div>
              <Link
                href={"/penawaran/peralatan-snorkeling"}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-end gap-2">
            <h2 className="font-semibold text-3xl">04</h2>
            <div className="w-24 h-[2px] bg-gray-900" />
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
            <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
              <div>
                <h3 className="font-bold text-2xl">Penginapan</h3>
                <p>
                  Temukan kenyamanan dan keindahan di penginapan kami yang
                  startegis. Dengan fasilitas lengkap dan layanan prima, kami
                  siap menyambut wisatawan dengan kamar yang bersih, nyaman, dan
                  dilengkapi dengan Wi-Fi, AC, dan lainya. Kami juga menawarkan
                  paket spesial untuk keluarga dan pasangan, serta diskon-diskon
                  yang menarik. Segera reservasi dengan mengklik tombol dibawah
                  untuk penawaran terbaik.
                </p>
              </div>
              <Link
                href={"/penawaran/penginapan"}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
              >
                Detail
              </Link>
            </div>
            <div className="lg:col-span-3 max-lg:-order-1 h-[50vh] rounded-xl relative">
              <Image
                src="/bg3.jpg"
                alt="dolphin trip"
                width={1920}
                height={1080}
                className="size-full object-cover rounded-xl"
              />
              <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                <h3 className="font-semibold text-xl">Dolphin Trip</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-24 h-[2px] bg-gray-900" />
            <h2 className="font-semibold text-3xl">05</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
            <div className="lg:col-span-3 h-[50vh] rounded-xl relative">
              <Image
                src="/bg9.jpg"
                alt="pulau rubiah"
                width={1920}
                height={1080}
                className="size-full object-cover rounded-xl"
              />
              <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                <h3 className="font-semibold text-xl">Pulau Rubiah</h3>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
              <div>
                <h3 className="font-bold text-2xl">
                  Rental Transportasi {"("}Mobil/Motor{")"}
                </h3>
                <p>
                  Nikmati perjalanan wisatawan dengan menyewa kendaraan dari
                  kami. Dengan pilihan kendaraan yang lengkap dan kondisi siap
                  pakai, kami siap memenuhi kebutuhan transportasi wisatawan.
                  Tersedia berbagai tipe mobil dan motor, mulai dari yang
                  ekonomis hingga mewah. Proses pemesanan mudah dan cepat,
                  dengan harga sewa yang bersaing dan diskon khusus untuk
                  penyewaan jangka panjang. Segera hubungi kami dengan mengklik
                  tombol dibawah untuk informasi lebih lanjut.
                </p>
              </div>
              <Link
                href={"/penawaran/rental"}
                className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
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
