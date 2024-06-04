import React from 'react'
import styles from './styles.module.scss'
const s = styles
import Image from 'next/image'
import Link from 'next/link'

const menu = [
  {
    title: 'Pitteの特徴',
    link: '/feature',
  },
  {
    title: '料金',
    link: '/price',
  },
  {
    title: 'こんな方におすすめ',
    link: '/recommended',
  },
  {
    title: '選ばれる4つの理由',
    link: '/strong-point',
  },
]

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={s.root}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Pitte"
          width={160}
          height={58}
          className={s.logo}
        />
      </Link>
      <ul className={s.list}>
        {menu.map((item, index) => (
          <li key={index} className="ml-4">
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <small className={s.small}>
        © {currentYear} Pitte All Rights Reserved.
      </small>
    </footer>
  )
}
