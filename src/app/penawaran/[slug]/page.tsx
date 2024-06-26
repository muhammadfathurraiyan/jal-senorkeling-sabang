import Senorkeling from "@/components/penawaran/slug/Senorkeling";
import { notFound } from "next/navigation";

export default function page({ params }: { params: { slug: string } }) {
  const parameter = [
    "senorkeling",
    "dolphin-trip",
    "peralatan-senorkeling",
    "penginapan",
    "rental",
  ];

  if (!parameter.includes(params.slug)) {
    return notFound();
  }

  if (params.slug === "senorkeling") {
    return <Senorkeling />;
  }
}
