import { dataTawaran } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Tawaran() {
  return (
    <section className="space-y-10 mt-4 px-20 max-lg:px-6">
      <h1 className="font-bold text-3xl text-center">Apa Yang Kami Tawarkan</h1>
      <div className="space-y-10">
        {dataTawaran.map((data, index) => {
          if (index % 2 === 0) {
            return (
              <div key={data.id} className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-[2px] bg-gray-900" />
                  <h2 className="font-semibold text-3xl">{`0${index + 1}`}</h2>
                </div>
                <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
                  <div className="lg:col-span-3 h-[50vh] rounded-xl relative">
                    <Image
                      src={data.image}
                      alt={"gabar " + data.title}
                      width={1920}
                      height={1080}
                      className="size-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                      <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                      <h3 className="font-semibold text-xl">{data.title}</h3>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
                    <div>
                      <h3 className="font-bold text-2xl">{data.title}</h3>
                      <p>{data.description}</p>
                    </div>
                    <Link
                      href={`/penawaran/${data.slug}`}
                      className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-200"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div key={data.id} className="flex flex-col gap-4">
              <div className="flex items-center justify-end gap-2">
                <h2 className="font-semibold text-3xl">{`0${index + 1}`}</h2>
                <div className="w-24 h-[2px] bg-gray-900" />
              </div>
              <div className="grid lg:grid-cols-5 gap-8 max-lg:gap-4">
                <div className="lg:col-span-2 flex flex-col justify-between max-lg:gap-4">
                  <div>
                    <h3 className="font-bold text-2xl">{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                  <Link
                    href={`/penawaran/${data.slug}`}
                    className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-200"
                  >
                    Detail
                  </Link>
                </div>
                <div className="lg:col-span-3 max-lg:-order-1 h-[50vh] rounded-xl relative">
                  <Image
                    src={data.image}
                    alt={"gabar " + data.title}
                    width={1920}
                    height={1080}
                    className="size-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-5 text-gray-100 left-5 flex items-center gap-2">
                    <MdOutlineLocationOn size={24} aria-label="ikon lokasi" />
                    <h3 className="font-semibold text-xl">{data.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
