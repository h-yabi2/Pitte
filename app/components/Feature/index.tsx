'use client'

import React, { useState, useEffect } from 'react'
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
    img: '/images/feature04-2.png',
    title: '綾瀬駅から徒歩○分',
    text: '綾瀬駅から徒歩○分とアクセスも抜群！<br />お仕事帰りやお買い物ついでに気軽に立ち寄れます。',
    link: '/',
  },
  {
    img: '/images/feature05-2.png',
    title: '総額4万円で全身脱毛が完了◎',
    text: '<span class="font-bold">綾瀬・亀有地区での最安値を宣言</span>！！<br />今時、脱毛はセルフで安く済ませる時代♪<br />※回数券（15回）40,000円を購入時を想定',
    link: '/',
  },
]

const useWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

const itemVariants = (index: number, width: number): Variants => {
  // index が 3 の場合は 0 にリセット
  const effectiveIndex = index % 3
  const delay = width > 750 ? effectiveIndex * 0.2 : 0

  return {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
        delay,
      },
    },
  }
}

export const Feature: React.FC = () => {
  const width = useWindowWidth()

  return (
    <div id="feature" className={s.root}>
      <Title title="Feature" subTitle="Pitteの特徴" />
      <ul className={s.list}>
        {list.map((item, index) => (
          <motion.li
            key={index}
            className={s.item}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants(index, width)}
          >
            <div className="flex flex-col items-center">
              <Image src={item.img} width={370} height={260} alt="" />
              <h3 className={s.title}>{item.title}</h3>
              <p
                className={s.text}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href={item.link} className={s.link}>
                VIEW MORE
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
