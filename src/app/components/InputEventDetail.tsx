"use client";

import { eventDetailAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

const InputEventDetail = () => {
  const [eventDetail, setEventDetail] = useAtom(eventDetailAtom);

  //sessionStorageにeventDetailがあればセットeventDetail状態にセットする
  useEffect(() => {
    const storedData = sessionStorage.getItem("eventDetail");
    const decompressedData = storedData
      ? JSON.parse(Buffer.from(storedData, "base64").toString())
      : null;
    setEventDetail(decompressedData ? decompressedData : "");
  }, []);

  const handleEdit = (e: { target: { value: string } }) => {
    const newValue = e.target.value;
    const compressedData = Buffer.from(JSON.stringify(newValue)).toString(
      "base64"
    );
    setEventDetail(e.target.value);
    sessionStorage.setItem("eventDetail", compressedData);
  };
  return (
    <div className="flex w-2/4 gap-10 mb-10">
      <p className="text-lg font-semibold w-36">イベント詳細</p>
      <textarea
        className="rounded-sm border-gray-400 border-solid border border-opacity-50 p-1 w-full h-auto"
        name=""
        id=""
        placeholder="開催場所や開催理由、イベントの内容を記入"
        onChange={(e) => handleEdit(e)}
        value={eventDetail}
      ></textarea>
    </div>
  );
};

export default InputEventDetail;
