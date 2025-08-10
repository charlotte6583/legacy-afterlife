'use client';

import React, { useState, useEffect } from 'react';
import styles from './archivelayout.module.css';

const layoutModes = ['albums', 'timeline', 'calendar'] as const;
type LayoutMode = (typeof layoutModes)[number];

const allMemories = [
  '2020 Memories', "Mum's 50th Birthday", 'Barcelona Trip',
  "Dad’s Old Recipes", 'California Holiday', 'Songs That Made Me Cry',
  'My First Voice Note', 'Recipes Worth Sharing', 'Graduation Day',
  'Late Night Walks', 'Snippets of Silence', 'Winter in York',
  'Rainy Sunday', 'Notes in the Kitchen', 'The Laugh That Echoed',
];

const motionClasses = [
  styles.memoryBtnFloatUpLeft,
  styles.memoryBtnFloatRightDiagonal,
  styles.memoryBtnFloatCurve,
];

type MemoryStyle = {
  top: string;
  left: string;
  animationDelay: string;
  motionClass: string;
};

const ArchiveLayout: React.FC = () => {
  const [mode, setMode] = useState<LayoutMode>('albums');
  const [visibleMemories, setVisibleMemories] = useState<string[]>([]);
  const [memoryStyles, setMemoryStyles] = useState<Record<string, MemoryStyle>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted || mode !== 'albums') return;

    const updateVisible = () => {
      const shuffled = [...allMemories].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);

      const stylesMap: Record<string, MemoryStyle> = {};
      selected.forEach((label) => {
        stylesMap[label] = {
          top: `${Math.floor(Math.random() * 70 + 15)}%`,
          left: `${Math.floor(Math.random() * 70 + 15)}%`,
          animationDelay: `${(Math.random() * 2).toFixed(2)}s`,
          motionClass: motionClasses[Math.floor(Math.random() * motionClasses.length)],
        };
      });

      setVisibleMemories(selected);
      setMemoryStyles(stylesMap);
    };

    updateVisible(); // initial load
    const interval = setInterval(updateVisible, 30000);
    return () => clearInterval(interval);
  }, [hasMounted, mode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
    // Add search filtering logic here when ready
  };

  return (
    <div className={styles.wrapper}>
      {/* 🔍 Search Bar */}
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search memories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* 🧭 Mode Switcher */}
      <nav className={styles.navbar}>
        {layoutModes.map((layout) => (
          <button
            key={layout}
            onClick={() => setMode(layout)}
            className={mode === layout ? styles.active : ''}
          >
            {layout.charAt(0).toUpperCase() + layout.slice(1)}
          </button>
        ))}
      </nav>

      {/* 📦 Content Area */}
      <section className={styles.content}>
        {hasMounted && mode === 'albums' ? (
          <div className={styles.floatingButtons}>
            {visibleMemories.map((label) => {
              const style = memoryStyles[label];
              if (!style) return null;

              return (
                <button
                  key={label}
                  className={`${styles.memoryBtn} ${style.motionClass}`}
                  style={{
                    top: style.top,
                    left: style.left,
                    animationDelay: style.animationDelay,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ) : null}

        {mode === 'timeline' && (
          <div className={styles.layoutPlaceholder}>Timeline View</div>
        )}

        {mode === 'calendar' && (
          <div className={styles.layoutPlaceholder}>Calendar View</div>
        )}
      </section>
    </div>
  );
};

export default ArchiveLayout;