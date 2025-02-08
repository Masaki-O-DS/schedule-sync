"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const GuestNav = () => {
  const router = useRouter();
  return (
    <div>
      <nav>
        <ol className="flex gap-4 mr-10 text-sm font-bold items-center">
          <li>
            <button onClick={() => router.back()} className="cursor-pointer">
              戻る
            </button>
          </li>
          <Link href={"/top"}>
            <li>TOPページへ</li>
          </Link>
        </ol>
      </nav>
    </div>
  );
};

export default GuestNav;
