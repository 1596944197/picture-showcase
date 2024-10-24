import Gallery from "@/components/layout/Gallery";
import React from "react";

type GalleryProps = React.ComponentProps<typeof Gallery>;

export default function Home() {
  const images: GalleryProps["images"] = [
    {
      src: "https://pic.netbian.com/uploads/allimg/241023/234955-17296985953e14.jpg",
      alt: "ces ",
    },
    {
      src: "https://pic.netbian.com/uploads/allimg/241023/231835-1729696715f4d7.jpg",
      alt: "ces",
    },
    {
      src: "https://pic.netbian.com/uploads/allimg/241020/235248-1729439568e63d.jpg",
      alt: "ces",
    },
    {
      src: "https://pic.netbian.com/uploads/allimg/241014/171403-1728897243c203.jpg",
      alt: "ces",
    },
    {
      src: "https://pic.netbian.com/uploads/allimg/240514/004624-1715618784f9c9.jpg",
      alt: "ces",
    },
    {
      src: "https://pic.netbian.com/uploads/allimg/240521/233805-17163058853baa.jpg",
      alt: "ces",
    },
  ];
  return <Gallery images={images} />;
}
