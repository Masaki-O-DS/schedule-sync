import { useEffect } from "react";

// イベント情報をsessionStorageで保管するために初期化;
export const useInitEventStorage = () => {
  useEffect(() => {
    if (sessionStorage.getItem("eventName") === null) {
      sessionStorage.setItem("eventName", "");
    } else if (sessionStorage.getItem("eventDetail") === null) {
      sessionStorage.setItem("eventDetail", "");
    } else if (sessionStorage.getItem("possibleDates") === null) {
      const possibleDates: string[] = [];
      sessionStorage.setItem("possibleDates", JSON.stringify(possibleDates));
    } else if (sessionStorage.getItem("unavailableTimes") === null) {
      const unavailableTimes: string[] = [];
      sessionStorage.setItem(
        "unavailableTimes",
        JSON.stringify(unavailableTimes)
      );
    }
  }, []);
};
