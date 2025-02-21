import React from "react";
import Selection from "./Selection";
import {} from "lucide-react";
import { useGenerateDateRange } from "@/hooks/useGenerateDateRange";
import { DateRange } from "react-day-picker";

interface DragScheduleProps {
  source: "session" | "fireStore";
  possibleDates: DateRange | undefined;
  unavailableDatesProp?: { [key: string]: number[] };
}

const DragSchedule: React.FC<DragScheduleProps> = ({
  source,
  possibleDates,
  unavailableDatesProp,
}) => {
  const dates = useGenerateDateRange({
    source,
    data: possibleDates,
  });

  return (
    <div className="flex justify-center flex-col items-center w-screen font-semibold text-xl">
      <p className="text-xs md:text-base text-center md:w-full w-52">
        予定が既に入っている時間をクリックもしくは、ドラッグで範囲選択
      </p>
      <div className="w-full flex items-center justify-center ">
        <div className="w-5/6 md:w-3/4 bg-bgNuemo flex gap-20 md:gap-20 rounded-md justify-around overflow-x-scroll px-16 items-center py-5 md:py-10">
          {dates !== undefined &&
            dates.map((date, index) => (
              <Selection
                unavailableTimesProp={
                  unavailableDatesProp ? unavailableDatesProp[date] : []
                }
                source={source}
                key={index}
                date={date}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DragSchedule;
