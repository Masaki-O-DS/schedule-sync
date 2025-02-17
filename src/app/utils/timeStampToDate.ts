import { Timestamp } from "firebase/firestore";

export function timeStampToDateObj(timeStampObj: Timestamp) {
  const timeStamp = timeStampObj.toDate();
  return timeStamp;
}
