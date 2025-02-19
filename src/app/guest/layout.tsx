import Footer from "../components/Footer";
import { Header } from "../components/Header";
import GuestNav from "./components/GuestNav";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header>
        <GuestNav />
      </Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
