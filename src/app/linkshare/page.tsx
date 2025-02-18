import React from "react";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../guest/components/Nav";
import CopyLinkButton from "./components/CopyLinkButton";
import ShareEventName from "./components/ShareEventName";
import ShareEventDetail from "./components/ShareEventDetail";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Header>
        {/* ログインしている場合とログアウトしている場合で表示を変える */}
        <Nav />
      </Header>
      <div className="h-full flex justify-center items-center">
        <div className="bg-slate-800 flex flex-col justify-around   new type(arguments) w-3/4 h-4/5 rounded-lg p-10">
          <div className="flex flex-col gap-y-5 justify-center items-center">
            <ShareEventName />
            <ShareEventDetail />
          </div>
          <CopyLinkButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
