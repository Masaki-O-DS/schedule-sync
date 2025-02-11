"use client";

import { Button } from "@/app/components/button";
import DragSchedule from "@/app/components/DragSchedule";
import EventName from "@/app/components/EventName";
import {
  eventDetailAtom,
  eventNameAtom,
  unavailableTimesAtom,
} from "@/store/atoms";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";

export default function Page() {
  const [unavailableTimes, setUnavailableTimes] = useAtom(unavailableTimesAtom);
  const [eventName, setEventName] = useAtom(eventNameAtom);
  const [eventDetail, setEventDetail] = useAtom(eventDetailAtom);
  const handleClick = () => {
    const compressedEventName = Buffer.from(JSON.stringify(eventName)).toString(
      "base64"
    );
    const compressedEventDetail = Buffer.from(
      JSON.stringify(eventDetail)
    ).toString("base64");
    const compressedData = Buffer.from(
      JSON.stringify(unavailableTimes)
    ).toString("base64");
    sessionStorage.setItem("eventName", compressedEventName);
    sessionStorage.setItem("eventDetail", compressedEventDetail);
    sessionStorage.setItem("unavailableTimes", compressedData);

    const id = nanoid();

    //ここでfireStoreに格納する処理を書く 全てのイベントを
  };
  return (
    <div className="flex-col flex items-center ">
      <div className="flex justify-around h-20 items-center w-2/4">
        <EventName />
        <Link href={"/linkshare"}>
          <Button onClick={handleClick}>確定</Button>
        </Link>
      </div>
      <DragSchedule></DragSchedule>
    </div>
  );
}
