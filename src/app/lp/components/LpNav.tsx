import React from "react";
import { Button } from "../../components/button";
import Link from "next/link";

export const LpNav = () => {
  return (
    <div>
      <nav>
        <ol className="flex gap-2 mr-2 text-xs md:gap-4 md:mr-5 lg:mr-10 md:text-xs lg:text-sm font-bold items-center">
          <li>
            <a href="#features">特徴</a>
          </li>
          <li>
            <a href="#why">使うメリット</a>
          </li>
          <Link href={"/Top"}>
            <Button className="w-20 lg:w-32 text-xs lg:text-lg h-3">
              Try for Free
            </Button>
          </Link>
        </ol>
      </nav>
    </div>
  );
};
