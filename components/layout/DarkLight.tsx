"use client";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@nextui-org/react";

export function DarkLight() {
  const { isDark, setIsDark } = useTheme();

  const handleChange = () => {
    setIsDark(!isDark);
  };

  return <DarkLightUi {...{ isDark, handleChange }} />;
}

type Props = {
  isDark: boolean;
  handleChange: () => void;
};
const DarkLightUi = (props: Props) => {
  return (
    <Button
      onClick={props.handleChange}
      variant="bordered"
      className="capitalize min-w-10"
      radius="full"
    >
      {props.isDark ? "🌙" : "☀️"}
    </Button>
  );
};
