export default function TopBar({ userName }: { userName: string }) {
  return (
    <div className="w-full px-6 py-4 bg-white border-b border-gray-300 shadow-sm flex items-center">
      <button aria-label="Menu" className="text-2xl text-gray-700 mr-4">
        &#9776;
      </button>
      <h1 className="text-base font-semibold tracking-wide text-[#2d2d2d]">
        {userName}&rsquo;s Legacy
      </h1>
    </div>
  );
}