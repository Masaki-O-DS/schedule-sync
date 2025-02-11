"use client";
import React, { useEffect, useState } from "react";

const EventName = () => {
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    const storedData = sessionStorage.getItem("eventName");
    const decompressedData = storedData
      ? JSON.parse(Buffer.from(storedData, "base64").toString())
      : null;

    setEventName(decompressedData);
  }, []);

  return (
    <div className="flex ">
      <p className="font-semibold text-xl">イベント名 : </p>
      <p className="text-xl font-medium">{eventName}</p>
    </div>
  );
};

export default EventName;
