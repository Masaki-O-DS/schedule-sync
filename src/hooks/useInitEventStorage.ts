import { useEffect } from "react";

// イベント情報をsessionStorageで保管するために初期化;
export const useInitEventStorage = () => {
  useEffect(() => {
    const storedEventNameData = sessionStorage.getItem("eventName");
    const storedEventDetailData = sessionStorage.getItem("eventDetail");
    const storedPossibleDatesData = sessionStorage.getItem("possibleDates");
    const storedUnavailableDatesData =
      sessionStorage.getItem("unavailableTimes");

    if (storedEventNameData === null) {
      sessionStorage.setItem(
        "eventName",
        Buffer.from(JSON.stringify("")).toString("base64")
      );
    }
    if (storedEventDetailData === null) {
      sessionStorage.setItem(
        "eventDetail",
        Buffer.from(JSON.stringify("")).toString("base64")
      );
    }
    if (storedPossibleDatesData === null) {
      sessionStorage.setItem(
        "possibleDates",
        Buffer.from(JSON.stringify([])).toString("base64")
      );
    }
    if (storedUnavailableDatesData === null) {
      sessionStorage.setItem(
        "unavailableTimes",
        Buffer.from(JSON.stringify({})).toString("base64")
      );
    }
  }, []);
};
