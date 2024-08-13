export { Carousel }

import { homepageProps } from '@/lib'
import { homepageProps as engProps } from '@/lib/translations'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { Hero } from './Hero'

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 6000 }),
    WheelGesturesPlugin(),
  ])

  const { urlPathname } = usePageContext()

  const translatedProps = urlPathname.startsWith('/en')
    ? engProps
    : homepageProps

  return (
    <div id='home' ref={emblaRef} className='overflow-hidden'>
      <div className='flex w-full'>
        {translatedProps.slideProps.map((slide, idx) => (
          <Hero key={idx} className='min-w-0 flex-[0_0_100%]' {...slide} />
        ))}
      </div>
    </div>
  )
}
