"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const testimoni = [
  {
    title: "Pengalaman yang menakjubkan",
    description:
      "Pengalaman snorkeling dengan Jal Senorkeling Sabang sungguh luar biasa! Panduan yang ramah dan profesional membuat perjalanan kami sangat menyenangkan. Keindahan bawah laut Sabang benar-benar memukau, dan kami merasa sangat aman selama menyelam. Terima kasih Jal Senorkeling Sabang atas liburan yang tak terlupakan!",
    by: "Muhammad Fathur Raiyan",
    from: "Banda Aceh",
  },
  {
    title: "Luar biasa",
    description:
      "Luar biasa! Jal Senorkeling Sabang memberikan layanan terbaik. Alat snorkeling berkualitas, tim yang berpengalaman, dan spot-spot snorkeling yang menakjubkan. Saya sangat merekomendasikan jasa wisata ini untuk siapa saja yang ingin menikmati keindahan laut Sabang.",
    by: "Muhammad Afghan",
    from: "Banda Aceh",
  },
];

export default function Testimoni() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <section className="bg-gray-900 text-gray-100 space-y-8 mt-12 py-12">
      <h1 className="font-bold text-3xl text-center px-20 max-lg:px-6">
        Apa Kata Mereka Tentang Kami
      </h1>
      <div className="grid lg:grid-cols-2 max-lg:gap-6">
        <div className="px-20 max-lg:px-6 space-y-4">
          <BiSolidQuoteAltRight size={52} />
          <p>
            Jal Senorkeling Sabang adalah pilihan terbaik untuk wisatawan di
            sabang kami memberikan beberapa penawaran spesial seperti
            penginapan, rental transportasi, dolphin trip, rental peralatan
            senorkeling dan lainya! Kemi pastinya akan memberikan pelayanan yang
            terbaik untuk pengalaman liburan anda di Sabang.
          </p>
          <div className="-space-y-1">
            <p className="font-bold">Bahrizal</p>
            <p>Jal Senorkeling Sabang</p>
          </div>
        </div>
        <div className="px-20 max-lg:px-4 max-lg:mx-6 relative bg-gray-100 text-gray-900 rounded-l-xl max-lg:rounded-r-xl">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="grid grid-flow-col auto-cols-[100%]">
              {testimoni.map((data, index) => (
                <article
                  key={index}
                  className="flex-grow-0 flex-shrink-0 basis-full min-w-0 flex items-center justify-center flex-col p-8 gap-4"
                >
                  <h1 className="text-3xl font-bold text-center">
                    "{data.title}"
                  </h1>
                  <p className="text-center">{data.description}</p>
                  <div className="-space-y-1 ">
                    <p className="font-bold text-center">{data.by}</p>
                    <p className="text-center">{data.from}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between absolute top-0 bottom-0 inset-x-20 max-lg:inset-x-4">
            <button
              className="rounded-full p-1 border bg-gray-100 border-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-200"
              type="button"
              aria-label="tombol selanjutnya"
              onClick={scrollPrev}
            >
              <AiOutlineLeft size={14} />
            </button>
            <button
              className="rounded-full p-1 border bg-gray-100 border-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-200"
              type="button"
              aria-label="tombol sebelumnya"
              onClick={scrollNext}
            >
              <AiOutlineRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
