"use client";

import { Button } from "@/app/components/button";
import DragSchedule from "@/app/components/DragSchedule";
import EventName from "@/app/components/EventName";
import {
  eventDetailAtom,
  eventIdAtom,
  eventNameAtom,
  unavailableTimesAtom,
} from "@/store/atoms";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";

export default function Page() {
  const [unavailableTimes, setUnavailableTimes] = useAtom(unavailableTimesAtom);
  const [eventId, setEventId] = useAtom(eventIdAtom);

  //linkshareページに飛ぶとともにfirestoreにデータを保管
  const handleClick = () => {
    const compressedData = Buffer.from(
      JSON.stringify(unavailableTimes)
    ).toString("base64");

    sessionStorage.setItem("unavailableTimes", compressedData);

    setEventId(nanoid());

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
