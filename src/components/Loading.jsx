import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-brand-500/20"
          />
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-t-brand-500 border-r-transparent border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="flex items-center gap-1 text-sm text-zinc-500">
          <span>Loading</span>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            >
              .
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
