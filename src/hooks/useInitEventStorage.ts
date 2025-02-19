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
      sessionStorage.setItem("eventName", "");
    }
    if (storedEventDetailData === null) {
      sessionStorage.setItem("eventDetail", "");
    }
    if (storedPossibleDatesData === null) {
      sessionStorage.setItem("possibleDates", "");
    }
    if (storedUnavailableDatesData === null) {
      sessionStorage.setItem("unavailableTimes", "");
    }
  }, []);
};
