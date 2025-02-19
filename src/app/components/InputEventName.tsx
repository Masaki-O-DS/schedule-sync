"use client";
import { eventInfoAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import {
  clientDecodeBase64Json,
  clientEncodeBase64Json,
} from "../utils/sessionStorageUtils";

const InputEventName = () => {
  const [eventInfo, setEventInfo] = useAtom(eventInfoAtom);

  //sessionStorageにeventNameがあればセットする
  useEffect(() => {
    const storedData = sessionStorage.getItem("eventName");
    const decodedData = clientDecodeBase64Json<string>(storedData);
    setEventInfo((prev) => ({
      ...prev,
      eventName: decodedData ? decodedData : "",
    }));
  }, []);

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEventInfo((prev) => ({ ...prev, eventName: newValue }));
    const encodedData = clientEncodeBase64Json<string>(newValue);
    if (encodedData) {
      sessionStorage.setItem("eventName", encodedData);
    }
  };

  return (
    <div className="flex w-5/6 md:w-3/4 lg:w-2/4 gap-2 md:gap-5 lg:gap-10">
      <p className="text-sm md:text-lg font-semibold w-36 lg:w-40 ">
        イベント名
      </p>
      <input
        type="text"
        maxLength={12}
        className="rounded-sm border-gray-400 text-xs md:text-base p-1 border-solid border border-opacity-50 w-full"
        placeholder="イベント名を記入"
        onChange={(e) => handleEdit(e)}
        value={eventInfo.eventName}
      />
    </div>
  );
};

export default InputEventName;
