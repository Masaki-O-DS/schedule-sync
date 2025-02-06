//LP

import { Header } from "./ui/Header";
import { LpMiddle } from "./ui/LpMiddle";
import LpTop from "./ui/LpTop";

export default function Home() {
  return (
    <div className="w-full h-fit relative">
      <Header />
      <LpTop />
      <LpMiddle />
    </div>
  );
}
