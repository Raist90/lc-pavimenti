import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import React, { useId, type ComponentProps } from 'react'
import { Title } from './Title'

export { Contacts }

type Info = {
  type: 'phone' | 'email' | 'address'
  text: string
}

type Social = {
  type: 'fb' | 'ig'
  href: string
}

type ContactsProps = {
  infos: Info[]
  socials: Social[]
  title: string
  text: string
}

function Contacts({ infos, socials, title, text }: ContactsProps) {
  const titleID = useId()
  const titleProps: ComponentProps<typeof Title> = {
    id: titleID,
    title,
    text,
    textDirection: 'left',
  }
  const infoList = {
    phone: <Phone size={18} fill='dodgerblue' />,
    email: <Mail size={18} fill='dodgerblue' />,
    address: <MapPin size={18} fill='dodgerblue' />,
  }
  const socialList = {
    fb: <Facebook fill='dodgerblue' />,
    ig: <Instagram fill='dodgerblue' />,
  }

  return (
    <section
      id='contattaci'
      aria-labelledby={titleID}
      className='mb-20 mt-32 grid gap-8 px-4 md:mx-auto md:w-11/12 md:grid-cols-2'
    >
      <div className='md:w-10/12'>
        <Title {...titleProps} />

        <div className='mt-4'>
          <ul className='grid gap-2 text-sm lg:text-base'>
            {infos.map((info) => (
              <li className='flex items-center gap-2' key={info.type}>
                <span className='w-fit'>{infoList[info.type]}</span>
                {info.type === 'email' ? (
                  <a className='hover:underline' href={`mailto:${info.text}`}>
                    {info.text}
                  </a>
                ) : (
                  info.text
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-4'>
          <h3 className='mb-2 font-bold uppercase'>Seguici su:</h3>

          <ul className='flex gap-2'>
            {socials.map((social) => (
              <li key={social.type}>
                <a href={social.href} target='_blank' rel='noreferrer'>
                  {socialList[social.type]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.4836394681015!2d17.70011871218685!3d40.66331147128181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134667066ca6f1df%3A0x5f472465fdb5c890!2sVia%20Annibale%20de%20Leo%2C%2015%2C%2072019%20San%20Vito%20dei%20Normanni%20BR!5e0!3m2!1sit!2sit!4v1721160015017!5m2!1sit!2sit'
          width='100%'
          height='450'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
  )
}
