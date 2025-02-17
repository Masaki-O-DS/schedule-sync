import { atom } from "jotai";
import { DateRange } from "react-day-picker";

interface UnavailableTimes {
  [key: string]: number[];
}

interface EventInfo {
  eventName: string;
  eventDetail: string;
  possibleDates: DateRange;
}

//イベントの名前と詳細、候補日の状態を管理
export const eventInfoAtom = atom<EventInfo>({
  eventName: "",
  eventDetail: "",
  possibleDates: { from: undefined, to: undefined },
});

//利用不可の時間帯の状態管理
export const unavailableTimesAtom = atom<UnavailableTimes>({});
unavailableTimesAtom.debugLabel = "unavailableTimesAtom";

//eventIdの状態管理
export const eventIdAtom = atom<string>("");
eventIdAtom.debugLabel = "eventId";
