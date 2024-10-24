import { Image } from "@nextui-org/react";

type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const LazyImage = ({ src, alt, onClick }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      onClick={onClick}
      className="
      block w-full sm:w-[45vw] md:w-[30vw] lg:w-[20vw] h-auto
      "
      isZoomed={true}
      radius="none"
    />
  );
};

export default LazyImage;
