"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DateRangePicker = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });
  console.log(date);

  return (
    <div className={cn("grid gap-2", className)}>
      <p className="text-lg font-semibold">日程を選択してください</p>
      {/* 選択した日付が表示されるボタン */}
      <Button
        id="date"
        variant={"outline"}
        className={cn(
          "w-[300px] justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        {date?.from ? (
          date.to ? (
            <>
              {/* ここでyyyy/M/ddをしているすことで年/月/日表示にしている */}
              {format(date.from, "yyyy/M/d")} - {format(date.to, "yyyy/M/d")}
            </>
          ) : (
            format(date.from, "LLL dd, y")
          )
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    </div>
  );
};

export default DateRangePicker;
