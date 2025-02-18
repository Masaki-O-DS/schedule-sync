"use client";
import { eventInfoAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import React from "react";

const ShareEventDetail = () => {
  const [eventInfo] = useAtom(eventInfoAtom);
  return (
    <fieldset className="border flex justify-start p-3 w-full border-gray-200 font-bold text-xl  text-slate-200">
      <legend className="">
        <p className="px-2">イベント詳細</p>
      </legend>
      <p className="text-lg font-semibold w-full h-28 overflow-y-scroll">
        {eventInfo.eventDetail}
      </p>
    </fieldset>
  );
};

export default ShareEventDetail;
