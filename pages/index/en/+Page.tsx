import { Carousel } from '@/components/Carousel'
import { Contacts } from '@/components/Contacts'
import { Gallery } from '@/components/Gallery'
import { Mission } from '@/components/Mission'
import { Rental } from '@/components/Rental'
import { Services } from '@/components/Services'
import { TextMedia } from '@/components/TextMedia'
import { homepageProps } from '@/lib'
import { homepageProps as engProps } from '@/lib/translations'
import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'

export default function Page() {
  const { urlPathname } = usePageContext()
  const translatedProps = urlPathname.startsWith('/en')
    ? engProps
    : homepageProps
  return (
    <>
      <Carousel />
      <Services {...translatedProps.servicesProps} />
      <TextMedia {...translatedProps.textMediaProps} />
      <Mission {...translatedProps.missionProps} />
      <Rental {...translatedProps.rentalProps} />
      <Gallery {...translatedProps.galleryProps} />
      <Contacts {...translatedProps.contactsProps} />
    </>
  )
}
