'use client'

import { useState, useEffect } from 'react';

export default function FancyThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, mounted]);

  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 rounded-full animate-pulse">
        <div className="w-7 h-7 bg-white rounded-full shadow-md mt-0.5 ml-0.5"></div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 dark:from-emerald-900/80 dark:to-green-900/80 hover:from-emerald-300/80 hover:to-green-300/80 dark:hover:from-emerald-800/80 dark:hover:to-green-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl border border-emerald-200/50 dark:border-emerald-700/50 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {/* Track Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-50/30 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/30"></div>

      {/* Toggle Button */}
      <div
        className={`absolute top-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
          darkMode
            ? 'left-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-gray-700 dark:to-gray-800'
            : 'left-0.5 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-800'
        }`}
      >
        <span
          className={`text-sm transition-all duration-300 ${
            darkMode
              ? 'text-emerald-600 dark:text-emerald-400'
              : 'text-orange-500 dark:text-yellow-400'
          }`}
        >
          {darkMode ? '🌙' : '☀️'}
        </span>
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <span
          className={`text-xs transition-opacity duration-300 ${
            darkMode ? 'opacity-0' : 'opacity-40'
          }`}
        >
          ☀️
        </span>
        <span
          className={`text-xs transition-opacity duration-300 ${
            darkMode ? 'opacity-40' : 'opacity-0'
          }`}
        >
          🌙
        </span>
      </div>
    </button>
  );
}
