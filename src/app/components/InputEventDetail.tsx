"use client";

import { eventInfoAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import {
  clientDecodeBase64Json,
  clientEncodeBase64Json,
} from "../utils/sessionStorageUtils";

const InputEventDetail = () => {
  const [eventInfo, setEventInfo] = useAtom(eventInfoAtom);

  //sessionStorageにeventDetailがあればセットeventDetail状態にセットする
  useEffect(() => {
    const storedData = sessionStorage.getItem("eventDetail");
    const decodedData = clientDecodeBase64Json<string>(storedData);
    setEventInfo((prev) => ({
      ...prev,
      eventDetail: decodedData ? decodedData : "",
    }));
  }, []);

  const handleEdit = (e: { target: { value: string } }) => {
    const newValue = e.target.value;
    setEventInfo((prev) => ({ ...prev, eventDetail: newValue }));
    const encodedData = clientEncodeBase64Json<string>(newValue);
    if (encodedData) {
      sessionStorage.setItem("eventDetail", encodedData);
    }
  };
  return (
    <div className="flex w-5/6 md:w-3/4 lg:w-2/4 gap-2 md:gap-5 lg:gap-10 mb-2 md:mb-4 lg:mb-8">
      <p className="text-sm md:text-lg font-semibold w-36 lg:w-40">
        イベント詳細
      </p>
      <textarea
        className="rounded-sm border-gray-400 text-xs md:text-base  border-solid border border-opacity-50 p-1 w-full h-auto"
        name=""
        id=""
        placeholder="開催場所や開催理由、イベントの内容を記入"
        onChange={(e) => handleEdit(e)}
        value={eventInfo.eventDetail}
      ></textarea>
    </div>
  );
};

export default InputEventDetail;
