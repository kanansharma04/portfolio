import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="search-container">
      <motion.button
        className="search-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🔍
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="search-wrapper"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '300px' }}
            exit={{ opacity: 0, width: 0 }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="search-input"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
