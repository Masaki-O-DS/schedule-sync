import Image from "next/image";
import React from "react";
import { Button } from "../../components/button";
import Link from "next/link";

const LpTop = () => {
  return (
    <div className="w-full h-auto grid justify-items-center grid-rows-2 md:flex justify-center items-center gap-5 md:gap-10 lg:gap-20 my-20 ">
      <div className="w-64 md:w-[300px] lg:w-[500px] h-auto ">
        <Image
          src={"/calendar.jpg"}
          width={500}
          height={500}
          alt=""
          priority={true}
          className="w-full h-auto"
        />
      </div>
      <div className=" flex-col flex  w-auto justify-center items-center">
        <h1 className="font-bold text-base md:text-xl xl:text-3xl">
          簡単に一回でスケジュール調整
        </h1>
        <p className="text-sm mt-3 font-medium w-52 md:w-">
          やりとりの多いスケジュール調整にさようなら。
          ScheduleSyncは、柔軟で直感的、そしてリアルタイムな
          スケジューリングを実現します
        </p>
        <div className="mt-10">
          <Link href={"/top"}>
            <Button>今すぐ始める</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LpTop;
