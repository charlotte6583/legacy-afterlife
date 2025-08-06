"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaUsers, FaPlusCircle } from "react-icons/fa";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 nav-fixed-bottom bg-white border-t border-gray-200 shadow-md w-full">
      <div className="flex w-full">
        <Link
          href="/map"
          className="flex flex-col items-center justify-center flex-1 py-20 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <FaMapMarkerAlt className="text-xl mb-1" />
          <span className="text-xs">Map</span>
        </Link>
        <Link
          href="/social"
          className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <FaUsers className="text-xl mb-1" />
          <span className="text-xs">Social</span>
        </Link>
        <Link
          href="/create"
          className="flex flex-col items-center justify-center flex-1 py-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <FaPlusCircle className="text-2xl mb-1" />
          <span className="text-xs">Create</span>
        </Link>
      </div>
    </nav>
  );
}