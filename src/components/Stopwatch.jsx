import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { calculateDaysElapsed, formatDaysToTime } from '../utils/dateUtils';

export const Stopwatch = () => {
  const [elapsed, setElapsed] = useState('');
  const START_DATE = '2026-01-29'; // Gregorian format: YYYY-MM-DD

  useEffect(() => {
    const updateElapsed = () => {
      const days = calculateDaysElapsed(START_DATE);
      setElapsed(formatDaysToTime(days));
    };

    // Update immediately
    updateElapsed();
    
    // Update every minute
    const interval = setInterval(updateElapsed, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-crimson-400 to-crimson-300 bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Our Time Together ⏱️
      </motion.h2>

      <div className="max-w-2xl w-full px-4">
        {/* Stopwatch Card */}
        <motion.div
          className="bg-gradient-to-br from-crimson-600/20 to-crimson-500/10 border-2 border-crimson-500/50 rounded-3xl p-6 sm:p-8 md:p-16 backdrop-blur-lg text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-crimson-400 via-crimson-300 to-crimson-400 bg-clip-text mb-4 sm:mb-6 font-mono break-words"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {elapsed || 'Loading...'}
          </motion.div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
            Since we got closer on <span className="text-crimson-400 font-semibold">January 29, 2026</span>
          </p>
        </motion.div>

        {/* Message */}
        <motion.div
          className="mt-8 sm:mt-12 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Every second with you is precious. Every day without you feels incomplete.
          </p>
          <p className="text-crimson-400 text-base sm:text-lg md:text-xl font-semibold">
            And every moment of forever is yours.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
