import Tawaran from "@/components/penawaran/Tawaran";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trip Snorkeling, Dolphin Trip, Penginapan, dan Rental Kendaraan",
  description:
    "Temukan penawaran terbaik untuk trip snorkeling ke Pulau Rubiah, dolphin trip, penyewaan peralatan snorkeling, penginapan, dan rental kendaraan di Sabang. Nikmati liburan Anda dengan layanan berkualitas dari kami.",
};

export default function page() {
  return (
    <main className="min-h-screen flex flex-col gap-6">
      <section className="flex flex-col items-center justify-center gap-4 px-20 max-lg:px-6 ">
        <h1 className="font-bold text-6xl max-lg:text-5xl tracking-wide leading-0">
          Apa yang kami tawarkan
        </h1>
        <p className="font-medium text-3xl tracking-wider ">
          Untuk Paket Wisata Anda di Sabang.
        </p>
      </section>
      <Tawaran />
    </main>
  );
}
