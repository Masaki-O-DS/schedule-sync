"use client";

import { Button } from "@/app/components/button";
import { eventIdAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const CopyLinkButton = () => {
  const [id] = useAtom(eventIdAtom);
  const pathname = usePathname();
  const [url, setUrl] = useState("");

  const handleCopy = () => {
    toast("URLをクリップボードにコピーしました");
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    setUrl(
      `${window.location.origin}` + pathname + "/invitation?id=" + `${id}`
    );
  }, []);

  return (
    <div className=" grid grid-rows-2 justify-items-end gap-y-3 md:flex  w-full justify-center lg:items-end md:gap-5">
      <input
        type="text"
        className="w-52 md:w-80 lg:w-96 overflow-x-scroll rounded-sm h-8 p-1"
        readOnly
        value={url}
      />
      <Button
        onClick={handleCopy}
        className="bg-bgMyColor w-20 md:w-28 text-sm md:text-lg text-black  h-4 md:h-8 hover:bg-red-400 hover:text-white"
      >
        Copy
      </Button>
    </div>
  );
};

export default CopyLinkButton;
