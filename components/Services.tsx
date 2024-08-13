export { Services }

import { isArray } from '@/helpers/predicates'
import React, { useId } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
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

  const { urlPathname } = usePageContext()

  const titleProps = {
    id: titleID,
    title: 'I nostri servizi',
    text: 'Offriamo una vasta gamma di servizi per rispondere a tutte le vostre esigenze di pavimentazione e rivestimento:',
  }

  const engTitleProps = {
    id: titleID,
    title: 'Our services',
    text: 'We offer a wide range of services to meet all your flooring and cladding needs:',
  }

  const translatedProps = urlPathname.startsWith('/en')
    ? engTitleProps
    : titleProps

  return (
    <section
      id='servizi'
      aria-labelledby={titleID}
      className='my-20 p-4 lg:mx-auto lg:w-10/12'
    >
      <Title {...translatedProps} />

      <div className='mt-16 grid gap-8 md:grid-cols-3'>
        {services.map((service) => (
          <div
            key={service.title}
            className='rounded-sm border border-gray-400 bg-blue-50 p-4 duration-300 ease-in-out hover:-translate-y-4 dark:border-blue-500 dark:bg-blue-900'
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
