'use client';

import dynamic from 'next/dynamic';

const ArchiveLayout = dynamic(() => import('./archivelayout'), { ssr: false });

export default function Page() {
  return <ArchiveLayout />;
}