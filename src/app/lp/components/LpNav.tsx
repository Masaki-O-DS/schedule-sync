import React from "react";
import { Button } from "../../components/button";

export const LpNav = () => {
  return (
    <div>
      <nav>
        <ol className="flex gap-4 mr-10 text-sm font-bold items-center">
          <li>
            <a href="#features">特徴</a>
          </li>
          <li>
            <a href="#why">使うメリット</a>
          </li>
          <Button>Try for Free</Button>
        </ol>
      </nav>
    </div>
  );
};
