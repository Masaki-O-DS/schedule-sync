import React from "react";

export const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-full z-20 h-8 md:h-12 sticky top-0 flex items-center justify-between border-b-2 backdrop-blur-md  ">
      <h1 className="font-bold text-sm md:text-2xl  ml-5 md:ml-10">
        Schedule-Sync
      </h1>
      {children}
    </div>
  );
};
