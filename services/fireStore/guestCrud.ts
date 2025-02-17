import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { DateRange } from "react-day-picker";
interface unavailableTimes {
  [key: string]: number[];
}
export const addData = async (
  id: string,
  eventName: string,
  eventDetail: string,
  possibleDates: DateRange,
  unavailableTimes: unavailableTimes,
  registrationDate: Date
) => {
  try {
    await setDoc(doc(db, "GuestUser", id), {
      eventName,
      eventDetail,
      possibleDates,
      unavailableTimes,
      registrationDate: Timestamp.fromDate(registrationDate),
    });
    console.log("データ追加成功");
  } catch (error) {
    console.error("データ追加エラー:", error);
  }
};

/*
引数　eventId
戻り値　eventの全ての情報
{ eventDetail,
 eventName,
 possibleDates,
 unavailableDates} 
*/ export const fetchData = async (docId: string) => {
  try {
    const docRef = doc(db, "GuestUser", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data;
    } else {
      return console.error("ドキュメントが見つかりません");
    }
  } catch (err) {
    console.error("dbのアクセスに失敗", err);
    return;
  }
};
