"use client";
import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import React, { useEffect, useRef, useState } from "react";
import { default as LazyImage, default as Picture } from "./Picture";

type PictureProps = React.ComponentProps<typeof Picture>;
type Props = {
  images: PictureProps[];
};

const Gallery = ({ images }: Props) => {
  const masonryRef = useRef<HTMLDivElement>(null);
  const [containerMarginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    const masonryContainer = masonryRef.current;
    if (masonryContainer) {
      imagesLoaded(masonryContainer, () => {
        new Masonry(masonryContainer, {
          itemSelector: ".masonry-item",
          percentPosition: true,
        });
      });
    }
  }, [images]);

  useEffect(() => {
    setMarginLeft(adjustMasonryLayout());

    const handle = () => {
      setTimeout(() => setMarginLeft(adjustMasonryLayout()), 500);
    };
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <section
      ref={masonryRef}
      className="flex masonry-container"
      style={{ paddingLeft: `${containerMarginLeft}px` }}
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

function adjustMasonryLayout() {
  const container = document.querySelector(".masonry-container");
  const items = document.querySelectorAll(".masonry-item");

  if (container instanceof HTMLElement && items.length > 0) {
    let maxWidth = 0;

    items.forEach((item) => {
      const itemWidth = +window.getComputedStyle(item).width.replace("px", "");
      const styleLeft = window.getComputedStyle(item).left;
      // 解析 left 值为数值
      const left = parseFloat(styleLeft);

      // 检查最大宽度（即最右）
      maxWidth = Math.max(maxWidth, left + itemWidth);
    });

    const viewportWidth = document.documentElement.clientWidth;

    // 计算剩余宽度，用于调整容器
    const remainingWidth = (viewportWidth - maxWidth) / 2;
    return Math.floor(remainingWidth);
  }
  return 0;
}

export default Gallery;
