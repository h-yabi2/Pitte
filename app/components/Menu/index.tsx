'use client'

import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '@/app/hooks/use-dimensions'
import { MenuToggle } from '@/app/components/MenuToggle'
import { Navigation } from '@/app/components/Navigation'

import styles from './styles.module.scss'
const s = styles

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`, // 右上から開始
    transition: {
      type: 'spring',
      stiffness: 35,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 40px) 40px)', // 右上から閉じる
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className={s.root}>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className={`${s.nav}`}
      >
        <MenuToggle toggle={() => toggleOpen()} />
        <div className={`${s.inner} ${isOpen ? s.isOpen : s.isClosed}`}>
          <motion.div className={s.background} variants={sidebar} />
          <Navigation />
        </div>
      </motion.nav>
    </div>
  )
}
