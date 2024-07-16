export { Services }

import { isArray } from '@/helpers/predicates'
import React, { useId } from 'react'
import { Title } from './Title'

type Services = {
  services: {
    list?: string[]
    title: string
    text: string[]
  }[]
}

/** @todo Refactor into ServiceCard component */
function Services({ services }: Services) {
  const titleID = useId()

  const titleProps = {
    id: titleID,
    title: 'I nostri servizi',
    text: 'Scopri i nostri servizi e la nostra ampia gamma di soluzioni per privati e aziende.',
  }

  return (
    <section
      id='servizi'
      aria-labelledby={titleID}
      className='my-20 p-4 lg:mx-auto lg:w-10/12'
    >
      <Title {...titleProps} />

      <div className='mt-16 grid gap-8 md:grid-cols-2'>
        {services.map((service) => (
          <div
            key={service.title}
            className='rounded-sm border border-gray-400 bg-red-50 p-4 duration-300 ease-in-out hover:-translate-y-4 dark:border-red-500 dark:bg-red-700'
          >
            <h3 className='mb-2 font-bold uppercase'>{service.title}</h3>
            {service.text.map((paragraph, idx) => (
              <React.Fragment key={idx + 2}>
                <p className='mb-2 text-balance last:mb-0'>{paragraph}</p>
                {isArray(service.list) && (
                  <ul className='list-[square] pl-8'>
                    {service.list.map((item, idx) => (
                      <li key={idx + 2}>{item}</li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
