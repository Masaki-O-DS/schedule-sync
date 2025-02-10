import { atom } from "jotai";

export type EventInfo = {
  eventName: string;
  eventDetail: string;
  possibleDates: string[];
};

//イベント関連のAtom定義
export const eventNameAtom = atom<string>("");
export const eventDetailAtom = atom<string>("");
//possibleDates =>　候補日のこと
export const possibleDatesAtom = atom<string[]>([]);
