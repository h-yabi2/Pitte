'use client'

import { KeyVisual } from '@/app/components/KeyVisual'
import { Contents } from '@/app/components/Contents'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

export default function Home() {
  const isPresent = useIsPresent()
  return (
    <AnimatePresence mode="wait">
      <KeyVisual key="keyVisual" />
      <Contents key="contents" />
      <motion.div
        className="loading"
        key="loading"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          visibility: 'hidden',
          transition: { delay: 0.5 },
        }}
        exit={{ opacity: 1 }}
      >
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </motion.div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, delay: 0.9, ease: 'circOut' },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </AnimatePresence>
  )
}
