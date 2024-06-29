export default function Embed({ url }: { url: string }) {
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
