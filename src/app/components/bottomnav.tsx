import { FaUsers, FaMapMarkerAlt, FaPlusCircle } from "react-icons/fa";

export default function BottomNav() {
  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-[9999] bg-red-200 opacity-70 h-2" />
      
      <div className="fixed bottom-0 inset-x-0 z-50 flex justify-around items-center py-3 border-t border-gray-200 bg-white/70 backdrop-blur-sm text-xl">
        <a
          href="/map"
          className="flex flex-col items-center transition-transform hover:scale-105 hover:text-indigo-600"
        >
          <FaMapMarkerAlt />
          <span className="text-xs">Map</span>
        </a>
        <a
          href="/social"
          className="flex flex-col items-center transition-transform hover:scale-105 hover:text-indigo-600"
        >
          <FaUsers />
          <span className="text-xs">Social</span>
        </a>
        <a
          href="/create"
          className="flex flex-col items-center transition-transform hover:scale-110 hover:text-indigo-700"
        >
          <FaPlusCircle />
          <span className="text-xs">Create</span>
        </a>
      </div>
    </>
  );
}