import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mt-0 mx-auto sm:pl-3 sm:w-4/5 w-full">{children}</main>
  );
};

export default Main;
