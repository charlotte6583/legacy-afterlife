'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    icon: '📖',
    text: 'Capture stories, recipes, voices, and more',
  },
  {
    icon: '🔐',
    text: 'Private, shareable, always yours',
  },
  {
    icon: '🌱',
    text: 'Built to connect generations',
  },
];

export default function FeatureIcons() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      {/* 🖥 Desktop layout */}
      <div className="hidden md:flex justify-center gap-6 border border-pink-500 p-4 rounded text-lg font-semibold text-pink-500">
        <p className="absolute top-0 left-0 text-xs text-pink-300">Desktop layout</p>
        {features.map(({ icon, text }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center min-w-[150px] max-w-[200px]"
          >
            <div className="text-[28px] leading-none mb-2">{icon}</div>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '1.4',
                color: '#FFFFFF',
                textAlign: 'center',
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* 📱 Mobile fallback layout */}
      <div className="md:hidden relative h-40 bg-black/40 flex flex-col justify-center items-center text-center px-4 rounded">
        <div className="text-[32px] leading-none mb-2">{features[index].icon}</div>
        <p
          style={{
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '1.4',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          {features[index].text}
        </p>
      </div>
    </div>
  );
}