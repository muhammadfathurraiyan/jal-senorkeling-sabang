"use client";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Embed from "./Embed";

type Props = {
  embedData: { id: number; provider: string; url: string }[] | undefined;
  img: { alt: string; src: string };
};

export default function Slider({ embedData, img }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="grid grid-flow-col auto-cols-[100%]">
          <div className="flex-grow-0 flex-shrink-0 basis-full min-w-0 h-[70vh] max-lg:h-[50vh]">
            <Image
              alt={img.alt}
              src={img.src}
              width={1920}
              height={1080}
              className="size-full object-cover rounded-3xl max-lg:rounded-xl"
            />
          </div>
          {embedData?.map((item) => (
            <div
              key={item.id}
              className="flex-grow-0 flex-shrink-0 basis-full min-w-0 h-[70vh] max-lg:h-[50vh]"
            >
              <Embed provider={item.provider} url={item.url} />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:absolute flex items-center gap-2 mt-4">
        <button
          className="rounded-full p-1 border bg-gray-100 border-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-200"
          type="button"
          aria-label="tombol selanjutnya"
          onClick={scrollPrev}
        >
          <AiOutlineLeft size={22} />
        </button>
        <button
          className="rounded-full p-1 border bg-gray-100 border-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-200"
          type="button"
          aria-label="tombol sebelumnya"
          onClick={scrollNext}
        >
          <AiOutlineRight size={22} />
        </button>
      </div>
    </div>
  );
}
