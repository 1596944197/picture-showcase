"use client";
import { useScrollHeight } from "@/hooks/useScrollHeight";
import { usePathname } from "next/navigation";
import React, { memo, useEffect } from "react";
import { default as LazyImage } from "./Picture";

type PictureProps = React.ComponentProps<typeof LazyImage>;
type Props = {
  images: PictureProps[];
};

const Gallery = ({ images }: Props) => {
  const pathname = usePathname();
  const { scrollHeight } = useScrollHeight("/");

  useEffect(() => {
    if (pathname !== "/") return;
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollHeight);
    });
  }, [pathname]);

  return (
    <section
      className={`${pathname === "/" ? "grid" : "hidden"}`}
      style={{
        display: pathname === "/" ? "grid" : "none",
      }}
    >
      <div
        className={`
          columns-2
          sm:columns-2
          md:columns-3
          lg:columns-4
          transition-all duration-500 ease-in-out
          px-3
        `}
      >
        {images &&
          images.map((image, index) => (
            <div key={index} className="mb-4 flex justify-center items-center">
              <LazyImage {...image} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default memo(Gallery);
