import { atom } from "jotai";

interface UnavailableTimes {
  [key: string]: number[];
}

interface EventInfo {
  eventName: string;
  eventDetail: string;
  possibleDates: string[];
}

//イベントの名前と詳細、候補日の状態を管理
export const eventInfoAtom = atom<EventInfo>({
  eventName: "",
  eventDetail: "",
  possibleDates: [],
});

//利用不可の時間帯の状態管理
export const unavailableTimesAtom = atom<UnavailableTimes>({});
unavailableTimesAtom.debugLabel = "unavailableTimesAtom";

//eventIdの状態管理
export const eventIdAtom = atom<string>("");
eventIdAtom.debugLabel = "eventId";
