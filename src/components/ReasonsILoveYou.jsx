import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import reasons from '../data/reasons.json';

export const ReasonsILoveYou = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.reasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.reasons.length) % reasons.reasons.length);
  };

  const currentReason = reasons.reasons[currentIndex];
  const progress = ((currentIndex + 1) / reasons.reasons.length) * 100;

  return (
    <motion.section
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-crimson-400 to-crimson-300 bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Reasons I Love You
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base md:text-lg px-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        Click through to discover why you mean so much to me ✨
      </motion.p>

      <div className="max-w-2xl w-full">
        {/* Reason Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="bg-gradient-to-br from-crimson-600/20 to-crimson-500/10 border-2 border-crimson-500/50 rounded-2xl p-6 sm:p-8 md:p-12 min-h-48 sm:min-h-56 md:min-h-64 flex items-center justify-center backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-center text-gray-100 leading-relaxed">
              {currentReason}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}
        <motion.div className="mt-6 sm:mt-8 w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-crimson-500 to-crimson-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Counter */}
        <motion.div
          className="text-center mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {currentIndex + 1} / {reasons.reasons.length}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 flex-wrap">
          <motion.button
            onClick={handlePrev}
            className="px-5 sm:px-8 py-2 sm:py-3 bg-crimson-500/20 border border-crimson-500/50 rounded-lg text-crimson-300 font-semibold hover:bg-crimson-500/30 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="px-5 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-crimson-600 to-crimson-500 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-crimson-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Next →
          </motion.button>
        </div>

        {/* Final Message */}
        {currentIndex === reasons.reasons.length - 1 && (
          <motion.div
            className="mt-8 sm:mt-12 text-center p-4 sm:p-6 bg-crimson-500/10 border border-crimson-500/30 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-crimson-300 text-sm sm:text-base md:text-lg font-semibold">
              And infinite more reasons... <br /> because you're simply you ❤️
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
