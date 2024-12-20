"use client";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = function EnhancedNav() {
  const pathname = usePathname(); // Use Next.js navigation hook to get the current path
  const router = useRouter();
  const links = [
    { href: "/", label: "首页" },
    { href: "/timeline", label: "Examples" },
  ];

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <NavUi
      {...{
        pathname,
        links,
        handleClick,
      }}
    />
  );
};

type Props = {
  pathname: string;
  links: { href: string; label: string }[];
  handleClick: (href: string) => void;
};
const NavUi = ({ pathname, links, handleClick }: Props) => {
  return (
    <nav className="flex gap-6 flex-wrap items-center justify-center ml-8">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
                relative flex items-center gap-2 py-2 px-1
                transition-colors duration-200 nav
                ${isActive ? "text-red-500" : "text-gray-800 dark:text-white"}
                hover:scale-105 transition ease-in-out duration-400
                text-lg
              `}
            rel="noopener noreferrer"
            onClick={() => handleClick(link.href)}
          >
            {link.label}
            <span
              className={`
                  absolute bottom-0 left-0 w-full h-0.5
                  bg-gray-800 transform transition-transform
                  ${isActive ? "scale-x-100" : "scale-x-0"}
                  hover:bg-secondary hover:text-secondary-foreground
                  transition ease-in-out duration-500
                  bg-gray-800 origin-center
                  dark:bg-white
                `}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export { Nav };
