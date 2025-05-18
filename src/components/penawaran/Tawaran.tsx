import { dataTawaran } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Tawaran() {
  const data1 = dataTawaran.slice(0, 3);
  const data2 = dataTawaran.slice(3, 6);
  const link = (url: string, title: string) => {
    const template = `*Link:*\n${url}\n\n*Pesan:*\nSaya tertarik untuk berdiskusi lebih lanjut tentang paket ${title}.`;
    return `https://wa.me/6281362807810?text=${encodeURI(template)}`;
  };
  return (
    <section className="mb-[72px] mt-4 space-y-6 px-20 max-lg:px-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {data1.map((data) => (
          <div key={data.id} className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
            <Image
              src={data.image}
              alt={"gambar " + data.title}
              width={1920}
              height={1080}
              className="w-full h-[30vh] object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl">{data.title}</h2>
              <p className="line-clamp-3 mb-4">{data.description}</p>
              <div className="space-x-2">
                <Link
                  href={link(
                    `https://jalsnorkelingsabang.com/penawaran/${data.slug}`,
                    data.title
                  )}
                  target="_blank"
                  className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
                >
                  Pesan
                </Link>
                <Link
                  href={`/penawaran/${data.slug}`}
                  className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {data2.map((data) => (
          <div key={data.id} className="rounded-xl border border-gray-400 hover:border-gray-900 duration-300">
            <Image
              src={data.image}
              alt={"gambar " + data.title}
              width={1920}
              height={1080}
              className="w-full h-[30vh] object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl">{data.title}</h2>
              <p className="line-clamp-3 mb-4">{data.description}</p>
              <div className="space-x-2">
                <Link
                  href={link(
                    `https://jalsnorkelingsabang.com/penawaran/${data.slug}`,
                    data.title
                  )}
                  target="_blank"
                  className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
                >
                  Pesan
                </Link>
                <Link
                  href={`/penawaran/${data.slug}`}
                  className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
