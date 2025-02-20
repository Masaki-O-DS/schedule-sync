"use client";
import React from "react";
import EventForm from "../../components/EventForm";
import InputEventName from "../../components/InputEventName";
import InputEventDetail from "../../components/InputEventDetail";
import DateRangePicker from "../../components/DateRangePicker";
import { useInitEventStorage } from "@/hooks/useInitEventStorage";

const Page = () => {
  useInitEventStorage();
  return (
    <div className="w-full h-auto">
      <EventForm>
        <InputEventName />
        <InputEventDetail />
        <DateRangePicker className="w-5/6 justify-items-center" />
      </EventForm>
    </div>
  );
};

export default Page;
