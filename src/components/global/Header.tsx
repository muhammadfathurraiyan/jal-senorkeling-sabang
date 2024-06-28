"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineTikTok,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleIsScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleIsScroll);

    return () => {
      window.removeEventListener("scroll", handleIsScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-10 top-0 px-20 max-lg:px-6 py-6 flex items-center justify-between duration-200 ${
        isScroll
          ? "bg-gray-900/50 backdrop-blur text-gray-100"
          : "bg-gray-900/0"
      }`}
    >
      <Link
        onClick={() => setToggle(false)}
        href={"/"}
        className={`text-xl font-bold z-20 duration-200 ${
          toggle && "text-gray-100"
        }`}
      >
        Jal Snorkeling Sabang
      </Link>
      <nav className="max-lg:hidden">
        <ul className="flex items-center gap-8">
          <li>
            <Link className="hover:text-sky-600 duration-200" href="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600 duration-200" href="/penawaran">
              Penawaran
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600 duration-200" href="/kontak">
              Kontak
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-600 duration-200" href="/tentang">
              Tentang
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4 max-lg:hidden">
        <Link
          href={"https://wa.me/6281362807810"}
          target="_blank"
          className="hover:text-sky-600 duration-200"
          aria-label="whatsapp"
        >
          <AiOutlineWhatsApp size={24} />
        </Link>
        <Link
          href={"https://www.instagram.com/jal_snorkeling_sabang/"}
          target="_blank"
          className="hover:text-sky-600 duration-200"
          aria-label="instagram"
        >
          <AiOutlineInstagram size={24} />
        </Link>
        <Link
          href={"https://www.tiktok.com/@bahrizal13"}
          target="_blank"
          className="hover:text-sky-600 duration-200"
          aria-label="titktok"
        >
          <AiOutlineTikTok size={24} />
        </Link>
      </div>
      <button
        onClick={handleToggle}
        className={`lg:hidden z-20 hover:text-sky-600 duration-200 ${
          toggle && "text-neutral-100"
        }`}
        aria-label="menu"
      >
        {toggle ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </button>
      <aside
        className={`${
          toggle ? "opacity-100  visible" : "opacity-0 invisible"
        } duration-200 absolute top-0 h-screen right-0 w-full bg-gray-900 text-gray-100 p-6 flex flex-col justify-between`}
      >
        <nav className="mt-16 text-lg">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                onClick={() => setToggle(false)}
                className="hover:text-sky-600 duration-200"
                href="/"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                className="hover:text-sky-600 duration-200"
                href="/penawaran"
              >
                Penawaran
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                className="hover:text-sky-600 duration-200"
                href="/kontak"
              >
                Kontak
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setToggle(false)}
                className="hover:text-sky-600 duration-200"
                href="/tentang"
              >
                Tentang
              </Link>
            </li>
          </ul>
        </nav>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Link
              onClick={() => setToggle(false)}
              href={"https://wa.me/6281362807810"}
              target="_blank"
              className="hover:text-sky-600 duration-200"
              aria-label="whatsapp"
            >
              <AiOutlineWhatsApp size={24} />
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href={"https://www.instagram.com/jal_snorkeling_sabang/"}
              target="_blank"
              className="hover:text-sky-600 duration-200"
              aria-label="instagram"
            >
              <AiOutlineInstagram size={24} />
            </Link>
            <Link
              onClick={() => setToggle(false)}
              href={"https://www.tiktok.com/@bahrizal13"}
              target="_blank"
              className="hover:text-sky-600 duration-200"
              aria-label="titktok"
            >
              <AiOutlineTikTok size={24} />
            </Link>
          </div>
          <p className="text-sm">
            &copy; Jal Snorkeling Sabang. <br /> Site design with 💙 by:{" "}
            <Link
              onClick={() => setToggle(false)}
              href={"https://muhammadfathurraiyan.site"}
              target="_blank"
              className="font-bold hover:text-sky-600 duration-200"
            >
              Raiyan.
            </Link>
          </p>
        </div>
      </aside>
    </header>
  );
}
