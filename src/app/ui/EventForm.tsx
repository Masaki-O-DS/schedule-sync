import React from "react";
import { Button } from "./button";

const EventForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <form className="flex flex-col justify-center gap-8 mt-10 items-center w-full h-5/6">
      {children}
      <Button className="">確定</Button>
    </form>
  );
};

export default EventForm;
