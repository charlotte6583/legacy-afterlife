// src/app/components/sidemenu.tsx
import React from "react";

const SideMenu: React.FC = () => {
  return (
    <div className="p-5 pt-10 space-y-6">
      <nav className="flex flex-col space-y-4 text-base font-medium">
        <a href="/family" className="hover:text-indigo-600">👪 Family</a>
        <a href="/archive" className="hover:text-indigo-600">📦 Archive</a>
        <a href="/settings" className="hover:text-indigo-600">⚙️ Settings</a>
      </nav>
    </div>
  );
};

export default SideMenu;