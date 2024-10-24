"use client";
import { useTheme } from "@/hooks/useTheme";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  SharedSelection,
} from "@nextui-org/react";

export default function RightMenu() {
  const { isDark, setIsDark } = useTheme();

  const handleChange = (keys: SharedSelection) => {
    if (!keys.anchorKey) return;

    if (keys.anchorKey === "switch") {
      setIsDark(!isDark);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize min-w-10"
          radius="full"
        >
          {isDark ? "🌙" : "☀️"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={isDark ? "🌙" : "☀️"}
        onSelectionChange={handleChange}
      >
        <DropdownItem key="switch">切换模式</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
