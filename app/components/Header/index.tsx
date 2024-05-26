import React from 'react'
import styles from './styles.module.scss'
const s = styles
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@/app/components/Menu'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-3 md:py-4 px-4 md:px-5 relative">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Pitte"
          width={160}
          height={58}
          className={s.logo}
        />
      </Link>
      <Menu />
    </header>
  )
}
