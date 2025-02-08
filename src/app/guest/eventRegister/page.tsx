import React from "react";
import EventForm from "../../components/EventForm";
import InputEventName from "../../components/InputEventName";
import InputEventDetail from "../../components/InputEventDetail";
import DateRangePicker from "../../components/DateRangePicker";

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
