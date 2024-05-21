import React from 'react'
import styles from './styles.module.scss'
const s = styles

import { Title } from '@/app/components/Title'
import { Feature } from '@/app/components/Feature'

export const Contents: React.FC = () => {
  return (
    <main className={'px-4'}>
      <h1 className={s.title}>
        <span className="text-highlight">
          『東京・綾瀬駅』に完全無人のセルフ脱毛サロン
        </span>
        がOPEN！！
        <br />
        <span className="text-highlight">業務用の高品質な脱毛器</span>
        が格安で使い放題◎
      </h1>
      <Title title="Feature" subTitle="Pitteの特徴" />
      <Feature />
    </main>
  )
}
