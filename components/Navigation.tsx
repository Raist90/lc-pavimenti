export { Navigation }

import { Navigation as NavigationType } from '@/types'
import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { Link } from './Link'

function Navigation({ header: links }: NavigationType) {
  const { urlPathname } = usePageContext()
  const flag = urlPathname.startsWith('/en') ? '🇮🇹' : '🇬🇧'
  const flagUrl = urlPathname.startsWith('/en') ? '/' : '/en'
  return (
    <nav>
      <ul className='grid gap-2 font-bold md:flex md:items-center md:justify-center md:gap-5'>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li className='text-xl'>
          <Link href={flagUrl}>{flag}</Link>
        </li>
      </ul>
    </nav>
  )
}
