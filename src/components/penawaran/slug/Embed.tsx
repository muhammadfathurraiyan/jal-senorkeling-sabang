import Image from "next/image";

export default function Embed({
  url,
  provider,
}: {
  url: string;
  provider: string;
}) {
  if (provider === "system-video") {
    return (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <video
          src={url}
          title="system video"
          controls
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
        />
      </div>
    );
  } else if (provider === "system-image") {
    return (
      <Image
        alt={url}
        src={url}
        width={1920}
        height={1080}
        className="size-full object-cover rounded-3xl max-lg:rounded-xl"
      />
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <iframe
        src={url}
        className="absolute top-0 left-0 w-full h-full rounded-3xl"
        style={{ border: 0 }}
        allowFullScreen
        title="tiktok video"
        allow="encrypted-media;"
      ></iframe>
    </div>
  );
}
