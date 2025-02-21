"use client";

import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { useAtom } from "jotai";
import { eventInfoAtom } from "@/store/atoms";

const EventForm = ({ children }: { children: React.ReactNode }) => {
  const [eventInfo] = useAtom(eventInfoAtom);
  const isDisabled =
    !eventInfo.eventDetail || !eventInfo.eventName || !eventInfo.possibleDates;
  return (
    <form className="flex flex-col justify-center gap-5 md:gap-8 mt-6 md:mt-10 items-center w-full h-5/6">
      {children}
      {isDisabled ? (
        <Button disabled>確定</Button>
      ) : (
        <Link href={"/guest/registerUnavailableDates"}>
          <Button>確定</Button>
        </Link>
      )}
    </form>
  );
};

export default EventForm;
