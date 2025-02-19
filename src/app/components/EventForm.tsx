import React from "react";
import { Button } from "./button";
import Link from "next/link";

const EventForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <form className="flex flex-col justify-center gap-5 md:gap-8 mt-6 md:mt-10 items-center w-full h-5/6">
      {children}
      <Link href={"/guest/registerUnavailableDates"}>
        <Button className="">確定</Button>
      </Link>
    </form>
  );
};

export default EventForm;
