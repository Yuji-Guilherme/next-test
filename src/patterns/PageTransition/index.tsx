'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-screen" key={pathName}>
        {children}

        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-zinc-700 origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-zinc-700 origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export { PageTransition };
