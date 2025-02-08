import { Button } from "@/app/components/button";
import DragSchedule from "@/app/components/DragSchedule";
import EventName from "@/app/components/EventName";
import React from "react";

export default function Page() {
  return (
    <div className="flex-col flex items-center ">
      <div className="flex justify-around h-20 items-center w-2/4">
        <EventName />
        <Button>確定</Button>
      </div>
      <DragSchedule></DragSchedule>
    </div>
  );
}
