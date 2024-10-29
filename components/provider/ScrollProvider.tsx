"use client";
import { debounce } from "radash";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const pathnameMap = new Map();
const ScrollContext = createContext({
  scrollHeight: 0,
  pathnameMap,
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = debounce({ delay: 200 }, () => {
      const currentPath = window.location.pathname;
      pathnameMap.set(currentPath, window.scrollY);
      setScrollHeight(window.scrollY);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathnameMap]);

  return (
    <ScrollContext.Provider value={{ scrollHeight, pathnameMap }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollHeight = (pathname: string) => {
  const { pathnameMap } = useContext(ScrollContext);

  return {
    scrollHeight: pathnameMap.get(pathname) || 0,
  };
};
