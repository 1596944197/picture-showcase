import { Image } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";

const Logo: NextPage = () => {
  return (
    <Link href="/" className="select-none">
      <Image src="/logo.svg" alt="Logo" width={36} height={36} />
    </Link>
  );
};

export default Logo;
