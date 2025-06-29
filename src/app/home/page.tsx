"use client";
import { useState } from "react";
import BottomNav from "../components/bottomnav";
import Orb from "./components/orb";

export default function HomePage() {
  const [isTalking, setIsTalking] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#fefdf8] text-gray-800 px-6 pt-10 pb-24">
      <div className="flex flex-col items-center justify-center space-y-6">
        <Orb />
        <button
          onClick={() => setIsTalking(!isTalking)}
          className="px-4 py-2 rounded bg-rose-100 text-rose-700 hover:bg-rose-200 transition"
        >
          {isTalking ? "Stop Talking" : "Start Talking"}
        </button>
      </div>
      <BottomNav />
    </div>
  );
}