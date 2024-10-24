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
      className={`${pathname === "/" ? "block" : "hidden"}`}
      style={{
        display: pathname === "/" ? "block" : "none",
      }}
    >
      <div
        className={`
          columns-2
          sm:columns-2
          md:columns-3
          lg:columns-4
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
