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
  const [img, setCurrentImg] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollHeight);
    });
  }, [pathname]);

  const handleClick = (image: Props["images"][0]) => {
    setIsModalOpen(true);
    setCurrentImg(image.src);
  };

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

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
            <div
              key={index}
              className="mb-4 flex justify-center items-center"
              onClick={() => handleClick(image)}
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
            image={img}
          />
        )}
      </Suspense>
    </section>
  );
};

export default memo(Gallery);
