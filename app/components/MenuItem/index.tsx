import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const menuItems = [
  { text: 'Pitteの特徴', href: '#feature' },
  { text: '料金', href: '#price' },
  { text: 'こんな方におすすめ', href: '#recommended' },
  { text: '選ばれる4つの理由', href: '#strongPoint' },
]

interface MenuItemProps {
  clickHandler: () => void
  i: number
}

export const MenuItem = ({ clickHandler, i }: MenuItemProps) => {
  return (
    <>
      {menuItems.map((item, index) => (
        <motion.li
          key={index}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={clickHandler}
        >
          <Link href={item.href}>{item.text}</Link>
        </motion.li>
      ))}
    </>
  )
}
