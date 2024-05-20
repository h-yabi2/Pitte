import React from 'react'
import styles from './styles.module.scss'
const s = styles

interface TitleProps {
  title: string
  subTitle: string
}

export const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <h2 className={s.root}>
      {title}
      <span>{subTitle}</span>
    </h2>
  )
}
