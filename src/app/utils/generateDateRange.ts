import { eachDayOfInterval, parseISO } from "date-fns";

export interface PossibleDate {
  from: string;
  to: string;
}

export function generateDateRange(possibleDate: PossibleDate) {
  const fromDate = possibleDate.from;
  const toDate = possibleDate.to;
  const start = parseISO(fromDate);
  const end = parseISO(toDate);
  const dates = eachDayOfInterval({ start, end });

  return dates;
}
