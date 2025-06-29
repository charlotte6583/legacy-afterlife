import SideMenu from "../components/sidemenu";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row min-h-screen w-full">
      <SideMenu />
      <main className="flex-1">{children}</main>
    </div>
  );
}