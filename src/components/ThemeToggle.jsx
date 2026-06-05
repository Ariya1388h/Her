import { motion } from 'framer-motion';
import { useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-40 p-3 bg-crimson-500/20 border border-crimson-500/50 rounded-full text-crimson-300 hover:bg-crimson-500/30 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title="Toggle theme"
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
};
