"use client";
import React, { useEffect, useState } from "react";
import { clientDecodeBase64Json } from "../utils/sessionStorageUtils";

const EventName = () => {
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    const storedData = sessionStorage.getItem("eventName");
    const decodedData = clientDecodeBase64Json<string>(storedData);
    if (decodedData) {
      setEventName(decodedData);
    }
  }, []);

  return (
    <div className="flex ">
      <p className="font-semibold text-xl">イベント名 : </p>
      <p className="text-xl font-medium">{eventName}</p>
    </div>
  );
};

export default EventName;
