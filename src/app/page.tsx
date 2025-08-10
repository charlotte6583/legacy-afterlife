"use client";

import Link from "next/link";
import Image from "next/image";
import FeatureIcons from "./home/components/featureicons";

export default function WelcomePage() {
  return (
    <div className="relative w-full h-screen bg-white text-white overflow-visible">
      {/* 🌳 Background Tree */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/tree.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          imageRendering: "crisp-edges",
        }}
      />

      {/* 🧾 Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-[5vh] w-full max-w-screen-xl mx-auto">
        {/* 🔖 Logo and Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-shrink-0">
            <Image
              src="/iconsmall.png"
              alt="Legacy Afterlife logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>
          <h1 className="logo-title text-white text-5xl sm:text-5xl md:text-5xl font-semibold tracking-tight px-4 py-2 rounded-full bg-gradient-to-r from-black/95 to-gray-900/90 backdrop-blur-sm shadow-md whitespace-nowrap">
            Legacy Afterlife
          </h1>
        </div>

        {/* 🌿 Spacer to push tagline below tree */}
        <div className="h-[52vh] sm:h-[56vh] md:h-[60vh]" />

        {/* ✨ Tagline */}
        <h2 className="tagline font-crimson text-white font-bold leading-tight drop-shadow-lg px-2 max-w-4xl mb-6">
          Every step of your life, beautifully preserved.
        </h2>

        {/* 📚 Feature Highlights */}
        <FeatureIcons />

        {/* 🌿 Spacer to push quote down */}
        <div className="h-[30px]" />

        {/* 🗣️ Emotional Quote */}
        <p className="italic font-crimson text-white text-base sm:text-lg drop-shadow-sm px-2 max-w-xl">
          “I never knew my grandmother’s voice — until now.”
        </p>

        {/* 🚀 CTA Button */}
        <div>
          <Link href="/register">
            <button
              type="button"
              className="font-crimson"
              style={{
                all: "unset",
                backgroundColor: "#FF6F61",
                color: "white",
                fontSize: "16px",
                padding: "12px 36px",
                borderRadius: "9999px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                marginTop: "2rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}