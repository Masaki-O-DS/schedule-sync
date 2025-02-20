import React from "react";
import TopImage from "./components/TopImage";
import TopTitle from "./components/TopTitle";
import TopButtons from "./components/TopButtons";
import { Header } from "../components/Header";

const Top = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="lg:flex lg:flex-1 w-full grid-rows-2 mt-10 lg:mt-0 grid justify-items-center lg:justify-center lg:gap-20 lg:items-center">
        <TopImage />
        <div className="lg:mt-0 md:mt-10 mt-3">
          <TopTitle />
          <TopButtons />
        </div>
      </div>
    </div>
  );
};

export default Top;
