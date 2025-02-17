import { useEffect, useState } from "react";
import { generateDateRange } from "../app/utils/generateDateRange";
import { serverDecodeBase64Json } from "@/app/utils/sessionStorageUtils";
import { DateRange } from "react-day-picker";

interface PossibleDate {
  from: string;
  to: string;
}

interface UnavailableDates {
  [key: string]: number[];
}
interface StoredData {
  [key: string]: number[];
}

interface GenerateDataRangeProps {
  source: "session" | "fireStore";
  data?: DateRange;
}

export const useGenerateDateRange = ({
  source,
  data,
}: GenerateDataRangeProps) => {
  const [dates, setDates] = useState<string[]>();
  const [storedData, setStoredData] = useState<DateRange>(
    data ? data : { from: undefined, to: undefined }
  );
  console.log("storedData", storedData);
  console.log("data", data);

  //選択した候補日を最初のレンダリングで取得
  useEffect(() => {
    if (source === "session") {
      const storedPossibleDatesData = sessionStorage.getItem("possibleDates");
      const decodedPossibleDates = serverDecodeBase64Json<PossibleDate>(
        storedPossibleDatesData
      );
      if (decodedPossibleDates) {
        setStoredData({
          from: new Date(decodedPossibleDates.from),
          to: new Date(decodedPossibleDates.to),
        });
      }
    } else if (source === "fireStore" && data) {
      setStoredData(data);
    }
  }, [source, data]);

  useEffect(() => {
    if (storedData.from !== undefined && storedData.to !== undefined) {
      //選択した候補日の開始と終了からを全ての日付を配列として生成
      const dateObjList = generateDateRange(storedData);

      //範囲内の日付を全て取得
      const dateList = getAllDate(dateObjList);

      // ここでsessionStorageのunavailabelTimesの初期化をする
      //sessionStorageに値があった場合、初期化を回避する。
      const storedUnavailableTimesData =
        sessionStorage.getItem("unavailableTimes");
      const decodedUnavailableTimes = serverDecodeBase64Json<UnavailableDates>(
        storedUnavailableTimesData
      );
      if (decodedUnavailableTimes === undefined) {
        initUnavailableTimes(dateList);
      }

      setDates(dateList);
    } else {
      setDates([]);
    }
  }, [storedData]);

  return dates;
};

//fromからtoまでの全ての日付を取得している
export function getAllDate(dateObjList: Date[]) {
  return dateObjList.map((date) => {
    const tempExtractMonth = date.getMonth();
    const extractDate = date.getDate();
    const correctExtraMonth = tempExtractMonth + 1;
    //getMonthでは-1した月の値が得られるので下で+1してる
    return `${correctExtraMonth} / ${extractDate}`;
  });
}

//sessionStorageのunavailableTimesの初期化
export function initUnavailableTimes(dateList: string[]) {
  const keyObj: StoredData = {};
  dateList.forEach((date) => {
    keyObj[date] = [];
  });
  const compressedData = Buffer.from(
    encodeURIComponent(JSON.stringify(keyObj))
  ).toString("base64");
  sessionStorage.setItem("unavailableTimes", compressedData);
}
