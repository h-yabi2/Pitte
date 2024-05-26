'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './styles.module.scss'
const s = styles

import Image from 'next/image'
import { Title } from '@/app/components/Title'
import { CheckIcon } from '@/app/components/CheckIcon'

const list = [
  '脱毛したいけど人に<span>見られるのが恥ずかしい…</span>',
  '<span>子どもがムダ毛を気にしている</span>のでなんとかしてあげたい',
  'しつこい勧誘や高額な契約をさせられないか不安…<br />（<span>完全無人なので一切なし！！</span>）',
  '<span>毎朝の髭剃りが面倒</span>、肌トラブルも気になる',
  '<span>老後の介護に備えて</span>脱毛しておきたい',
]

const itemVariants = (): Variants => {
  return {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }
}

export const Recommended: React.FC = () => {
  return (
    <div className={s.root}>
      <Title title="Recommended" subTitle="こんな方におすすめ" color="white" />
      <div className={`${s.contents} common-radius`}>
        <ul className={`${s.list}`}>
          {list.map((item, index) => (
            <motion.li
              key={index}
              className={`${s.item}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants()}
            >
              <CheckIcon />
              <motion.div dangerouslySetInnerHTML={{ __html: item }} />
            </motion.li>
          ))}
        </ul>
        <Image
          src="/images/recommended.png"
          alt="Recommended"
          width={738}
          height={818}
          className={s.image}
        />
      </div>
      <Image
        src="/images/recommended_text.svg"
        alt="そのお悩み、Pitteなら全て解決できます"
        width={663}
        height={51}
        className={`${s.text} mediaPC`}
      />
      <Image
        src="/images/recommended_text_sp.svg"
        alt="そのお悩み、Pitteなら全て解決できます"
        width={331}
        height={60}
        className={`${s.text} mediaSP`}
      />
    </div>
  )
}
