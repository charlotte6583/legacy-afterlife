export default function TopBar({ userName }: { userName: string }) {
  return (
    <div
      className="topbar w-full px-6 py-4 flex items-center"
      style={{
        backgroundColor: '#CCAE88',
        boxShadow: 'none',
        borderBottom: 'none',
      }}
    >
      <button aria-label="Menu" className="text-2xl text-white mr-4">
        &#9776;
      </button>
      <h1 className="text-base font-semibold tracking-wide text-white">
        {userName}&rsquo;s Legacy
      </h1>
    </div>
  );
}