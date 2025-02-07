import Footer from "../../components/Footer";
import { GuestHeader } from "./components/GuestHeader";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <GuestHeader />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
