import Image from "next/image";
import Link from "next/link";

export default function Senorkeling() {
  return (
    <main className="grid lg:grid-cols-2 gap-8 px-20 max-lg:px-6 mb-[72px]">
      <section className="rounded-3xl max-lg:h-[40vh] overflow-hidden">
        <Image
          src="/bg9.jpg"
          alt="pulau rubiah"
          width={1920}
          height={1080}
          className="size-full object-cover rounded-xl"
        />
      </section>
      <section className="flex flex-col gap-4 ">
        <div>
          <h1 className="font-bold  text-3xl tracking-wide leading-0">
            Trip Senorkeling Pulau Rubiah
          </h1>
          <p className="">
            Nikmati hari senorkeling dan bersenang-senang di Pulau Rubiah.
            Wisatawan bisa bersenorkeling dan berenang di antara gerombolan ikan
            di perairan biru jernih dan dangkal .Saat ini, pulau ini menjadi
            tujuan liburan utama bagi wisatawan yang berada di Sabang.
            Perjalanan singkat dengan speed boat dari Pantai Iboih di Sabang
            akan membawa wisatawan langsung ke Pulau Rubiah. Segera hubungi kami
            dengan mengklik tombol dibawah untuk informasi lebih lanjut.
          </p>
        </div>
        <div className="space-x-2">
          <Link
            href={""}
            className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-300"
          >
            Pesan
          </Link>
          <Link
            href={""}
            className="px-3 py-1 rounded-md border border-gray-900 w-fit font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300"
          >
            Detail
          </Link>
        </div>
      </section>
    </main>
  );
}
