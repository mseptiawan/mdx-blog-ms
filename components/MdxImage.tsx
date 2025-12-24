import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function MdxImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={675}
      sizes="(max-width: 768px) 100vw, 800px"
      className="rounded-3xl shadow-lg"
    />
  );
}
