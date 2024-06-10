'use client'

import React from 'react'
import styles from './styles.module.scss'
const s = styles

import { Feature } from '@/app/components/Feature'
import { Price } from '@/app/components/Price'
import { Recommended } from '@/app/components/Recommended'
import { StrongPoint } from '@/app/components/StrongPoint'
import { motion, Variants } from 'framer-motion'

const animationProps = {
  style: {
    backgroundImage: 'linear-gradient(transparent, 70%, yellow 70%)',
    backgroundRepeat: 'no-repeat',
    transition: 'background-size 0.3s',
  },
  viewport: {
    once: true,
  },
}

const itemVariants = (): Variants => {
  return {
    offscreen: {
      backgroundSize: '0% 100%',
    },
    onscreen: {
      backgroundSize: '100% 100%',
      transition: {
        type: 'spring',
        duration: 0.3,
        delay: 0.3,
      },
    },
  }
}

export const Contents: React.FC = () => {
  return (
    <main>
      <h1 className={s.title}>
        <motion.span
          {...animationProps}
          initial="offscreen"
          whileInView="onscreen"
          variants={itemVariants()}
        >
          『東京・綾瀬駅』
        </motion.span>
        に完全無人の
        <br className="mediaSP" />
        <motion.span
          {...animationProps}
          initial="offscreen"
          whileInView="onscreen"
          variants={itemVariants()}
        >
          セルフ脱毛サロン
        </motion.span>
        がOPEN！！
        <br />
        <motion.span
          {...animationProps}
          initial="offscreen"
          whileInView="onscreen"
          variants={itemVariants()}
        >
          業務用の高品質な脱毛器
        </motion.span>
        が<br className="mediaSP" />
        格安で使い放題◎
      </h1>
      <Feature />
      <Price />
      <Recommended />
      <StrongPoint />
    </main>
  )
}
