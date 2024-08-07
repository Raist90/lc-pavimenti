export { Rental }

import rentalBG from '@/assets/sezione grandi lastre.jpg'
import { isArray } from '@/helpers/predicates'
import React, { useId } from 'react'
import { Media } from './Media'

type Benefit = {
  title: string
  list: string[]
  text?: string[]
}

type Step = {
  title: string
  text: string
}

type RentalProps = {
  title: string
  text: string
  steps: Step[]
  benefits: Benefit
}

/** @todo Refactor by using RentalStepCard component */
function Rental({ benefits }: RentalProps) {
  const { list: benefitsList } = benefits
  const titleID = useId()

  return (
    <section id='grandi-lastre' aria-labelledby={titleID}>
      <div className='mt-32 grid items-center gap-8 gap-x-20 lg:grid-cols-12 lg:pl-12'>
        <div className='px-4 lg:col-span-4 lg:justify-self-end lg:px-0'>
          <h3 className='title-2'>{benefits.title}:</h3>
          {isArray(benefits.text) &&
            benefits.text.map((t, idx) => <p key={idx}>{t}</p>)}

          <ul className='mt-4 list-[square] pl-8'>
            {benefitsList.map((benefit, idx) => (
              <li key={idx + 2}>{benefit}</li>
            ))}
          </ul>
        </div>

        <Media
          className='w-full lg:col-span-8'
          image={{ alt: '', src: rentalBG }}
        />
      </div>
    </section>
  )
}
