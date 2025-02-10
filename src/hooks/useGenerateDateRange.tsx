import { useEffect, useState } from "react";
import { generateDateRange } from "../app/utils/generateDateRange";

interface PossibleDate {
  from: string;
  to: string;
}

export const useGenerateDateRange = () => {
  const [dates, setDates] = useState<string[]>();

  //選択した候補日を最初のレンダリングで取得
  useEffect(() => {
    const storedData = sessionStorage.getItem("possibleDates");
    if (storedData !== null) {
      // sessionStorageから候補日を取得
      const possibleDates: PossibleDate = JSON.parse(storedData);
      //選択した候補日の開始と終了からを全ての日付を配列として生成
      const dateObjList = generateDateRange(possibleDates);
      console.log(dateObjList);
      const dateList = dateObjList.map((date) => {
        const convertDateObj = new Date(date);
        const extractMonth = convertDateObj.getMonth();
        const extractDate = convertDateObj.getDate();
        console.log("month", extractMonth);
        console.log("date", extractDate);
        //getMonthでは-1した月の値が得られるので下で+1してる
        return `${extractMonth + 1} / ${extractDate}`;
      });

      setDates(dateList);
    } else {
      setDates([]);
    }
  }, []);

  return dates;
};
