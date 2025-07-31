// src/app/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const themeClass = pathname?.startsWith("/settings") ? "theme-light" : "theme-dark";

  return (
    <body className={`h-full w-full antialiased ${themeClass}`}>
      {children}
    </body>
  );
}