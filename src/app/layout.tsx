import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jalsenorkelingsabang.vercel.app"),
  keywords: [
    "wisata Sabang",
    "snorkeling Pulau Rubiah",
    "dolphin trip Sabang",
    "penyewaan peralatan snorkeling Sabang",
    "penginapan Sabang",
    "rental kendaraan Sabang",
    "liburan Sabang",
    "trip Sabang",
    "tour Sabang",
    "wisata bahari Sabang",
    "paket wisata Sabang",
    "aktivitas wisata Sabang",
    "destinasi wisata Sabang",
    "pulau Weh",
    "atraksi wisata Sabang",
    "petualangan Sabang",
    "perjalanan Sabang",
    "ekspedisi Sabang",
    "keindahan alam Sabang",
    "pantai Sabang",
    "resort Sabang",
    "pengalaman snorkeling Sabang",
    "snorkeling Sabang",
    "menyelam Sabang",
    "dive trip Sabang",
    "menjelajahi Sabang",
    "explore Sabang",
    "wisata keluarga Sabang",
    "senorkeling Sabang",
    "keindahan bawah laut Sabang",
    "tempat wisata Sabang",
    "wisata alam Sabang",
    "atraksi Pulau Weh",
    "perjalanan laut Sabang",
  ],
  title: {
    template: "%s | Jal Snorkeling Sabang",
    default: "Jal Snorkeling Sabang",
  },
  openGraph: {
    images: "/jalsnorkelingsabang.jpg",
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
      <GoogleAnalytics gaId="G-3P494EMJ54" />
    </html>
  );
}
