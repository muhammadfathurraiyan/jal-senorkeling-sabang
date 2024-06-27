import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Jal Senorkeling Sabang",
    default: "Jal Senorkeling Sabang",
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
