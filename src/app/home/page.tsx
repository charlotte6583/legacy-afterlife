import orb from "@/components/orb";
import bottomNav from "@/components/bottomnav";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <orb />
      </main>
      <bottomnav />
    </div>
  );
}