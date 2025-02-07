//LP

import Footer from "../components/Footer";
import { Header } from "./components/LpHeader";
import LpBottom from "./components/LpBottom";
import { LpMiddle } from "./components/LpMiddle";
import LpTop from "./components/LpTop";

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
