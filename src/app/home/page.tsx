'use client';

import React from 'react';
import Image from "next/image";

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

      {/* 💬 Welcome Message */}
      <div className="welcome-message">
        <p>
          Hello. I&apos;m here to help you leave something behind—something that matters.
        </p>
      </div>
    </div> // ✅ Closed the outermost div
  );
}