"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchData } from "../../../../services/fireStore/guestCrud";
import { useSearchParams } from "next/navigation";

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

  useEffect(() => {
    //クエリ取得まで待機
    const fetchEventData = async () => {
      if (!id) return;

      try {
        const eventData = await fetchData(id as string); // 🔹 `await` を追加
        setData(eventData as EventData); // 🔹 型をキャスト
      } catch (error) {
        console.error("データ取得を失敗:", error);
      }
    };

    fetchEventData();
  }, [id]);
  return <div>{data ? "ページのデータの取得に成功" : "loading"}</div>;
};

export default Page;
