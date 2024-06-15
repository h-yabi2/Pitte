import * as React from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.scss'
const s = styles

export const Loading = () => {
  return (
    <motion.div
      className={s.loading}
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
  )
}
