import BottomNav from "../components/bottomnav"; // or correct path

export default function TestPage() {
  return (
    <>
      <div className="h-[200vh] bg-gray-100 p-10">
        <p>Testing BottomNav in isolation</p>
      </div>
      <BottomNav />
    </>
  );
}