import { throttle } from "radash";
import { useEffect, useState } from "react";

const pathnameMap = new Map();

const useScrollHeight = (urlMatch?: string) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const handleScroll = throttle({ interval: 500 }, () => {
      const currentPath = window.location.pathname;
      if (urlMatch !== currentPath) return;
      pathnameMap.set(currentPath, window.scrollY);
      setScrollHeight(window.scrollY);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return { scrollHeight, pathnameMap };
};

export { useScrollHeight };
