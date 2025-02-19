"use client";
import React, { useEffect, useState } from "react";
import {
  fetchData,
  updateData,
} from "../../../../services/fireStore/guestCrud";
import { useSearchParams } from "next/navigation";
import { Header } from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import EventName from "@/app/components/EventName";
import EventDetail from "@/app/components/EventDetail";
import DragSchedule from "@/app/components/DragSchedule";
import { DateRange } from "react-day-picker";
import { timeStampToDateObj } from "@/app/utils/timeStampToDate";
import { Button } from "@/components/ui/button";
import { Timestamp } from "firebase/firestore";
import { unavailableDatesAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import SendDataModal from "./components/SendDataModal";
import Loading from "@/app/components/Loader";

interface EventData {
  eventName: string;
  eventDetail: string;
  possibleDates: DateRange;
  unavailableDates: { [key: string]: number[] };
  registrationDate: Timestamp;
}

const Page = () => {
  const [data, setData] = useState<EventData | undefined>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [unavailableDates] = useAtom(unavailableDatesAtom);
  const [isModal, setIsModal] = useState(false);

  //fireStoreからデータを取得
  useEffect(() => {
    //クエリ取得まで待機
    const fetchEventData = async () => {
      //idがセットされていない間は何も処理しない
      if (!id) return;

      try {
        const eventData = await fetchData(id as string);
        console.log("eventData", eventData);
        //possibleDateはtimeStamp型なのでそれをDate型に戻す
        if (eventData) {
          const from = timeStampToDateObj(eventData.possibleDates.from);
          const to = timeStampToDateObj(eventData.possibleDates.to);
          const convertedEventData = {
            ...eventData,
            possibleDates: { from, to },
          };

          setData(convertedEventData as EventData);
          console.log(convertedEventData);
        }
      } catch (error) {
        console.error("データ取得を失敗:", error);
      }
    };

    fetchEventData();
  }, [id]);

  // data がまだ取得できていない場合はローディング中を表示する
  if (!data) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const handleClick = () => {
    if (!id) {
      console.error("IDが取得できませんでした");
      return;
    }
    //fireStoreに送信しよう
    updateData(id, unavailableDates);
    setIsModal(true);
  };

  return (
    <div className="flex-col flex justify-center items-center ">
      {isModal && <SendDataModal />}
      <Header />
      <div className="flex flex-col justify-center items-start gap-y-4 w-5/6 md:w-4/6 lg:w-2/4 py-5">
        <div className="flex justify-between items-center w-full">
          <EventName source="fireStore" text={data?.eventName}></EventName>
          <Button
            className="font-bold w-12 md:w-18 lg:w-20 h-7 lg:h-9 text-sm md:text-base lg:text-lg"
            onClick={handleClick}
          >
            確定
          </Button>
        </div>
        <EventDetail source="fireStore" text={data?.eventDetail}></EventDetail>
      </div>

      <DragSchedule
        unavailableDatesProp={data?.unavailableDates || {}}
        source="fireStore"
        possibleDates={data?.possibleDates}
      />

      <Footer></Footer>
    </div>
  );
};

export default Page;
