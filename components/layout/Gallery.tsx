"use client";
import { useScrollHeight } from "@/hooks/useScrollHeight";
import Masonry from "masonry-layout";
import { usePathname } from "next/navigation";
import React, { memo, useEffect, useRef } from "react";
import { default as LazyImage } from "./Picture";

type PictureProps = React.ComponentProps<typeof LazyImage>;
type Props = {
  images: PictureProps[];
};

const Gallery = ({ images }: Props) => {
  const pathname = usePathname();
  const masonryRef = useRef<HTMLDivElement>(null);
  const { scrollHeight } = useScrollHeight("/");

  useEffect(() => {
    const masonryContainer = masonryRef.current;
    if (masonryContainer) {
      new Masonry(masonryContainer, {
        itemSelector: ".masonry-item",
        percentPosition: true,
      });
    }
  }, [images]);

  useEffect(() => {
    if (pathname !== "/") return;
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollHeight);
    });
  }, [pathname]);

  return (
    <section
      ref={masonryRef}
      className="flex masonry-container"
      style={{
        display: pathname == "/" ? "flex" : "none",
      }}
    >
      {images &&
        images.map((image, index) => (
          <div key={index} className="masonry-item mr-1 mb-1">
            <LazyImage {...image} />
          </div>
        ))}
    </section>
  );
};

export default memo(Gallery);
