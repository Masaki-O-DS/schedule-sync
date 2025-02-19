"use client";

import { useSearchParams } from "next/navigation";

export const useIdFromSearchParams = () => {
  const searchParams = useSearchParams();
  return searchParams.get("id");
};
