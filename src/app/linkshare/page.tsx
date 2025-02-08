import React from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../guest/components/Nav";
import { Button } from "../components/button";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Header>
        {/* ログインしている場合とログアウトしている場合で表示を変える */}
        <Nav />
      </Header>
      <div className="h-full flex justify-center items-center">
        <div className="bg-neutral-800 w-2/4 h-3/5 rounded-lg p-10">
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <div className="text-white gap-2 flex flex-col justify-start items-start">
              <p className="w-32 font-semibold text-lg">イベント名 : </p>
              <p className="w-96 font-semibold text-lg">チームミーティング</p>
            </div>
            <div className="text-white flex-col gap-2 justify-start items-start">
              <p className="w-32 font-semibold text-lg">イベント詳細 : </p>
              <p className="w-96 h-24 font-semibold  overflow-y-scroll  break-words  text-lg ">
                チームミーティング
              </p>
            </div>
            <div className=" flex w-full justify-center items-end gap-5">
              <input
                type="text"
                className="w-96 overflow-x-scroll rounded-sm h-8 p-1"
                readOnly
                value="jfaoiwehj/aweofao"
              />
              <Button className="bg-bgMyColor text-black text-lg h-8 hover:bg-red-400 hover:text-white">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
