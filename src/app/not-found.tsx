import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ups! Error 404.",
  description: "Halaman yang anda tuju tidak dapat ditemukan silahkan kembali.",
};
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col px-6 items-center justify-center">
      <h1 className="text-center text-3xl font-bold">Ups! Error 404.</h1>
      <p className="text-center text-lg">
        Halaman yang anda tuju tidak dapat ditemukan silahkan kembali.
      </p>
      <Link
        className="mt-4 px-3 py-1 rounded-md border border-gray-900 w-fit font-medium hover:text-gray-100 hover:bg-gray-900 duration-200"
        href="/"
      >
        Kembali
      </Link>
    </main>
  );
}
