"use client";

import React from "react";
import Image from "next/image";
import IntroText from "./components/IntroText"; // ✅ Correct relative path

export default function HomePage() {
  return (
    <div className="page-background">
      {/* 🌕 Orb Centerpiece */}
      <div className="orb-container">
        <Image
          src="/orb.png"
          alt="Orb"
          width={128}
          height={128}
          className="orb-image"
        />
      </div>

      {/* 💬 Animated Welcome Message */}
      <IntroText />
    </div>
  );
}