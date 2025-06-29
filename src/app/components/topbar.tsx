export default function TopBar({ userName }: { userName: string }) {
  return (
    <div className="w-full px-4 py-3 border-b border-gray-200 bg-white/70 backdrop-blur-sm flex items-center justify-center">
      <h1 className="text-sm uppercase font-semibold tracking-widest">
        {userName}'s Legacy
      </h1>
    </div>
  );
}