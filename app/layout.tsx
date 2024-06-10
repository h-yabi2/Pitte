import type { Metadata } from 'next'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import './globals.scss'

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'セルフ脱毛サロン Pitte',
  description:
    '『東京・綾瀬駅』に完全無人のセルフ脱毛サロンがOPEN！！業務用の高品質な脱毛器が格安で使い放題◎',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    noimageindex: true,
    nosnippet: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={zenKakuGothicNew.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
