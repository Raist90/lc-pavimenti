import { Carousel } from '@/components/Carousel'
import { Contacts } from '@/components/Contacts'
import { Gallery } from '@/components/Gallery'
import { Mission } from '@/components/Mission'
import { Rental } from '@/components/Rental'
import { Services } from '@/components/Services'
import { TextMedia } from '@/components/TextMedia'
import { homepageProps } from '@/lib'
import React from 'react'

export default function Page() {
  return (
    <>
      <Carousel />
      <Services {...homepageProps.servicesProps} />
      <TextMedia {...homepageProps.textMediaProps} />
      <Mission {...homepageProps.missionProps} />
      <Rental {...homepageProps.rentalProps} />
      <Gallery {...homepageProps.galleryProps} />
      <Contacts {...homepageProps.contactsProps} />
    </>
  )
}
