import { dataTawaran } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // fetch data
  const data = dataTawaran.find((data) => data.slug === slug);

  // optionally access and extend (rather than replace) parent metadata
  if (!data) {
    return { title: "Penawaran" };
  }

  return {
    title: data.title,
    openGraph: {
      images: data.image,
    },
  };
}

const parameter = [
  "snorkeling",
  "dolphin-trip",
  "peralatan-snorkeling",
  "penginapan",
  "rental",
];

export default function page({ params }: Props) {
  const data = dataTawaran.find((data) => data.slug === params.slug);
  if (!parameter.includes(params.slug) || !data) {
    return notFound();
  }
  const link = (url: string, title: string) => {
    const template = `*Link:*\n${url}\n\n*Pesan:*\nSaya tertarik untuk berdiskusi lebih lanjut tentang paket ${title}.`;
    return `https://wa.me/6281362807810?text=${encodeURI(template)}`;
  };
  return (
    <main className="px-20 max-lg:px-6 mb-[72px] mt-4">
      <Link
        href={"/penawaran"}
        className="font-bold flex items-center gap-1 hover:text-sky-600 w-fit duration-200"
      >
        <MdArrowRightAlt className="rotate-180" size={28} /> Kembali
      </Link>
      <div className="grid lg:grid-cols-2 gap-8 mt-4">
        <section className="rounded-3xl max-lg:h-[40vh] overflow-hidden">
          <Image
            src={data.image}
            alt={"gambar " + data.title}
            width={1920}
            height={1080}
            className="size-full object-cover rounded-xl"
          />
        </section>
        <section className="flex flex-col gap-4 lg:justify-between">
          <div>
            <h1 className="font-bold  text-3xl tracking-wide leading-0">
              {data.title}
            </h1>
            <p className="">{data.description}</p>
            <blockquote className="p-2 pl-4 mt-4 bg-gray-300 border-l-4 border-gray-500">
              <strong>Info:</strong> <br />
              Silahkan klik pesan untuk melanjutkan ke WhatsApp!
            </blockquote>
          </div>
          <Link
            href={link(
              `https://jalsnorkelingsabang.vercel.app/penawaran/${data.slug}`,
              data.title
            )}
            target="_blank"
            className="px-3 mt-4 py-2 flex items-center justify-center gap-2  rounded-md border w-full font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-200"
          >
            <AiOutlineWhatsApp size={22} /> Pesan
          </Link>
        </section>
      </div>
    </main>
  );
}
