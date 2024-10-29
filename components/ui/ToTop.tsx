"use client";
import { useScrollHeight } from "@/components/provider/ScrollProvider";
import { ArrowUpToLine } from "lucide-react";

const ToTop = () => {
  const { scrollHeight } = useScrollHeight("/");

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={handleClick}
      className="fixed bottom-4 right-4 w-10 h-10 rounded-full bg-white dark:bg-black border border-gray-300 dark:border-gray-600 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-gray-800 dark:hover:border-gray-400"
      style={{ display: scrollHeight > 400 ? "block" : "none" }}
    >
      <div className="flex items-center justify-center h-full w-full">
        <ArrowUpToLine />
      </div>
    </div>
  );
};

export { ToTop };
