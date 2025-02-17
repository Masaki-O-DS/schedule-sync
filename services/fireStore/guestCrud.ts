import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { DateRange } from "react-day-picker";
interface unavailableTimes {
  [key: string]: number[];
}

interface EventData {
  eventName: string;
  eventDetail: string;
  possibleDates: { from: Timestamp; to: Timestamp };
  unavailableDates: { [key: string]: number[] };
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
*/ export const fetchData = async (
  docId: string
): Promise<EventData | null> => {
  try {
    const docRef = doc(db, "GuestUser", docId);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.error("ドキュメントが見つかりません");
      return null;
    }

    return docSnap.data() as EventData;
  } catch (err) {
    console.error("dbのアクセスに失敗", err);
    return null;
  }
};
