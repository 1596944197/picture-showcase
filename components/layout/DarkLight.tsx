"use client";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@nextui-org/react";

export default function RightMenu() {
  const { isDark, setIsDark } = useTheme();

  const handleChange = () => {
    setIsDark(!isDark);
  };

  return (
    <Button
      onClick={handleChange}
      variant="bordered"
      className="capitalize min-w-10"
      radius="full"
    >
      {isDark ? "🌙" : "☀️"}
    </Button>
  );
}
