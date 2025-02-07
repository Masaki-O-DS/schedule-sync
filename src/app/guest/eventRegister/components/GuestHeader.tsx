import React from "react";
import GuestNav from "./GuestNav";

export const GuestHeader = () => {
  return (
    <div className="w-full  h-12 sticky top-0 flex items-center justify-between border-b-2 backdrop-blur-md  ">
      <h1 className="font-bold text-2xl ml-10">Schedule-Sync</h1>
      <GuestNav />
    </div>
  );
};
