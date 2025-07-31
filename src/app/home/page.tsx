"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-grow pt-20">
      {/* 🌕 Orb Image */}
      <div className="flex justify-center mt-6">
        <Image
          src="/orb.png"
          alt="Temporary Orb"
          width={128}
          height={128}
          className="rounded-full shadow-lg object-cover"
        />
      </div>

      {/* 💬 Welcome Message */}
      <div className="mt-6 px-8 text-center">
        <p className="text-base font-medium leading-relaxed">
          Hello. I&apos;m here to help you leave something behind—something that matters.
        </p>
      </div>
    </div>
  );
}