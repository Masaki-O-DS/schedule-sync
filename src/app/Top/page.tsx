import React from "react";
import { TopHeader } from "./components/TopHeader";
import TopImage from "./components/TopImage";
import TopTitle from "./components/TopTitle";
import TopButtons from "./components/TopButtons";

const Top = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <TopHeader />
      <div className="flex flex-1 w-full justify-center gap-20 items-center">
        <TopImage />
        <div>
          <TopTitle />
          <TopButtons />
        </div>
      </div>
    </div>
  );
};

export default Top;
