'use client'

import React from 'react'
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
        title: '通常料金',
        price: '3,500',
      },
      {
        title: '早割料金',
        price: '3,000',
      },
    ],
    text: 'ワキやヒゲなどお悩みの部位をピンポイントで脱毛したい方におすすめ',
  },
  {
    course: '60分コース',
    prices: [
      {
        title: '通常料金',
        price: '6,000',
      },
      {
        title: '早割料金',
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
        title: '通常料金',
        price: '7,500',
      },
      {
        title: '早割料金',
        price: '7,000',
      },
    ],
    text: 'ペア来店やじっくり脱毛したい方におすすめ',
  },
  {
    course: '回数券',
    prices: [
      {
        title: '5回60分',
        price: '25,000',
      },
      {
        title: '10回60分',
        price: '40,000',
      },
    ],
  },
]

const itemVariants: Variants = {
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

export const Price: React.FC = () => {
  return (
    <div className={s.root}>
      <Title title="Price" subTitle="料金" />
      <ul className={s.list}>
        {list.map((item, index) => (
          <motion.li
            key={index}
            className={s.item}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
          >
            <h3>{item.course}</h3>
            {item.text && <p>{item.text}</p>}
            <ul>
              {item.prices.map((price, index) => (
                <li key={index}>
                  <span>{price.title}</span>
                  <span>{price.price}円</span>
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
