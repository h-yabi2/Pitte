'use client'

import { KeyVisual } from '@/app/components/KeyVisual'
import { Contents } from '@/app/components/Contents'
import { Loading } from '@/app/components/Loading'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

export default function Home() {
  const isPresent = useIsPresent()
  return (
    <AnimatePresence mode="wait">
      <KeyVisual key="keyVisual" />
      <Contents key="contents" />
      <Loading key="loading" />
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
