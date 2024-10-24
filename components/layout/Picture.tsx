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
      className="w-full block h-auto"
      isZoomed={false}
      radius="none"
    />
  );
};

export default LazyImage;
