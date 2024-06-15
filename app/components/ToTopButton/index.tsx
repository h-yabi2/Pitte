import * as React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'
const s = styles

export const ToTopButton = () => {
  return (
    <div className={s.toTopButton}>
      <Link href="#top">
        <span></span>
      </Link>
    </div>
  )
}
