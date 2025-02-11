"use client";
import { Button } from "@/app/components/button";
import Link from "next/link";
import React from "react";

const TopButtons = () => {
  const handleClick = () => {
    //イベント情報をsessionStorageで保管するために初期化s
    const possibleDates: string[] = [];
    const unavailableTimes: string[] = [];
    const compressedPossibleDates = Buffer.from(
      JSON.stringify(possibleDates)
    ).toString("base64");
    const compressedUnavailableDates = Buffer.from(
      JSON.stringify(unavailableTimes)
    ).toString("base64");
    sessionStorage.setItem("eventName", "");
    sessionStorage.setItem("eventDetail", "");
    sessionStorage.setItem("possibleDates", compressedPossibleDates);
    sessionStorage.setItem("unavailableTimes", compressedUnavailableDates);
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
