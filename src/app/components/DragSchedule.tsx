"use client";
import React from "react";
import Selection from "./Selection";
import {} from "lucide-react";
import { useGenerateDateRange } from "@/hooks/useGenerateDateRange";

const DragSchedule = () => {
  const dates = useGenerateDateRange();

  return (
    <div className="flex justify-center flex-col items-center w-screen font-semibold text-xl">
      <p>
        予定が既に入っている時間をクリックもしくは、ドラッグで範囲選択してください
      </p>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 bg-bgNuemo flex gap-20 rounded-md justify-around overflow-x-scroll px-10 items-center py-10">
          {dates !== undefined &&
            dates.map((date, index) => <Selection key={index} date={date} />)}
        </div>
      </div>
    </div>
  );
};

export default DragSchedule;
