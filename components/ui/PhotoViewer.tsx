"use client";

import { LazyImageProps } from "@/types";
import { Button, Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Copy,
  Copyright,
  Download,
  Info,
  Share,
} from "lucide-react";
import { useState } from "react";

export function PhotoViewer(props: LazyImageProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [
    {
      url: props.src,
      cameraModel: "XIAOMI 23127PN0CC",
      aperture: "F/2",
      shutterSpeed: "1/193",
      focalLength: "9 MM",
      iso: "ISO 50",
      description: "N&A",
      dateTaken: "2024-07-19 14:12:17",
    },
    // Add more photos here
  ];

  const currentPhoto = photos[currentPhotoIndex];

  const handlePrevious = () => {
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const tabs = [
    {
      id: "detail",
      label: "详情",
      icon: () => <Info size={16} />,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "exif",
      label: "Exif",
      icon: () => <Camera size={16} />,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "copyright",
      label: "版权",
      icon: () => <Copyright size={16} />,
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex h-[94vh]  my-[1vh] w-[96vw] gap-3">
      {/* Left side - Image display */}
      <Image
        src={currentPhoto.url}
        alt="Current photo"
        className="w-full h-full block flex-1.5 max-w-5xl object-contain"
        radius="none"
      />

      {/* Right side - Controls and info */}
      <section className="flex-1 p-4 flex flex-col">
        <div className="flex justify-between mb-4 gap-3">
          <Button
            size="sm"
            onClick={handlePrevious}
            startContent={<ChevronLeft size={16} />}
            className="flex-1"
            variant="shadow"
          >
            上一张
          </Button>
          <Button
            size="sm"
            onClick={handleNext}
            endContent={<ChevronRight size={16} />}
            className="flex-1"
            variant="shadow"
          >
            下一张
          </Button>
        </div>

        <Card className="mb-4">
          <CardBody className="p-2">
            <div className="grid grid-cols-3 gap-2">
              <Button
                size="sm"
                startContent={<Copy size={16} />}
                variant="shadow"
              >
                复制
              </Button>
              <Button
                size="sm"
                startContent={<Share size={16} />}
                variant="shadow"
              >
                分享
              </Button>
              <Button
                size="sm"
                startContent={<Download size={16} />}
                variant="shadow"
              >
                下载
              </Button>
            </div>
          </CardBody>
        </Card>

        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Dynamic tabs"
            items={tabs}
            classNames={{
              tabList: "flex-1",
            }}
          >
            {(item) => (
              <Tab
                key={item.id}
                title={
                  <div className="flex items-center space-x-2 align-middle">
                    <item.icon />
                    <span className="ml-1 mt-0.5">{item.label}</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
