"use client";
import { Button } from "@/app/components/button";
import Link from "next/link";
import React from "react";

const TopButtons = () => {
  const handleClick = () => {
    //イベント情報をsessionStorageで保管するために初期化
    try {
      sessionStorage.setItem("eventName", "");
    } catch {
      console.log("sessionStorageのeventNameを初期化できませんでした");
    }
    try {
      sessionStorage.setItem("eventDetail", "");
    } catch {
      console.log("sessionStorageのeventDetailを初期化できませんでした");
    }
    try {
      sessionStorage.setItem("possibleDates", "");
    } catch {
      console.log("sessionStorageのpossibleDatesを初期化できませんでした");
    }
    try {
      sessionStorage.setItem("unavailableTimes", "");
    } catch {
      console.log("sessionStorageのunavailableTimesを初期化できませんでした");
    }
  };
  return (
    <div className="flex flex-col gap-y-4 w-56 mt-5">
      <Link href={"/guest/eventRegister"} className="w-full">
        <Button onClick={handleClick} className="h-10 text-md w-full">
          Guest User
        </Button>
      </Link>

      <Button className="h-10 text-md">Google Login</Button>
      <Button className="h-10 text-md">使い方</Button>
    </div>
  );
};

export default TopButtons;
