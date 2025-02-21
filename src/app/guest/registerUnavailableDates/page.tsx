"use client";

import { Button } from "@/app/components/button";
import DragSchedule from "@/app/components/DragSchedule";
import EventName from "@/app/components/EventName";
import {
  eventIdAtom,
  eventInfoAtom,
  unavailableDatesAtom,
} from "@/store/atoms";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";
import { nanoid } from "nanoid";
import { addData } from "../../../../services/fireStore/guestCrud";
import { clientEncodeBase64Json } from "@/app/utils/sessionStorageUtils";

interface UnavailableDates {
  [key: string]: number[];
}

export default function Page() {
  const [eventInfo] = useAtom(eventInfoAtom);
  const [unavailableTimes] = useAtom(unavailableDatesAtom);
  const [eventId, setEventId] = useAtom(eventIdAtom);

  //linkshareページに飛ぶとともにfirestoreにデータを保管
  const handleClick = () => {
    //ブラウザバックした時に以前の選択したデータを反映させるためにsessionStorageに保管
    const encodedData =
      clientEncodeBase64Json<UnavailableDates>(unavailableTimes);
    if (encodedData) {
      sessionStorage.setItem("unavailableTimes", encodedData);
    }
    const uniqueId = nanoid();

    setEventId(uniqueId);

    if (eventId === undefined) {
      console.error("idがセットされていない");
    }
    //ここでfireStoreに格納する処理を書く
    if (eventInfo.possibleDates) {
      addData(
        uniqueId,
        eventInfo.eventName,
        eventInfo.eventDetail,
        eventInfo.possibleDates,
        unavailableTimes,
        new Date()
      );
    }
  };

  return (
    <div className="flex-col flex items-center ">
      <div className="flex justify-around h-20 items-center w-5/6 md:w-3/4 lg:w-2/4">
        <EventName source="session" />
        <Link href={"/linkshare"}>
          <Button
            className="cursor-pointer md:text-base text-sm w-10 md:w-20"
            onClick={handleClick}
          >
            確定
          </Button>
        </Link>
      </div>
      <DragSchedule
        // unavailableDatesProp={unavailableTimes}
        source={"session"}
        possibleDates={eventInfo.possibleDates}
      ></DragSchedule>
    </div>
  );
}
