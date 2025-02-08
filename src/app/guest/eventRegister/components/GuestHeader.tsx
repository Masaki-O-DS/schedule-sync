import React from "react";
import Nav from "../../components/Nav";

export const GuestHeader = () => {
  return (
    <div className="w-full  h-12 sticky top-0 flex items-center justify-between border-b-2 backdrop-blur-md  ">
      <h1 className="font-bold text-2xl ml-10">Schedule-Sync</h1>
      <Nav />
    </div>
  );
};
