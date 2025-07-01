"use client";

import Link from "next/link";
import { FaMapMarkerAlt, FaUsers, FaPlusCircle } from "react-icons/fa";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-md">
      <Link
        href="/map"
        className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <FaMapMarkerAlt className="text-xl mb-1" />
        <span className="text-xs">Map</span>
      </Link>
      <Link
        href="/social"
        className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <FaUsers className="text-xl mb-1" />
        <span className="text-xs">Social</span>
      </Link>
      <Link
        href="/create"
        className="flex flex-col items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
      >
        <FaPlusCircle className="text-2xl mb-1" />
        <span className="text-xs">Create</span>
      </Link>
    </nav>
  );
}