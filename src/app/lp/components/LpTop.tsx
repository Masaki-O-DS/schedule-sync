import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";

const LpTop = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center gap-20 my-20 ">
      <div className="flex flex-col w-auto items-center">
        <h1 className="font-bold text-3xl">簡単に一回でスケジュール調整</h1>
        <p className="text-sm mt-3 font-medium">
          やりとりの多いスケジュール調整にさようなら。
          <br />
          ScheduleSyncは、柔軟で直感的、そしてリアルタイムな
          <br />
          スケジューリングを実現します
        </p>
        <div className="mt-10">
          <Button>今すぐ始める</Button>
        </div>
      </div>
      <Image
        src={"/calendar.jpg"}
        width={500}
        height={500}
        alt=""
        priority={true}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default LpTop;
