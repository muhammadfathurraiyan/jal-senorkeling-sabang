"use client";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function page() {
  const action = (data: FormData) => {
    const nama = data.get("nama");
    const pesan = data.get("pesan");
    const template = `*Dari:* ${nama}\n*Pesan:*\n ${pesan}`;
    const waLink = `https://wa.me/6281362807810?text=${encodeURI(template)}`;
    window.open(waLink);
  };
  return (
    <main className="mb-[72px] px-20 max-lg:px-6">
      <h1 className="text-center text-5xl font-bold mb-8">Terhubung Dengan Kami</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="rounded-3xl max-lg:h-[40vh] overflow-hidden">
          <iframe
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
          <form action={action} className="space-y-4">
            <div className="flex flex-col relative">
              <label
                htmlFor="name"
                className="absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Nama
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                className="border border-gray-400 bg-gray-100 rounded p-2 outline-none"
                placeholder="Alan Turing"
              />
            </div>
            <div className="flex flex-col relative">
              <label
                htmlFor="name"
                className="absolute -top-3 left-3 bg-gray-100 px-1"
              >
                Pesan
              </label>
              <textarea
                rows={8}
                id="pesan"
                name="pesan"
                className="border border-gray-400 bg-gray-100 rounded p-2 outline-none "
                placeholder="Hallo saya tertarik..."
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-900 w-full font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-300">
              <AiOutlineWhatsApp size={22} /> Kirim Pesan
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
