import React from "react";

const EventName = () => {
  const dummyText = "チームミーティング";
  return (
    <div className="flex ">
      <p className="font-semibold text-xl">イベント名 : </p>
      <p className="text-xl font-medium">{dummyText}</p>
    </div>
  );
};

export default EventName;
