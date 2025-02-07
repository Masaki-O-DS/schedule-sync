import React from "react";
import { LpNav } from "../components/LpNav";

export const Header = () => {
  return (
    <div className="w-full z-20 h-12 sticky top-0 flex items-center justify-between border-b-2 backdrop-blur-md  ">
      <h1 className="font-bold text-2xl ml-10">Schedule-Sync</h1>
      <LpNav />
    </div>
  );
};
