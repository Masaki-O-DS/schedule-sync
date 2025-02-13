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
    <div className="flex w-2/4 gap-10">
      <p className="text-lg font-semibold w-36 ">イベント名</p>
      <input
        type="text"
        className="rounded-sm border-gray-400 p-1 border-solid border border-opacity-50 w-full"
        placeholder="イベント名を記入"
        onChange={(e) => handleEdit(e)}
        value={eventInfo.eventName}
      />
    </div>
  );
};

export default InputEventName;
