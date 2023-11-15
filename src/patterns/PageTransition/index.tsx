'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import * as S from './style';

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div className={S.wrapperClassName} key={pathName}>
        {children}

        <motion.div
          className={S.originBottomClassName}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className={S.originTopClassName}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export { PageTransition };
