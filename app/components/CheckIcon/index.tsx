import * as React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'
const s = styles

export const CheckIcon = () => {
  return (
    <Image
      src="/images/checkicon.svg"
      alt="Pitte"
      width={32}
      height={30}
      className={s.logo}
    />
  )
}
