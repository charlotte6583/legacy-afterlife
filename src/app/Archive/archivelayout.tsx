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

const ArchiveLayout: React.FC = () => {
  const [mode, setMode] = useState<LayoutMode>('albums');
  const [visibleMemories, setVisibleMemories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const updateVisible = () => {
      const shuffled = allMemories.sort(() => 0.5 - Math.random());
      setVisibleMemories(shuffled.slice(0, 10));
    };

    updateVisible(); // initial
    const interval = setInterval(updateVisible, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
    // You can integrate actual filtering logic here later
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

      <section className={styles.content}>
        {mode === 'albums' && (
          <div className={styles.floatingButtons}>
            {visibleMemories.map((label, i) => {
              const motionStyle =
                motionClasses[Math.floor(Math.random() * motionClasses.length)];
              return (
                <button
                  key={label}
                  className={`${styles.memoryBtn} ${motionStyle}`}
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

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