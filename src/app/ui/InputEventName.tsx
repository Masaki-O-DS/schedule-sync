"use client";
import React from "react";

const InputEventName = () => {
  return (
    <div className="flex w-2/4 gap-10">
      <p className="text-lg font-semibold w-36 ">イベント名</p>
      <input
        type="text"
        className="rounded-sm border-gray-400 p-1 border-solid border border-opacity-50 w-full"
        placeholder="イベント名を記入"
      />
    </div>
  );
};

export default InputEventName;
