"use client";
import { eventInfoAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import React from "react";

const ShareEventName = () => {
  const [eventInfo] = useAtom(eventInfoAtom);
  return (
    <fieldset className="border flex justify-start py-1 px-5 w-full border-gray-200 font-bold text-xl  text-slate-200">
      <legend className="">
        <p className="px-2 text-sm md:text-base">イベント名</p>
      </legend>
      <p className="py-2 text-sm md:text-base font-semibold">
        {eventInfo.eventName}
      </p>
    </fieldset>
  );
};

export default ShareEventName;
