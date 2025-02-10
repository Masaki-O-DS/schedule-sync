"use client";
import React, { useEffect, useState } from "react";

const InputEventName = () => {
  const [eventName, setEventName] = useState<string>("");

  //sessionStorageにeventNameがあればセットする
  useEffect(() => {
    const storedEventName = sessionStorage.getItem("eventName");
    if (storedEventName !== null) {
      setEventName(storedEventName);
    }
  }, []);
  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEventName(newValue);
    sessionStorage.setItem("eventName", newValue);
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
