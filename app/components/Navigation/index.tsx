import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from '@/app/components/MenuItem'

import styles from './styles.module.scss'
const s = styles

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

interface NavigationProps {
  clickHandler: () => void
}

export const Navigation = ({ clickHandler }: NavigationProps) => (
  <motion.ul variants={variants} className={`${s.navigation}`}>
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} clickHandler={clickHandler} />
    ))}
  </motion.ul>
)

const itemIds = [0]
