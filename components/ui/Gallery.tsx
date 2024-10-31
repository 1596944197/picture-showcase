"use client";
import { useScrollHeight } from "@/hooks/useScrollHeight";
import { usePathname } from "next/navigation";
import React, {
  lazy,
  memo,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import { LazyImage } from "./Picture";

type PictureProps = React.ComponentProps<typeof LazyImage>;
type Props = {
  images: PictureProps[];
};

const PictureModal = lazy(() => import("./PictureModal"));

const Gallery = ({ images }: Props) => {
  const pathname = usePathname();
  const { scrollHeight } = useScrollHeight("/");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (pathname !== "/") return;
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollHeight);
    });
  }, [pathname]);

  const handleClick = (index: number) => {
    setIsModalOpen(true);
    setCurrentImgIndex(index);
  };

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <section
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
            <div
              key={index}
              className="mb-4 flex justify-center items-center"
              onClick={() => handleClick(index)}
            >
              <LazyImage {...image} />
            </div>
          ))}
      </div>
      <Suspense fallback={null}>
        {isModalOpen && (
          <PictureModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            image={images[imgIndex]}
          />
        )}
      </Suspense>
    </section>
  );
};

export default memo(Gallery);
