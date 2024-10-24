import { Image } from "@nextui-org/react";

type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const LazyImage = ({ src, alt, onClick }: Props) => {
  return (
    <div
      className="
       w-full sm:w-[45vw] md:w-[30vw] lg:w-[20vw] p-2
     bg-white shadow-xl rounded border border-gray-200 overflow-hidden
     dark:bg-zinc-600 dark:border-zinc-500
     "
    >
      <Image
        src={src}
        alt={alt}
        onClick={onClick}
        className="
        block w-full h-auto
        sm:w-[44vw] md:w-[29vw] lg:w-[19vw]
        "
        isZoomed={true}
        radius="none"
      />
    </div>
  );
};

export default LazyImage;
