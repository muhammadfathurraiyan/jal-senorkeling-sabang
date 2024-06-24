import Herosection from "@/components/beranda/Herosection";
import Slider from "@/components/beranda/Slider";
import Tawaran from "@/components/beranda/Tawaran";
import Testimoni from "@/components/beranda/Testimoni";

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
