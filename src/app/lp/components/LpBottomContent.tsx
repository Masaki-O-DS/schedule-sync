import Image from "next/image";
import React from "react";
import { Button } from "../../components/button";

const LpBottomContent = () => {
  return (
    <div>
      <ul className="flex flex-col gap-y-10">
        <li className="flex gap-14 justify-center items-center">
          <Image
            src={"/calendar.svg"}
            width={40}
            height={30}
            alt="calendar icon"
            className="flex-shrink-0"
          />
          <p className="text-xl w-2/4">
            スケジュール作成の時間と労力を大幅に削減
          </p>
        </li>
        <li className="flex gap-14 justify-center items-center ">
          <Image
            src={"/calendar.svg"}
            width={40}
            height={30}
            alt="calendar icon"
          />
          <p className="text-xl w-2/4">
            リアルタイムの可視化による迅速な意思決定
          </p>
        </li>
        <li className="flex gap-14 justify-center items-center ">
          <Image
            src={"/calendar.svg"}
            width={40}
            height={30}
            alt="calendar icon"
          />
          <p className="text-xl w-2/4">
            細かい時間枠による柔軟なスケジューリング
          </p>
        </li>
        <li className="flex gap-14 justify-center items-center ">
          <Image
            src={"/calendar.svg"}
            width={40}
            height={30}
            alt="calendar icon"
          />
          <p className="text-xl w-2/4">
            Googleアカウントの有無に関わらず幅広いユーザーが利用可能
          </p>
        </li>
        <li className="flex gap-14 justify-center items-center mb-14">
          <Image
            src={"/calendar.svg"}
            width={40}
            height={30}
            alt="calendar icon"
          />
          <p className="text-xl w-2/4">
            外出先でもスケジュール管理がしやすいモバイル最適化
          </p>
        </li>
      </ul>
      <div className="bg-black py-10 flex flex-col items-center">
        <div>
          <p className="text-white my-1 text-center font-semibold text-xl">
            スケジュール管理をもっとシンプルにしませんか？
          </p>
          <p className="text-white text-center font-semibold text-xl">
            簡単に効率よく日程調整をして、今日から時間を節約しましょう！
          </p>
        </div>
        <Button className="bg-bgMyColor text-black text-xl mt-5 mb-4 h-10 w-96">
          Try ScheduleSync for Free
        </Button>
      </div>
    </div>
  );
};

export default LpBottomContent;
