"use client";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineTikTok,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="sticky z-10 top-0 px-20 max-lg:px-6 py-6 flex bg-gray-100/10 backdrop-blur items-center justify-between">
      <h1
        className={`text-xl font-bold z-20 ${
          toggle ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        Jal Senorkeling Sabang
      </h1>
      <nav className="max-lg:hidden">
        <ul className="flex items-center gap-8">
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/penawaran">
              Penawaran
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/tentang">
              Tentang
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600 duration-300" href="/kontak">
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 max-lg:hidden">
        <Link
          href={"https://wa.me/6281362807810"}
          target="_blank"
          className="hover:text-sky-600 duration-300"
        >
          <AiOutlineWhatsApp size={22} />
        </Link>
        <Link
          href={"https://www.instagram.com/jal_snorkeling_sabang/"}
          target="_blank"
          className="hover:text-sky-600 duration-300"
        >
          <AiOutlineInstagram size={22} />
        </Link>
        <Link
          href={"https://www.tiktok.com/@bahrizal13"}
          target="_blank"
          className="hover:text-sky-600 duration-300"
        >
          <AiOutlineTikTok size={22} />
        </Link>
      </div>
      <button
        onClick={handleToggle}
        className={`lg:hidden z-20 hover:text-sky-600 duration-300 ${
          toggle ? "text-neutral-100" : "text-neutral-900"
        }`}
      >
        {toggle ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </button>
      <aside
        className={`${
          toggle ? "opacity-100  visible" : "opacity-0 invisible"
        } duration-300 absolute top-0 h-screen right-0 w-full bg-gray-900 text-gray-100 p-6 flex flex-col justify-between`}
      >
        <nav className="mt-16 text-lg">
          <ul className="flex flex-col gap-1">
            <li>
              <Link className="hover:text-sky-600 duration-300" href="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-sky-600 duration-300"
                href="/penawaran"
              >
                Penawaran
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-600 duration-300" href="/tentang">
                Tentang
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-600 duration-300" href="/kontak">
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 ">
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
      </aside>
    </header>
  );
}
