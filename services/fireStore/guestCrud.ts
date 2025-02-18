import { doc, setDoc, getDoc, Timestamp, updateDoc } from "firebase/firestore";
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
  unavailableDates: unavailableTimes,
  registrationDate: Date
) => {
  try {
    await setDoc(doc(db, "GuestUser", id), {
      eventName,
      eventDetail,
      possibleDates,
      unavailableDates,
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

interface NewUnavailableDates {
  [key: string]: number[];
}
export const updateData = async (
  docId: string,
  newUnavailableDates: NewUnavailableDates
) => {
  try {
    const eventRef = doc(db, "GuestUser", docId);
    await updateDoc(eventRef, { unavailableDates: newUnavailableDates });
    console.log("更新完了");
  } catch (err) {
    console.error("dataのupdateに失敗", err);
  }
};
