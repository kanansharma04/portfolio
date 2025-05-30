import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
