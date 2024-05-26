import React from 'react'
import styles from './styles.module.scss'
const s = styles

interface TitleProps {
  title: string
  subTitle: string
  color?: 'default' | 'white'
}

export const Title: React.FC<TitleProps> = ({
  title,
  subTitle,
  color = 'default',
}) => {
  return (
    <h2 className={`${s.root} ${color === 'white' ? s.white : ''}`}>
      {title}
      <span>{subTitle}</span>
    </h2>
  )
}
