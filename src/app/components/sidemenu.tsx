'use client';

import Link from 'next/link';

export default function SideMenu() {
  return (
    <aside className="p-5 pt-10 space-y-6">
      <nav className="flex flex-col space-y-4 text-base font-medium">
        <Link href="/family" className="hover:text-indigo-600">👪 Family</Link>
        <Link href="/archive" className="hover:text-indigo-600">📦 Archive</Link>
        <Link href="/settings" className="hover:text-indigo-600">⚙️ Settings</Link>
      </nav>
    </aside>
  );
}