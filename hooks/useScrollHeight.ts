"use client";
import { debounce } from "radash";
import { useEffect, useState } from "react";

let scrollManagerInstance: ReturnType<typeof createScrollManager> | null = null;

const createScrollManager = () => {
  const pathnameMap = new Map();
  const listeners = new Set<Function>();

  const notifyListeners = (currentPath: string) => {
    const currentScrollHeight = pathnameMap.get(currentPath) || 0;
    listeners.forEach((listener) => listener(currentPath, currentScrollHeight));
  };

  const handleScroll = debounce({ delay: 100 }, () => {
    const currentPath = window.location.pathname;
    const currentScrollY = window.scrollY;
    pathnameMap.set(currentPath, currentScrollY);
    notifyListeners(currentPath);
  });

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return {
    subscribe: (listener: Function) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getScrollHeight: (pathname: string): number => {
      return pathnameMap.get(pathname) || 0;
    },
  };
};

// 保证 ScrollManager 是单例
const getScrollManager = () => {
  if (!scrollManagerInstance) {
    scrollManagerInstance = createScrollManager();
  }
  return scrollManagerInstance;
};

const useScrollHeight = (pathname: string) => {
  const store = getScrollManager();
  const [scrollHeight, setScrollHeight] = useState(
    store.getScrollHeight(pathname)
  );

  const updateHeight = (currentPath: string, currentScrollHeight: number) => {
    if (currentPath === pathname) {
      setScrollHeight(currentScrollHeight);
    }
  };

  useEffect(() => {
    const scrollManager = store;

    // 订阅当前更新高度的函数
    const unsubscribe = scrollManager.subscribe(updateHeight);

    // 清理函数以解除订阅
    return () => {
      unsubscribe();
    };
  }, [pathname]);

  return {
    scrollHeight,
  };
};

export { useScrollHeight };
