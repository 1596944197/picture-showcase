import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const key = "_theme";

const useTheme = () => {
  const [isDark, setIsDark] = useState<Theme>("light");

  function setDarkTheme() {
    document.documentElement.style.setProperty("--background", "#0a0a0a");
    document.documentElement.style.setProperty("--foreground", "#ededed");
    document.body.classList.add("dark");
    localStorage.setItem(key, "dark");
    setIsDark("dark");
  }

  function setLightTheme() {
    document.documentElement.style.setProperty("--background", "#ffffff");
    document.documentElement.style.setProperty("--foreground", "#171717");
    document.body.classList.remove("dark");
    localStorage.setItem(key, "light");
    setIsDark("light");
  }

  useEffect(() => {
    const __theme = localStorage.getItem(key);
    if (__theme === isDark) return;
    if (__theme === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [isDark]);

  return { isDark, setIsDark };
};

export { useTheme };
