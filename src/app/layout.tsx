import './globals.css';
import './welcome.css';
import type { Metadata, Viewport } from 'next';
import ClientLayout from './ClientLayout';
import ServiceWorkerRegister from './components/ServiceWorkerRegister';

export const metadata: Metadata = {
  title: "Charlotte's Legacy",
  description: "Preserving stories that matter.",
  // ⛔ Remove themeColor from here
};

export const viewport: Viewport = {
  themeColor: "#ff9966", // ✅ Move it here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* 📱 PWA Manifest and Icons */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff9966" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" href="/icon-192.png" type="image/png" />
      </head>
      <body className="h-full">
        <ServiceWorkerRegister />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}