"use client";
import { useScrollHeight } from "@/hooks/useScrollHeight";
import { useTheme } from "@/hooks/useTheme";
import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";

const ToTop = () => {
  const { scrollHeight } = useScrollHeight("/");
  const [scrollPercent, setScrollPercent] = useState(0);
  const { isDark } = useTheme();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;
      const currentScroll = (scrollTop / totalScroll) * 100;
      setScrollPercent(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`fixed bottom-4  w-12 h-12 cursor-pointer transition-opacity duration-300 transform ${
        scrollHeight > 400
          ? "opacity-100 scale-100 right-4"
          : "opacity-0 scale-95 -right-28"
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center rounded-full bg-white dark:bg-black shadow-lg border border-gray-300 dark:border-gray-600">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(
              ${isDark ? "#232e33" : "#6baf8d"} ${scrollPercent}%,
              transparent ${scrollPercent}%
            )`,
            mask: "radial-gradient(farthest-side, transparent 90%, black 100%)",
          }}
        ></div>
        <ArrowUpToLine className="relative z-10" />
      </div>
    </div>
  );
};

export { ToTop };
