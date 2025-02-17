"use client";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../../../services/fireStore/guestCrud";
import { useSearchParams } from "next/navigation";
import { Header } from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EventName from "@/app/components/EventName";
import EventDetail from "@/app/components/EventDetail";
import DragSchedule from "@/app/components/DragSchedule";

interface EventData {
  eventName: string;
  eventDetail: string;
  possibleDates: string[];
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
        setData(eventData as EventData);
        console.log(eventData);
      } catch (error) {
        console.error("データ取得を失敗:", error);
      }
    };

    fetchEventData();
  }, [id]);

  return (
    <div>
      <Header>
        <></>
      </Header>
      <EventName source="fireStore" text={data?.eventName}></EventName>
      <EventDetail source="fireStore" text={data?.eventDetail}></EventDetail>
      <DragSchedule data={data?.possibleDates} />
      <Footer></Footer>
    </div>
  );
};

export default Page;
