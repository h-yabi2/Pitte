'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './styles.module.scss'
const s = styles

import { Title } from '@/app/components/Title'
import Image from 'next/image'

const list = [
  {
    title: 'ハイスペック脱毛機『ルミクス』<br />シリーズを採用',
    description:
      'あの有名な『ローランド』が経営する脱毛サロン（RBL）や有人サロン（スタッフが施術するサロン）での採用実績が豊富なので信頼性抜群！',
    image: '/images/strong_point01.png',
  },
  {
    title: 'ペア入室追加料金なし',
    description:
      '親子やお友達、夫婦・カップルなど2人まで同時入室OK！<br />1人では難しい背中などの部位も、ペアで脱毛すればしっかし施術できます。さらに、ワリカンすればお財布にもやさしい！',
    image: '/images/strong_point02.png',
  },
  {
    title: 'セキュリティもバッチリ',
    description:
      '入室パスコードは、予約ごと変更されその時間に使用する方しか入室できません。またサロン出入り口のみ防犯カメラの設置があり、スタッフが管理しています。急なトラブル時も安心です。',
    image: '/images/strong_point03.png',
  },
  {
    title: 'スマホで完結',
    description:
      'ご予約からお支払いまでスマホでスピーディに完結。当日予約も可能なのでいつでも空いてる時間に気軽に利用できます。わずらわしさがなく、忙しい人や電話が苦手な人にもピッタリです。',
    image: '/images/strong_point04.png',
  },
]

const useWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize() // 初期値を設定
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}

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

export const StrongPoint: React.FC = () => {
  const width = useWindowWidth()

  return (
    <div className={s.root}>
      <Title title="Strong Point" subTitle="選ばれる4つの理由" />
      <ul className={s.list}>
        {list.map((item, index) => (
          <motion.li
            key={index}
            className={`${s.item}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants()}
          >
            <div className={s.text_wrap}>
              <p className={s.point}>Point {index + 1}</p>
              <h3
                className={s.title}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p
                className={s.description}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
            <Image
              className={`${s.image}`}
              src={item.image}
              width={1140}
              height={700}
              alt=""
            />
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
