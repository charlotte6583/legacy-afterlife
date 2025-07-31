'use client';

import Link from 'next/link';
import FeatureIcons from './home/components/featureicons';

export default function WelcomePage() {
  return (
    <div className="relative w-full min-h-screen bg-white text-white overflow-hidden">

      {/* 🌳 Background Tree */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/tree.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          imageRendering: 'crisp-edges',
        }}
      />

      {/* 🧾 Foreground Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-12 w-full max-w-screen-xl mx-auto">

      {/* 🔖 Logo and Title */}
<div className="flex items-center gap-[2px] mb-4">
  <div className="flex-shrink-0">
    <img
      src="/iconsmall.png"
      alt="Legacy Afterlife logo"
      className="w-5 h-5 object-contain"
    />
  </div>
  <h1 className="logo-title text-white text-3xl sm:text-4xl font-medium tracking-tight px-3 py-1 rounded-full bg-gradient-to-r from-black/95 to-gray-900/90 backdrop-blur-sm shadow-sm whitespace-nowrap">
    Legacy Afterlife
  </h1>
</div>

        {/* 🌿 Spacer to lower tagline below tree */}
        <div className="h-[44vh] sm:h-[48vh] md:h-[52vh] mb-10" />

        {/* ✨ Tagline */}
        <h2 className="tagline text-white font-semibold leading-tight drop-shadow-lg px-2 max-w-4xl mb-6">
          Every step of your life, beautifully preserved.
        </h2>

        {/* 📚 Feature Highlights */}
        <FeatureIcons />

        {/* 🗣️ Emotional Quote */}
        <p className="italic mt-6 text-white text-base sm:text-lg drop-shadow-sm px-2 max-w-xl">
          “I never knew my grandmother’s voice — until now.”
        </p>

{/* 🚀 Visually Styled CTA Button */}
<div className="mt-8">
  <Link href="/register">
    <button
      type="button"
      style={{
        all: 'unset',
        backgroundColor: '#FF6F61',
        color: 'white',
        fontSize: '16px',
        padding: '12px 36px',
        borderRadius: '9999px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
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