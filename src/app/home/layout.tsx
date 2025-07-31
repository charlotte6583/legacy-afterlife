"use client";

import BottomNav from "../components/bottomnav";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#fdf6e3] text-gray-800 font-sans pb-14">

      {/* 🏷️ Header */}
      <header className="flex items-center gap-4 px-4 py-6">
        <button aria-label="Menu" className="text-2xl text-gray-700">
          &#9776;
        </button>
        <h1 className="text-base font-semibold tracking-wide text-[#2d2d2d]">
          Charlotte’s Legacy
        </h1>
      </header>

      {/* 📦 Page Content */}
      <main className="flex-grow">{children}</main>

      {/* 🌿 Bottom Navigation */}
      <BottomNav />
    </div>
  );
}