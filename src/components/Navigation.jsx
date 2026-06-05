import { motion } from 'framer-motion';
import { useState } from 'react';

export const Navigation = ({ onScroll }) => {
  const [active, setActive] = useState(0);

  const sections = [
    { name: 'Home', id: 0 },
    { name: 'Our Story', id: 1 },
    { name: 'Why I Love You', id: 2 },
  ];

  return (
    <motion.nav
      className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-navy-900/80 backdrop-blur-lg border-b border-crimson-500/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center gap-8 w-full">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => {
              setActive(section.id);
              onScroll(section.id);
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              active === section.id
                ? 'bg-crimson-500/30 text-crimson-300'
                : 'text-gray-400 hover:text-crimson-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.name}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
