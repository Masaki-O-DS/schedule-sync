"use client";

import React from "react";

const InputEventDetail = () => {
  return (
    <div className="flex w-2/4 gap-10 mb-10">
      <p className="text-lg font-semibold w-36">イベント詳細</p>
      <textarea
        className="rounded-sm border-gray-400 border-solid border border-opacity-50 p-1 w-full h-auto"
        name=""
        id=""
        placeholder="開催場所や開催理由、イベントの内容を記入"
      ></textarea>
    </div>
  );
};

export default InputEventDetail;
