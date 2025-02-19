import React from "react";
import { LpNav } from "./LpNav";

export const Header = () => {
  return (
    <div className="w-full z-20 h-12 sticky top-0 flex items-center justify-between border-b-2 backdrop-blur-md  ">
      <h1 className="font-bold text-base md:text-xl lg:text-2xl ml-3 md:ml-6 lg:ml-10 ">
        Schedule-Sync
      </h1>
      <LpNav />
    </div>
  );
};
