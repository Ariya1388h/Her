import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Landing = ({ onStart }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-crimson-500/10 via-transparent to-purple-500/10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="relative z-10 w-full">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-crimson-400 via-crimson-300 to-crimson-400 bg-clip-text text-transparent leading-tight"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Seti
        </motion.h1>

        <motion.div
          className="text-xs sm:text-sm md:text-lg lg:text-2xl mb-6 sm:mb-8 text-gray-200 min-h-14 sm:min-h-16 md:min-h-20 flex items-center justify-center px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="leading-relaxed">A journey of love, memories, and infinite reasons why you mean everything to me.</p>
        </motion.div>

        <motion.div
          className="text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 space-y-2 sm:space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div>❤️</div>
          <div className="text-xs sm:text-sm md:text-base text-gray-400">Click to begin our story</div>
        </motion.div>

        <motion.button
          onClick={onStart}
          className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-crimson-600 to-crimson-500 text-white font-bold rounded-full text-sm sm:text-base md:text-lg overflow-hidden group hover:shadow-lg hover:shadow-crimson-500/50"
          initial={{ opacity: 0, y: 20 }}
          animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1.5 }}
        >
          <span className="relative z-10">Start the Journey</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-crimson-500 to-crimson-700"
            initial={{ x: '100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-xl sm:text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
      </motion.div>
    </motion.section>
  );
};
