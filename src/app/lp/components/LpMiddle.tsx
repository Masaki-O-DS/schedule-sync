import Image from "next/image";
import React from "react";

export const LpMiddle = () => {
  return (
    <div
      className="h-auto w-full flex flex-col items-center bg-bgGrayColor"
      id="features"
    >
      <h1 className="font-extrabold text-2xl md:text-4xl mt-14 mb-4 lg:mb-6">
        ScheduleSyncの3つの特徴
      </h1>

      {/* 1つ目の特徴 */}

      <div className="w-full">
        <div className="flex justify-center items-center py-5 gap-5 md:gap-10">
          <p className="font-extrabold text-5xl md:text-7xl lg:text-9xl">1</p>
          <div className="bg-bgMyColor w-4/5 lg:w-3/5 rounded-md border-solid border-2 border-yellow-700 shadow-custom-right md:p-2">
            <div className="flex items-center px-3 md:px-10 pt-2 my-2 md:my-0 md:mb-2">
              <Image
                src={"/drag.png"}
                width={30}
                height={30}
                style={{ width: "auto", height: "auto" }}
                alt="drag icon"
                className="ml-2"
              ></Image>
              <p className="text-md md:text-xl ml-3 font-semibold">
                ドラッグスケジューリング
              </p>
            </div>
            <hr className="md:ml-10 md:w-3/4 w-5/6 ml-4" />
            <p className="py-3 md:px-10 px-5 break-words text-xs md:text-sm">
              参加できない時間帯をドラッグして範囲選択することで入力の手間を省くことができます
            </p>
          </div>
        </div>
      </div>

      {/* 2つ目の特徴 */}

      <div className="w-full">
        <div className="flex justify-center items-center py-5 gap-5 md:gap-10 ">
          <div className="bg-bgMyColor w-4/5 lg:w-3/5  rounded-md border-solid border-2 border-yellow-700 shadow-custom-right flex flex-col justify-end p-2">
            <div className="flex items-center md:px-10 px-2 pt-2 justify-end">
              <p className="text-md md:text-xl md:mr-3 text-center  font-semibold">
                全員が参加できる日程を見つけ出せる
              </p>
              <Image
                src={"/glass.svg"}
                width={25}
                height={25}
                alt="drag icon"
                className="ml-1"
              ></Image>
            </div>
            <hr className=" w-5/6 ml-auto mr-5 md:mr-10" />
            <p className="py-3 md:px-10 px-2 text-xs md:text-sm break-words">
              日程調整を行いたいメンバーとURLを共有することで全員と日程調整が行えます。さらに、メンバーが参加できない日程を記入することで必ず参加できる日程を見つけることができます。
            </p>
          </div>
          <p className="font-extrabold text-5xl md:text-7xl lg:text-9xl">2</p>
        </div>
      </div>

      {/* 3つ目の特徴 */}

      <div className="w-full">
        <div className="flex justify-center items-center py-5 gap-5 md:gap-10 mb-14">
          <p className="font-extrabold text-5xl md:text-7xl lg:text-9xl">3</p>
          <div className="bg-bgMyColor w-4/5 lg:w-3/5 rounded-md border-solid border-2 border-yellow-700 shadow-custom-right md:p-2">
            <div className="flex items-center px-3 md:px-10 pt-2 my-2 md:my-0 md:mb-2">
              <Image
                src={"/bell.svg"}
                width={20}
                height={20}
                alt="drag icon"
                className="ml-2"
              />
              <p className="text-md md:text-xl ml-3 font-semibold">通知機能</p>
            </div>
            <hr className="md:ml-10 md:w-3/4 w-5/6 ml-4" />
            <p className="py-3 md:px-10 px-5 break-words text-xs md:text-sm">
              リマインドメール機能、未回答のメンバーの可視化機能、催促するための文章を生成し、催促の案内を簡単にすることができます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
