"use client";

import React, { useEffect, useState } from "react";

const InputEventDetail = () => {
  const [eventDetail, setEventDetail] = useState<string>("");

  //sessionStorageにeventDetailがあればセットする
  useEffect(() => {
    const eventDetailLog = sessionStorage.getItem("eventDetail");
    if (eventDetailLog !== null) {
      setEventDetail(eventDetailLog);
    }
  }, []);

  const handleEdit = (e: { target: { value: string } }) => {
    const newEventDetail = e.target.value;
    setEventDetail(newEventDetail);
    sessionStorage.setItem("eventDetail", newEventDetail);
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
