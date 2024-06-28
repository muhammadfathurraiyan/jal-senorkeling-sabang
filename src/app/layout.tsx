import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jalsenorkelingsabang.vercel.app"),
  title: {
    template: "%s | Jal Snorkeling Sabang",
    default: "Jal Snorkeling Sabang",
  },
  openGraph: {
    images: "/dolphin.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} text-gray-900 bg-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
