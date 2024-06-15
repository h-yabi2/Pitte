'use client'

import { KeyVisual } from '@/app/components/KeyVisual'
import { Contents } from '@/app/components/Contents'
import { Loading } from '@/app/components/Loading'
import { PageScreen } from '@/app/components/PageScreen'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <KeyVisual key="keyVisual" />
      <Contents key="contents" />
      <Loading key="loading" />
      <PageScreen key="pageScreen" />
    </AnimatePresence>
  )
}
