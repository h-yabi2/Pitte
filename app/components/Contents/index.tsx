import React from 'react'
import styles from './styles.module.scss'
const s = styles

export const Contents: React.FC = () => {
  return (
    <main className={'px-4 mt-20'}>
      <h1 className={s.title}>
        <span className="text-highlight">
          『東京・綾瀬駅』に完全無人のセルフ脱毛サロン
        </span>
        がOPEN！！
        <br />
        <span className="text-highlight">業務用の高品質な脱毛器</span>
        が格安で使い放題◎
      </h1>
    </main>
  )
}
