"use client";
import React, { useEffect, useState } from "react";

const InputEventName = () => {
  const [eventName, setEventName] = useState("");

  //sessionStorageにeventNameがあればセットする
  useEffect(() => {
    const storedData = sessionStorage.getItem("eventName");
    const decompressedData = storedData
      ? JSON.parse(Buffer.from(storedData, "base64").toString())
      : null;
    setEventName(decompressedData ? decompressedData : "");
  }, []);

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const compressedData = Buffer.from(JSON.stringify(newValue)).toString(
      "base64"
    );
    setEventName(newValue);
    sessionStorage.setItem("eventName", compressedData);
  };

  return (
    <div className="flex w-2/4 gap-10">
      <p className="text-lg font-semibold w-36 ">イベント名</p>
      <input
        type="text"
        className="rounded-sm border-gray-400 p-1 border-solid border border-opacity-50 w-full"
        placeholder="イベント名を記入"
        onChange={(e) => handleEdit(e)}
        value={eventName}
      />
    </div>
  );
};

export default InputEventName;
