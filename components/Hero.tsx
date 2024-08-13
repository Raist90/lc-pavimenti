export { Hero }

import type { Image, Link as LinkType } from '@/types'
import clsx from 'clsx'
import React, { useId } from 'react'
import { Link } from './Link'
import { Media } from './Media'

// const MAX_TITLE_LENGTH = 20

type HeroProps = {
  cta: LinkType & {
    text: string
  }
  image: Image
  title: string
  className?: string
}

function Hero({ cta, image, title, ...rest }: HeroProps) {
  const { className } = rest
  const titleID = useId()
  // const isOverMaxChars = title.length >= MAX_TITLE_LENGTH

  return (
    <section
      aria-labelledby={titleID}
      className={clsx(className, 'relative h-[500px] lg:h-[500px]')}
    >
      <Media
        className={clsx(className, 'relative h-[500px] lg:h-[500px]')}
        image={image}
      />

      <div className='absolute left-[50%] top-[50%] z-[1] w-full max-w-[80%] translate-x-[-50%] translate-y-[-50%] text-balance border border-white bg-white/60 p-2 text-center dark:border-black dark:bg-black/60 lg:max-w-fit lg:p-4'>
        <h2 id={titleID} className='mb-2 text-3xl font-bold'>
          {title}
        </h2>
        <div className='px-4'>
          <p className='lg:text-lg'>{cta.text}</p>
          <Link className='mx-auto mt-5 inline-block' href={cta.href}>
            <span className='button-base button-primary inline-block dark:bg-green-900'>
              {cta.label}
            </span>
          </Link>
        </div>
      </div>

      <div className='absolute left-0 top-0 h-full w-full bg-white/10 dark:bg-dark-primary/10' />
    </section>
  )
}
