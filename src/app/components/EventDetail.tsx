"use client";
import React, { useEffect, useState } from "react";
import { clientDecodeBase64Json } from "../utils/sessionStorageUtils";
interface EventDetailProps {
  source: "session" | "fireStore";
  text?: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ source, text }) => {
  const [eventDetail, setEventDetail] = useState("");

  useEffect(() => {
    //sessionStorageからデータを取得
    if (source === "session") {
      const storedData = sessionStorage.getItem("eventDetail");
      const decodedData = clientDecodeBase64Json<string>(storedData);
      if (decodedData) {
        setEventDetail(decodedData);
      }
    }
    //fireStoreからデータを取得
    else if (source === "fireStore") {
      setEventDetail(text || "ローディング中");
    }
  }, [text]);
  return (
    <div className="flex ">
      <p className="font-semibold text-xl">イベント詳細 : </p>
      <p className="text-xl font-medium">{eventDetail}</p>
    </div>
  );
};

export default EventDetail;
