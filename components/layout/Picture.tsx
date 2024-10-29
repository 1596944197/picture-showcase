/* eslint-disable @next/next/no-img-element */
import { Skeleton } from "@nextui-org/react";
import { memo, useCallback, useEffect, useRef, useState } from "react";
type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const LazyImage = ({ src, alt, onClick }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (imgRef.current?.complete) {
      handleLoad();
    }
  }, []);

  return (
    <div
      className="
       w-full sm:w-[45vw] md:w-[30vw] lg:w-[20vw] p-2
     bg-white shadow-xl rounded border border-gray-200 overflow-hidden
     dark:bg-zinc-600 dark:border-zinc-500
       hover:scale-110 transition-all duration-300
     "
    >
      <Skeleton className={isLoading ? "h-72" : "h-auto"} isLoaded={!isLoading}>
        <img
          ref={imgRef}
          alt={alt}
          loading="lazy"
          src={src}
          onClick={onClick}
          onLoad={handleLoad}
          className="
            block w-full h-auto
            sm:w-[44vw] md:w-[29vw] lg:w-[19vw]
        "
        />
      </Skeleton>
      {/* <Image
        alt={alt}
        src={src}
        height={300}
        onClick={onClick}
        onLoad={handleLoad}
        loading="lazy"
        className="
            block w-full h-auto
            sm:w-[44vw] md:w-[29vw] lg:w-[19vw]
        "
        isZoomed={true}
        radius="none"
      ></Image> */}
    </div>
  );
};

export default memo(LazyImage);
