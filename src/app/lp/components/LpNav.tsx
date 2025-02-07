import React from "react";
import { Button } from "../../ui/button";

export const LpNav = () => {
  return (
    <div>
      <nav>
        <ol className="flex gap-4 mr-10 text-sm font-bold items-center">
          <li>特徴</li>
          <li>使うメリット</li>
          <Button>Try for Free</Button>
        </ol>
      </nav>
    </div>
  );
};
