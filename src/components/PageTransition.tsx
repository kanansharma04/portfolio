import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -200,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  exit: {
    opacity: 0,
    x: 200,
    scale: 0.8
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
