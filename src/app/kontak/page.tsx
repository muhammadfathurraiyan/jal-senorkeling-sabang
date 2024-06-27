import Form from "@/components/kontak/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami untuk Informasi Lebih Lanjut",
  description:
    "Hubungi kami untuk informasi lebih lanjut tentang penawaran wisata Sabang, termasuk trip snorkeling, dolphin trip, penyewaan peralatan snorkeling, penginapan, dan rental kendaraan. Kami siap membantu Anda merencanakan liburan terbaik di Sabang.",
};

export default function page() {
  return (
    <main className="mb-[72px] px-20 max-lg:px-6">
      <h1 className="text-center text-5xl font-bold mb-8">
        Terhubung Dengan Kami
      </h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="rounded-3xl max-lg:h-[40vh] overflow-hidden">
          <iframe
            title="google maps sabang"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127011.61918744506!2d95.21383880576323!3d5.839679284661752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3041cf2458af5be9%3A0x20892775b3c98e17!2sPulau%20We!5e0!3m2!1sid!2sid!4v1719226552854!5m2!1sid!2sid"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full"
          ></iframe>
        </section>
        <section className="flex flex-col gap-4 ">
          <div>
            <h1 className="font-bold  text-3xl tracking-wide leading-0">
              Formulir kontak
            </h1>
            <p className="">
              Silahkan isi form dibawah untuk menghubungi kami via WhatsApp.
            </p>
          </div>
          <Form />
        </section>
      </div>
    </main>
  );
}
