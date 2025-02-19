import { eachDayOfInterval } from "date-fns";
import { DateRange } from "react-day-picker";

export function generateDateRange(possibleDate: DateRange): Date[] {
  const start = possibleDate.from;
  const end = possibleDate.to;
  if (start !== undefined && end !== undefined) {
    const dates = eachDayOfInterval({ start, end });
    return dates;
  } else {
    return [];
  }
}
