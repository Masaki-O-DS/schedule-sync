//LP

import Footer from "../components/Footer";
import { Header } from "./ui/LpHeader";
import LpBottom from "./ui/LpBottom";
import { LpMiddle } from "./ui/LpMiddle";
import LpTop from "./ui/LpTop";

export default function Home() {
  return (
    <div className="w-full h-fit relative">
      <Header />
      <LpTop />
      <LpMiddle />
      <LpBottom />
      <Footer />
    </div>
  );
}
