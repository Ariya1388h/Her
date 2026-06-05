import { motion } from 'framer-motion';

export const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-2xl"
          style={{ left: `${heart.left}%`, bottom: '-50px' }}
          animate={{ y: window.innerHeight + 100 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};
