'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './styles.module.scss'
const s = styles

import { Title } from '@/app/components/Title'

const list = [
  {
    course: '初回お試しコース',
    prices: [
      {
        title: '60分',
        price: '1,000',
      },
    ],
  },
  {
    course: '20分コース',
    prices: [
      {
        title: '通常<br />料金',
        price: '3,500',
      },
      {
        title: '早割<br />料金',
        price: '3,000',
      },
    ],
    text: 'ワキやヒゲなどお悩みの部位をピンポイントで脱毛したい方におすすめ',
  },
  {
    course: '60分コース',
    prices: [
      {
        title: '通常<br />料金',
        price: '6,000',
      },
      {
        title: '早割<br />料金',
        price: '5,500',
      },
    ],
    text: 'サクッと全身脱毛を済ませたい方におすすめ',
    popularity: true,
  },
  {
    course: '90分コース',
    prices: [
      {
        title: '通常<br />料金',
        price: '7,500',
      },
      {
        title: '早割<br />料金',
        price: '7,000',
      },
    ],
    text: 'ペア来店やじっくり脱毛したい方におすすめ',
  },
  {
    course: '回数券',
    prices: [
      {
        title: '5回<br />60分',
        price: '25,000',
      },
      {
        title: '10回<br />60分',
        price: '40,000',
      },
    ],
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

const itemVariants = (index: number, width: number): Variants => {
  // index が 4 の場合は 0 にリセット
  const effectiveIndex = index % 4
  const delay = width > 750 ? effectiveIndex * 0.2 : 0
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
        delay,
      },
    },
  }
}

export const Price: React.FC = () => {
  const width = useWindowWidth()

  return (
    <div id="price" className={s.root}>
      <Title title="Price" subTitle="料金" />
      <ul className={s.list}>
        {list.map((item, index) => (
          <motion.li
            key={index}
            className={`${s.item} common-radius`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants(index, width)}
          >
            <h3 className={s.title}>{item.course}</h3>
            <div className={s.contents}>
              <ul className={s.contents__list}>
                {item.prices.map((price, index) => (
                  <li key={index}>
                    {/* dangerouslySetInnerHTML　を使用 */}
                    <span
                      className={s.contents__title}
                      dangerouslySetInnerHTML={{ __html: price.title }}
                    />
                    <span className={s.contents__price}>
                      {price.price}
                      <span>円(税込)</span>
                    </span>
                  </li>
                ))}
              </ul>
              {item.text && <p className={s.text}>{item.text}</p>}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
