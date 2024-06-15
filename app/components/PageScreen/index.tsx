import * as React from 'react'
import { motion, useIsPresent } from 'framer-motion'

import styles from './styles.module.scss'
const s = styles

export const PageScreen = () => {
  const isPresent = useIsPresent()
  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: { duration: 0.5, delay: 0.9, ease: 'circOut' },
      }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className={s.pageScreen}
    />
  )
}
