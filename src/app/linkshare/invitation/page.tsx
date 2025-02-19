import { Suspense } from "react";
import Loading from "@/app/components/Loader";
import InvitationPage from "./components/InvitationPage";

export default function InvitationPageWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <InvitationPage />
    </Suspense>
  );
}
