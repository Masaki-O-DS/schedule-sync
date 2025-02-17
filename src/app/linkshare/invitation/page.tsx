"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../../../services/fireStore/guestCrud";
import { useSearchParams } from "next/navigation";
import { Header } from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EventName from "@/app/components/EventName";
import EventDetail from "@/app/components/EventDetail";
import DragSchedule from "@/app/components/DragSchedule";
import { DateRange } from "react-day-picker";
import { timeStampToDateObj } from "@/app/utils/timeStampToDate";
import { Button } from "@/components/ui/button";

interface EventData {
  eventName: string;
  eventDetail: string;
  possibleDates: DateRange;
  unavailableDates: { [key: string]: number[] };
}

const Page = () => {
  const [data, setData] = useState<EventData | undefined>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  //fireStoreからデータを取得
  useEffect(() => {
    //クエリ取得まで待機
    const fetchEventData = async () => {
      //idがセットされていない間は何も処理しない
      if (!id) return;

      try {
        const eventData = await fetchData(id as string);
        //possibleDateはtimeStamp型なのでそれをDate型に戻す
        if (eventData) {
          const from = timeStampToDateObj(eventData.possibleDates.from);
          const to = timeStampToDateObj(eventData.possibleDates.to);
          const convertedEventData = {
            ...eventData,
            possibleDates: { from, to },
          };

          setData(convertedEventData as EventData);
          console.log("eventData", eventData);
        }
      } catch (error) {
        console.error("データ取得を失敗:", error);
      }
    };

    fetchEventData();
  }, [id]);

  const handleClick = () => {};
  //明日はここを実装しよう

  return (
    <div className="flex-col flex justify-center items-center">
      <Header>
        <></>
      </Header>
      <div className="flex flex-col justify-center items-start gap-y-4 w-2/4 py-5">
        <div className="flex justify-between items-center w-full">
          <EventName source="fireStore" text={data?.eventName}></EventName>
          <Button className="font-bold text-lg" onClick={handleClick}>
            確定
          </Button>
        </div>
        <EventDetail source="fireStore" text={data?.eventDetail}></EventDetail>
      </div>

      <DragSchedule possibleDates={data?.possibleDates} />

      <Footer></Footer>
    </div>
  );
};

export default Page;
