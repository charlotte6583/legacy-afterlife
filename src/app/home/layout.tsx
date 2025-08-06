'use client';

import '../../styles/styles.css';
import BottomNav from '../components/bottomnav';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 🧱 Main Layout Container with Gradient Background */}
      <div
        className="relative flex flex-col min-h-screen text-gray-800 font-sans pb-14"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #CCAE88, #FAF3EB)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
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

        {/* 🌿 Bottom Navigation — now inside gradient container */}
        <div className="z-50">
          <BottomNav />
        </div>
      </div>
    </>
  );
}