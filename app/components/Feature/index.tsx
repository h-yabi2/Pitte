'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './styles.module.scss'
const s = styles

import Image from 'next/image'
import Link from 'next/link'
import { Title } from '@/app/components/Title'

const list = [
  {
    img: '/images/feature01.png',
    title: '完全無人の脱毛サロン',
    text: '顔脱毛・VIO脱毛も含む、全身脱毛が完全セルフでできる！「人に見られるのが恥ずかしい…」という方も周りを気にせず脱毛処理できるのが魅力です。',
    link: '/',
  },
  {
    img: '/images/feature04.png',
    title: 'セルフだから驚きの安さを実現',
    text: 'スタッフが施術するサロンは人件費が掛かるため高額になりがち、Pitteはセルフ脱毛なので高コスパ間違いなし◎',
    link: '/',
  },
  {
    img: '/images/feature03.png',
    title: 'プロ仕様の脱毛器を使い放題',
    text: 'スタッフが施術するサロンの多くで使用されている高性能の脱毛器なので脱毛効果は抜群です◎',
    link: '/',
  },
  {
    img: '/images/feature04.png',
    title: '綾瀬駅から徒歩○分',
    text: '高額なサロンとは違い、都度払い・回数券購入が選べて無理なく通えます♪',
    link: '/',
  },
  {
    img: '/images/feature05.png',
    title: '最短6ヶ月で全身脱毛',
    text: '予約のとりにくいサロン式の脱毛では長期間になりがちですが、自分の予定に合わせた予約がとれるセルフ脱毛なら完了期間も大幅短縮できます！',
    link: '/',
  },
]

const itemVariants = (index: number): Variants => {
  // index が 3 の場合は 0 にリセット
  const effectiveIndex = index % 3

  return {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        delay: effectiveIndex * 0.15,
      },
    },
  }
}

export const Feature: React.FC = () => {
  return (
    <>
      <Title title="Feature" subTitle="Pitteの特徴" />
      <ul className={s.root}>
        {list.map((item, index) => (
          <motion.li
            key={index}
            className={s.item}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants(index)}
          >
            <div>
              <Image src={item.img} width={370} height={260} alt="" />
              <h3 className={s.title}>{item.title}</h3>
              <p className={s.text}>{item.text}</p>
            </div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href={item.link} className={s.link}>
                VIEW MORE
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </>
  )
}
