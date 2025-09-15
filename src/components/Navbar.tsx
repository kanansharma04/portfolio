import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'dark'
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => setIsMenuOpen(open => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      {/* Desktop/Tablet Navbar */}
      <div className="desktop-nav">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/highlights">Highlights</Link>
          <Link to="/contact">Contact</Link>
          <a 
            href="/kanan_resume_aiml.pdf" 
            download="Kanan_Sharma_Resume.pdf"
            className="resume-link"
          >
            Download Resume
          </a>
        </div>
        <div className="nav-right">
          <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-nav">
        <button className="hamburger-button" onClick={toggleMenu} aria-label="Open menu">
          <div className={`hamburger-icon${isMenuOpen ? ' open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/about" onClick={closeMenu}>Tech Stack</Link>
              <Link to="/projects" onClick={closeMenu}>Projects</Link>
              <Link to="/Highlights" onClick={closeMenu}>Highlights</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              {/* <Link to="/contact" onClick={closeMenu}>Contact</Link> */}
              <a 
                href="/kana_resume_final.pdf" 
                download="Kanan_Sharma_Resume.pdf"
                className="resume-link"
                onClick={closeMenu}
              >
                Download Resume
              </a>
              <button className="theme-toggle mobile" onClick={toggleTheme}>
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar


