import { atom } from "jotai";

interface UnavailableTimes {
  [key: string]: number[];
}

//利用不可の時間帯の状態管理
export const unavailableTimesAtom = atom<UnavailableTimes>({});
unavailableTimesAtom.debugLabel = "unavailableTimesAtom";

//eventIdの状態管理
export const eventIdAtom = atom<string>("");
eventIdAtom.debugLabel = "eventId";
