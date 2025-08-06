import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="app">
      <motion.main
        className="page-container"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default PageLayout;
