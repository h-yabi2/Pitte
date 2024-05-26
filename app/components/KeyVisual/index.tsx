import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'
const s = styles

export const KeyVisual: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.inner}>
        <Image
          src="/images/kv.png"
          alt=""
          width={1287}
          height={669}
          className="w-full h-auto mediaPC"
        />
        <Image
          src="/images/kv_sp.png"
          alt=""
          width={720}
          height={1090}
          className="w-full h-auto mediaSP"
        />
      </div>
    </div>
  )
}
