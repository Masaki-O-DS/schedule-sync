import { Button } from "@/app/components/button";
import Link from "next/link";
import React from "react";

const TopButtons = () => {
  return (
    <div className="flex flex-col gap-y-4 w-56 mt-5">
      <Link href={"/guest/eventRegister"} className="w-full">
        <Button className="h-10 text-md w-full">Guest User</Button>
      </Link>

      <Button className="h-10 text-md">Google Login</Button>
      <Button className="h-10 text-md">使い方</Button>
    </div>
  );
};

export default TopButtons;
