"use client";

import { Button } from "@/app/components/button";
import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const CopyLinkButton = () => {
  const pathname = usePathname();
  const url =
    `${window.location.origin}` + pathname + "ここにシェア用のidを入れる";
  const handleCopy = () => {
    toast("URLをクリップボードにコピーしました");
    navigator.clipboard.writeText(url);
  };

  return (
    <div className=" flex w-full justify-center items-end gap-5">
      <input
        type="text"
        className="w-96 overflow-x-scroll rounded-sm h-8 p-1"
        readOnly
        value={
          `${window.location.origin}` +
          `${pathname}` +
          `ここにシェア用のidを入れる`
        }
      />
      <Button
        onClick={handleCopy}
        className="bg-bgMyColor text-black text-lg h-8 hover:bg-red-400 hover:text-white"
      >
        Copy
      </Button>
    </div>
  );
};

export default CopyLinkButton;
