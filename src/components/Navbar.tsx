import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-right">
        <SearchBar />
        <motion.button 
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navbar
