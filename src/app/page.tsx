import Herosection from "@/components/beranda/Herosection";
import Slider from "@/components/beranda/Slider";
import Tawaran from "@/components/beranda/Tawaran";
import Testimoni from "@/components/beranda/Testimoni";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Jelajahi keindahan Sabang dengan berbagai penawaran menarik seperti trip snorkeling ke Pulau Rubiah, dolphin trip, penyewaan peralatan snorkeling, penginapan, dan rental kendaraan. Temukan pengalaman liburan tak terlupakan di Sabang bersama kami.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-6">
      <Herosection />
      <Slider />
      <Tawaran />
      <Testimoni />
    </main>
  );
}
