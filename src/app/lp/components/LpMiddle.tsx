import Image from "next/image";
import React from "react";

export const LpMiddle = () => {
  return (
    <div
      className="h-auto w-full flex flex-col items-center bg-bgGrayColor"
      id="features"
    >
      <h1 className="font-extrabold text-4xl mt-10 mb-6">
        ScheduleSyncの3つの特徴
      </h1>

      {/* 1つ目の特徴 */}

      <div className="w-full">
        <div className="flex justify-center py-5 gap-10">
          <p className="font-extrabold text-9xl">1</p>
          <div className="bg-bgMyColor w-3/5 rounded-md border-solid border-2 border-yellow-700 shadow-custom-right p-2">
            <div className="flex items-center px-10 pt-2">
              <Image
                src={"/drag.png"}
                width={30}
                height={30}
                style={{ width: "auto", height: "auto" }}
                alt="drag icon"
              ></Image>
              <p className="text-xl ml-3 font-semibold">
                ドラッグスケジューリング
              </p>
            </div>
            <hr className="ml-10 w-3/4" />
            <p className="py-3 px-10 break-words">
              参加できない時間帯をドラッグして範囲選択することで入力の手間を省くことができます
            </p>
          </div>
        </div>
      </div>

      {/* 2つ目の特徴 */}

      <div className="w-full">
        <div className="flex justify-center py-5 gap-10 items-center">
          <div className="bg-bgMyColor w-3/5  rounded-md border-solid border-2 border-yellow-700 shadow-custom-right flex flex-col justify-end p-2">
            <div className="flex items-center px-10 pt-2 justify-end">
              <p className="text-xl mr-3 font-semibold">
                全員が参加できる日程を見つけ出せる
              </p>
              <Image
                src={"/glass.svg"}
                width={25}
                height={25}
                alt="drag icon"
              ></Image>
            </div>
            <hr className=" w-3/4 ml-auto mr-10" />
            <p className="py-3 px-10 break-words">
              日程調整を行いたいメンバーとURLを共有することで全員と日程調整が行えます。さらに、メンバーが参加できない日程を記入することで必ず参加できる日程を見つけることができます。
            </p>
          </div>
          <p className="font-extrabold text-9xl">2</p>
        </div>
      </div>

      {/* 3つ目の特徴 */}

      <div className="w-full">
        <div className="flex justify-center py-5 gap-10 mb-14">
          <p className="font-extrabold text-9xl">3</p>
          <div className="bg-bgMyColor w-3/5 rounded-md border-solid border-2 border-yellow-700 shadow-custom-right p-2">
            <div className="flex items-center px-10 pt-2">
              <Image src={"/bell.svg"} width={20} height={20} alt="drag icon" />
              <p className="text-xl ml-3 font-semibold">通知機能</p>
            </div>
            <hr className="ml-10 w-3/4" />
            <p className="py-3 px-10 break-words">
              リマインドメール機能、未回答のメンバーの可視化機能、催促するための文章を生成し、催促の案内を簡単にすることができます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
