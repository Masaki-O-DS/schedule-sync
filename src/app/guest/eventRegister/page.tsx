import React from "react";
import EventForm from "../../ui/EventForm";
import InputEventName from "../../ui/InputEventName";
import InputEventDetail from "../../ui/InputEventDetail";
import DateRangePicker from "../../ui/Calendar";

const Page = () => {
  return (
    <div className="w-full h-auto">
      <EventForm>
        <InputEventName />
        <InputEventDetail />
        <DateRangePicker />
      </EventForm>
    </div>
  );
};

export default Page;
