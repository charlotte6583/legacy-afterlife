"use client";

import "../../styles/styles.css";
import BottomNav from "../components/bottomnav";

export default function HomeLayout({
  children,
  userName,
}: {
  children: React.ReactNode;
  userName: string;
}) {
  return (
    <div
      className="relative flex flex-col min-h-screen text-gray-800 font-sans pb-14"
      style={{
        backgroundImage: "linear-gradient(to bottom, #CCAE88, #FAF3EB)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* 🏷️ Header */}
      <header className="flex items-center px-4 py-6">
        <div className="flex items-center w-full gap-4">
          <button className="menu-button" aria-label="Toggle sidebar">
            ☰
          </button>
          <h1 className="header-title flex-1 truncate">
            {userName}Charlotte&rsquo;s Legacy
          </h1>
        </div>
      </header>

      {/* 📦 Page Content */}
      <main className="flex-grow">{children}</main>

      {/* 🌿 Bottom Navigation */}
      <div className="z-50">
        <BottomNav />
      </div>
    </div>
  );
}