import { motion } from 'framer-motion';
import timeline from '../data/timeline.json';

export const OurStory = () => {
  return (
    <motion.section
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-20 bg-gradient-to-r from-crimson-400 to-crimson-300 bg-clip-text text-transparent"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Our Story 💕
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-crimson-500 to-crimson-400" />

          {timeline.timeline.map((moment, index) => (
            <motion.div
              key={moment.id}
              className={`mb-8 sm:mb-12 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'} md:w-5/12 w-full`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-crimson-500 rounded-full border-4 border-navy-900 z-10" />

              {/* Card */}
              <motion.div
                className="bg-crimson-500/10 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-crimson-500/30 ml-6 sm:ml-8 md:ml-0 hover:border-crimson-500/60 transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{moment.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-crimson-400 break-words">{moment.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400">{moment.date}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-200">{moment.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="mt-12 sm:mt-16 md:mt-20 text-center text-gray-300 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-base sm:text-lg">
          These are just the beginning of our forever story...
        </p>
      </motion.div>
    </motion.section>
  );
};
