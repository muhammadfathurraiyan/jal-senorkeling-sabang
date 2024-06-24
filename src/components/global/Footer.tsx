"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineInstagram,
  AiOutlineTikTok,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-gray-900 text-gray-100 py-12 px-4 relative">
      {pathname === "/" && (
        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-600 bg-gray-100 absolute top-0" />
      )}
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="font-medium">Ikuti kami di:</p>
        <div className="flex gap-6">
          <Link
            href={"https://wa.me/6281362807810"}
            target="_blank"
            className="hover:text-sky-600 duration-300"
          >
            <AiOutlineWhatsApp size={24} />
          </Link>
          <Link
            href={"https://www.instagram.com/jal_snorkeling_sabang/"}
            target="_blank"
            className="hover:text-sky-600 duration-300"
          >
            <AiOutlineInstagram size={24} />
          </Link>
          <Link
            href={"https://www.tiktok.com/@bahrizal13"}
            target="_blank"
            className="hover:text-sky-600 duration-300"
          >
            <AiOutlineTikTok size={24} />
          </Link>
        </div>
      </div>
      <h1 className="text-xl font-bold">Jal Senorkeling Sabang</h1>
      <nav className="text-sm">
        <ul className="flex items-center gap-4">
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/">
              Beranda
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/destinasi">
              Destinasi
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/tentang">
              Tentang
            </Link>
          </li>
          |
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/kontak">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-sm text-center">
        &copy; Jal Senorkeling Sabang. <br /> Site design with 💙 by:{" "}
        <Link
          href={"https://muhammadfathurraiyan.site"}
          target="_blank"
          className="font-bold hover:text-sky-600 duration-300"
        >
          Raiyan.
        </Link>
      </p>
    </footer>
  );
}
