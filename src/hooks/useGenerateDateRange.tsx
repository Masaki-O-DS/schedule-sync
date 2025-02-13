import { useEffect, useState } from "react";
import { generateDateRange } from "../app/utils/generateDateRange";
import { serverDecodeBase64Json } from "@/app/utils/sessionStorageUtils";

interface PossibleDate {
  from: string;
  to: string;
}

interface UnavailableDates {
  [key: string]: number[];
}
interface StoreData {
  [key: string]: number[];
}

export const useGenerateDateRange = () => {
  const [dates, setDates] = useState<string[]>();

  //選択した候補日を最初のレンダリングで取得
  useEffect(() => {
    const storedPossibleDatesData = sessionStorage.getItem("possibleDates");
    const decodedPossibleDates = serverDecodeBase64Json<PossibleDate>(
      storedPossibleDatesData
    );

    if (decodedPossibleDates !== undefined) {
      // sessionStorageから候補日を取得
      const possibleDates: PossibleDate = decodedPossibleDates;
      //選択した候補日の開始と終了からを全ての日付を配列として生成
      const dateObjList = generateDateRange(possibleDates);

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
  }, []);

  return dates;
};

//fromからtoまでの全ての日付を取得している
export function getAllDate(dateObjList: Date[]) {
  return dateObjList.map((date) => {
    const convertDateObj = new Date(date);
    const tempExtractMonth = convertDateObj.getMonth();
    const extractDate = convertDateObj.getDate();
    const correctExtraMonth = tempExtractMonth + 1;
    //getMonthでは-1した月の値が得られるので下で+1してる
    return `${correctExtraMonth} / ${extractDate}`;
  });
}

//sessionStorageのunavailableTimesの初期化
export function initUnavailableTimes(dateList: string[]) {
  const keyObj: StoreData = {};
  dateList.forEach((date) => {
    keyObj[date] = [];
  });
  const compressedData = Buffer.from(
    encodeURIComponent(JSON.stringify(keyObj))
  ).toString("base64");
  sessionStorage.setItem("unavailableTimes", compressedData);
}
