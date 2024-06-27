"use client";
import Autoplay from "embla-carousel-autoplay";
// import Fade from "embla-carousel-fade";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { MdArrowRightAlt, MdOutlineLocationOn } from "react-icons/md";

const slides = [
  { title: "Pantai Iboih", img: "/iboih.jpg" },
  { title: "Dolphin Trip", img: "/dolphin.jpg" },
  { title: "Pulau Rubiah", img: "/senorkeling.jpg" },
];

export default function Slider() {
  const options: EmblaOptionsType = { loop: true, containScroll: false };
  const plugins: EmblaPluginType[] = [Autoplay()];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full px-20 max-lg:px-6">
      <div className="w-full relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="grid grid-flow-col auto-cols-[100%]">
            {slides.map((item, index) => (
              <div
                key={index}
                className="bg-blue-600 rounded-3xl max-lg:rounded-xl h-[70vh] flex-grow-0 flex-shrink-0 basis-full min-w-0 relative"
              >
                <Image
                  alt={item.title}
                  src={item.img}
                  width={1920}
                  height={1080}
                  className="size-full object-cover rounded-3xl max-lg:rounded-xl"
                />
                <div className="absolute bottom-5 text-gray-100 left-5 flex items-end gap-2">
                  <MdOutlineLocationOn size={32} aria-label="ikon lokasi" />
                  <h1 className="font-semibold text-2xl">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex flex-col justify-center gap-4 inset-y-0 right-5">
          <button
            className="p-4 rounded-full duration-200 bg-gray-100/30 hover:bg-gray-100/50 text-gray-100"
            aria-label="tombol selanjutnya"
            onClick={scrollNext}
          >
            <MdArrowRightAlt size={48} />
          </button>
          <button
            className="p-4 rounded-full duration-200 bg-gray-100/30 hover:bg-gray-100/50 rotate-180 text-gray-100"
            aria-label="tombol sebelumnya"
            onClick={scrollPrev}
          >
            <MdArrowRightAlt size={48} />
          </button>
        </div>
      </div>
    </section>
  );
}
