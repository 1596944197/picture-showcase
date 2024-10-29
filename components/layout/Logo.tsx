"use client";
import { Image, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Link href="/" className="select-none">
      <Skeleton className="w-[36]px h-[36]px" isLoaded={!isLoading}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={36}
          height={36}
          onLoad={setIsLoading.bind(undefined, false)}
        />
      </Skeleton>
    </Link>
  );
};

export { Logo };
