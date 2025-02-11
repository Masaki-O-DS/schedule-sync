import { atom } from "jotai";

interface UnavailableTimes {
  [key: string]: number[];
}

//イベント関連のAtom定義
export const unavailableTimesAtom = atom<UnavailableTimes>({});
unavailableTimesAtom.debugLabel = "unavailableTimesAtom";

export const eventNameAtom = atom<string>("");
eventNameAtom.debugLabel = "unavailableTimesAtom";

export const eventDetailAtom = atom<string>("");
eventDetailAtom.debugLabel = "eventDetailAtom";
