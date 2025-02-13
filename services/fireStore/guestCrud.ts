import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
interface unavailableTimes {
  [key: string]: number[];
}
export const addData = async (
  id: string,
  eventName: string,
  eventDetail: string,
  possibleDates: string[],
  unavailableTimes: unavailableTimes
) => {
  try {
    await setDoc(doc(db, "GuestUser", id), {
      eventName,
      eventDetail,
      possibleDates,
      unavailableTimes,
    });
    console.log("データ追加成功");
  } catch (error) {
    console.error("データ追加エラー:", error);
  }
};

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const userList = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return userList;
};
