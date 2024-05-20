import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '@/app/components/Menu'

export const Header: React.FC = () => {
  return (
    <header className='flex justify-between items-center py-4 px-5 relative'>
      <Link href="/">
          <Image src="/images/logo.svg" alt="Pitte" width={160} height={58} className='' />
      </Link>
      <Menu />
    </header>
  )
}
