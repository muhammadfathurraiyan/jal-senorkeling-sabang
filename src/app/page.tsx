import Herosection from "@/components/beranda/Herosection";
import Slider from "@/components/beranda/Slider";
import Tawaran from "@/components/beranda/Tawaran";

export default function Home() {
  return (
    <main className="min-h-screen px-20 max-lg:px-6 flex flex-col gap-6">
      <Herosection />
      <Slider />
      <Tawaran />
    </main>
  );
}
