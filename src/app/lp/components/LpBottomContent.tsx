import Image from "next/image";
import React from "react";
import { Button } from "../../components/button";
import Link from "next/link";

const LpBottomContent = () => {
  const textArray: string[] = [
    "スケジュール作成の時間と労力を大幅に削減",
    "リアルタイムの可視化による迅速な意思決定",
    "細かい時間枠による柔軟なスケジューリング",
    "Googleアカウントなしでも利用可能",
    "外出先でもスケジュール管理がしやすいモバイル最適化",
  ];
  return (
    <div>
      <ul className="flex flex-col gap-y-10 mb-10">
        {textArray.map((text, index) => (
          <li
            key={index}
            className="flex gap-2 md:gap-8 lg:gap-14 justify-center items-center"
          >
            <Image
              src={"/calendar.svg"}
              width={40}
              height={30}
              alt="calendar icon"
              className="flex-shrink-0 w-[25px] h-auto md:w-[50px] md:h-auto"
            />
            <p className="text-sm md:text-xl w-[300px] md:w-[500px] lg:w-2/4">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="bg-black py-8 md:py-10 flex flex-col items-center">
        <div>
          <p className="text-white my-1 text-center font-semibold mx-2 text-sm md:text-xl">
            スケジュール管理をもっとシンプルにしませんか？
          </p>
          <p className="text-white text-center font-semibold mx-2 text-sm md:text-xl">
            簡単に効率よく日程調整をして、今日から時間を節約しましょう！
          </p>
        </div>
        <Link href={"top"}>
          <Button className="bg-bgMyColor text-black md:text-xl text:md  mt-5 md:mb-4 mb-0 h-10 w-60 md:w-96 active:bg-slate-500">
            Try ScheduleSync for Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LpBottomContent;
