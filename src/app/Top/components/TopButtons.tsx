import { Button } from "@/app/ui/button";
import React from "react";

const TopButtons = () => {
  return (
    <div className="flex flex-col gap-y-4 w-56 mt-5">
      <Button className="h-10 text-md">Guest User</Button>
      <Button className="h-10 text-md">Google Login</Button>
      <Button className="h-10 text-md">使い方</Button>
    </div>
  );
};

export default TopButtons;
