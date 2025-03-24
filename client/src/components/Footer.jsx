import React from 'react';
import { motion } from 'framer-motion';
import { FaShip } from 'react-icons/fa';
import { useScrollTop } from '@/hooks/use-scrolltop';

const Footer = () => {
  const { scrollToTop, isVisible } = useScrollTop();
  
  return (
    <footer className="py-6 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.button 
          id="scroll-top" 
          onClick={scrollToTop}
          className={`scroll-top bg-pirate-red hover:bg-straw-hat text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 999,
          }}
        >
          <FaShip className="text-xl" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
