"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ArrowUpToLine } from "lucide-react";

export function ControlDropButton() {
  return (
    <div className="fixed bottom-4 right-12">
      <Dropdown>
        <DropdownTrigger>
          <div className=" w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-gray-800 dark:hover:border-gray-400 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <ArrowUpToLine />
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new" className="hover:bg-gray-100">
            New file
          </DropdownItem>
          <DropdownItem key="copy" className="hover:bg-gray-100">
            Copy link
          </DropdownItem>
          <DropdownItem key="edit" className="hover:bg-gray-100">
            Edit file
          </DropdownItem>
          <DropdownItem key="delete" className="hover:bg-red-100 text-red-600">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
