import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <main className="w-full bg-black h-max">{children}</main>;
};

export default Main;
