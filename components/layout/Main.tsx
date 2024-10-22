import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-max max-w-[1280px] mt-0 mx-auto sm:pl-3">
      {children}
    </main>
  );
};

export default Main;
