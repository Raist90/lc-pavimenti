export { Header }

import logo from '@/assets/convertino-logo-var1.png'
import { assert } from '@/helpers/assert'
import { useTheme } from '@/helpers/useTheme'
import { globalProps } from '@/lib'
import clsx from 'clsx'
import { SquareMenu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Drawer } from './Drawer'
import { Media } from './Media'
import { Navigation } from './Navigation'
import { ThemeSwitcher } from './ThemeSwitcher'

function Header() {
  const storedTheme = useTheme()

  let [isOpen, setIsOpen] = useState(false)
  let [theme, setTheme] = useState(storedTheme)
  let [mounted, setMounted] = useState(false)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = (): void => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('prefered-theme', updatedTheme)
    setTheme(updatedTheme)
  }

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    const errMsg = "Couldn't retrieve Theme inside <Header> component"
    assert(theme, errMsg)
    root.classList.add(theme)
  }, [theme])

  if (!mounted) return

  /** @todo Refactor with LogoWrapper */
  return (
    <div className='sticky top-0 z-[1] bg-white/70 backdrop-blur-md dark:bg-dark-primary/70'>
      <header
        className={clsx(
          !isOpen && 'border-b border-black dark:border-red-700',
          'flex items-center justify-between p-4 md:hidden',
        )}
        role='banner'
      >
        <button aria-label={!isOpen ? 'Open' : 'Close'} onClick={handleClick}>
          {!isOpen ? (
            <SquareMenu aria-hidden='true' />
          ) : (
            <X aria-hidden='true' />
          )}
        </button>
        <h1>
          <Media className='w-[120px]' image={{ alt: 'Logo', src: logo }} />
        </h1>

        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </header>
      <Drawer isOpen={isOpen}>
        <Navigation {...globalProps.navigationProps} />
      </Drawer>

      <header
        className='hidden items-center justify-around border-b border-black p-4 dark:border-red-700 md:flex'
        role='banner'
      >
        <h1>
          <Media className='w-[120px]' image={{ alt: 'Logo', src: logo }} />
        </h1>

        <Navigation {...globalProps.navigationProps} />

        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </header>
    </div>
  )
}
