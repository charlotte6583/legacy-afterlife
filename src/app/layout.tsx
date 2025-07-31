import "./globals.css";
import "./welcome.css";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Charlotte's Legacy",
  description: "Preserving stories that matter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}