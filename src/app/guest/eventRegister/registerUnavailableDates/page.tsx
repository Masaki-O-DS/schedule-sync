import { Button } from "@/app/ui/button";
import DragSchedule from "@/app/ui/DragSchedule";
import EventName from "@/app/ui/EventName";
import React from "react";

export default function Page() {
  return (
    <div>
      <div>
        <EventName />
        <Button>確定</Button>
      </div>
      <DragSchedule></DragSchedule>
    </div>
  );
}
