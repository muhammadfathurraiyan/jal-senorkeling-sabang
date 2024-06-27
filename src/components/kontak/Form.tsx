"use client";

import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Form() {
  const action = (data: FormData) => {
    const nama = data.get("nama");
    const pesan = data.get("pesan");
    const template = `*Dari:* ${nama}\n*Pesan:*\n ${pesan}`;
    const waLink = `https://wa.me/6281362807810?text=${encodeURI(template)}`;
    window.open(waLink);
  };
  return (
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
          required
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
          required
          className="border border-gray-400 bg-gray-100 rounded p-2 outline-none "
          placeholder="Hallo saya tertarik..."
        />
      </div>
      <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-gray-900 w-full font-medium text-gray-100 bg-gray-900 hover:bg-gray-950 duration-200">
        <AiOutlineWhatsApp size={22} /> Kirim Pesan
      </button>
    </form>
  );
}
