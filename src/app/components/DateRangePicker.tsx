"use client";

import React, { useEffect, useRef } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  clientDecodeBase64Json,
  clientEncodeBase64Json,
} from "../utils/sessionStorageUtils";

const DateRangePicker = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const isFirstRender = useRef(true); //初回レンダリング時にsessionStorageが更新されるのを防ぐのに使う

  //初回レンダリング時にsessionStorageからデータ取得
  useEffect(() => {
    const storedData = sessionStorage.getItem("possibleDates");
    const decodedData = clientDecodeBase64Json<DateRange>(storedData);
    setDate(decodedData);
  }, []);

  //カレンダーで候補日を選択するたびにsessionStorageが更新される
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const encodedData = clientEncodeBase64Json<DateRange>(date);
    if (encodedData) {
      sessionStorage.setItem("possibleDates", encodedData);
    }
  }, [date]);

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = () => {
    setDate({ from: undefined, to: undefined });
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <p className="text-lg font-semibold">日程を選択してください</p>
      <div className="flex gap-4">
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
        <Button onClick={handleReset}>日付をリセット</Button>
      </div>
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
