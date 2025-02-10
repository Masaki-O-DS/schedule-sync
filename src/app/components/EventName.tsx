"use client";
import React, { useEffect, useState } from "react";

const EventName = () => {
  const [eventName, setEventName] = useState<string>("");

  useEffect(() => {
    const storedData = sessionStorage.getItem("eventName");
    if (storedData !== null) {
      setEventName(storedData);
    } else {
      setEventName("");
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
