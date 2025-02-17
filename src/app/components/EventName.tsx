"use client";
import React, { useEffect, useState } from "react";
import { clientDecodeBase64Json } from "../utils/sessionStorageUtils";

interface EventNameProps {
  source: "session" | "fireStore";
  text?: string;
}

const EventName: React.FC<EventNameProps> = ({ source, text }) => {
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    //sessionStorageから取得する場合
    if (source === "session") {
      const storedData = sessionStorage.getItem("eventName");
      const decodedData = clientDecodeBase64Json<string>(storedData);
      if (decodedData) {
        setEventName(decodedData);
      }
    }
    //fireStoreから取得した場合
    else if (source === "fireStore") {
      setEventName(text || "取得中");
    }
  }, [text]);

  return (
    <div className="flex ">
      <p className="font-semibold text-xl w-36 ">イベント名 : </p>
      <p className="text-xl font-medium flex-1">{eventName}</p>
    </div>
  );
};

export default EventName;
