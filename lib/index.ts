export { globalProps, homepageProps }

import slide5 from '@/assets/12.jpg'
import slide6 from '@/assets/13.jpg'
import slide11 from '@/assets/14.jpg'
import slide20 from '@/assets/15.jpg'
import slide12 from '@/assets/19.jpg'
import slide13 from '@/assets/2.jpg'
import slide14 from '@/assets/21.jpg'
import slide15 from '@/assets/26.jpg'
import slide16 from '@/assets/3.jpg'
import slide19 from '@/assets/35.png'
import slide17 from '@/assets/39.jpg'
import { default as slide1, default as textMedia1 } from '@/assets/4.png'
import slide18 from '@/assets/42.jpg'
import slide4 from '@/assets/43.png'
import slide7 from '@/assets/64.png'
import slide9 from '@/assets/68.jpg'
import slide10 from '@/assets/72.jpg'
import slide2 from '@/assets/83.jpg'
import slide3 from '@/assets/84.jpg'
import slide8 from '@/assets/86.jpg'
import { Contacts } from '@/components/Contacts'
import { Gallery } from '@/components/Gallery'
import type { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { Rental } from '@/components/Rental'
import { Services } from '@/components/Services'
import { TextMedia } from '@/components/TextMedia'
import { PICSUM_API } from '@/constants'
import type { Navigation } from '@/types'
import type { ComponentProps } from 'react'

const navigationProps: Navigation = {
  header: [
    {
      label: 'Servizi',
      href: '/#servizi',
    },
    {
      label: 'Chi siamo',
      href: '/#chi-siamo',
    },
    {
      label: 'Noleggio',
      href: '/#noleggio',
    },
    {
      label: 'Contattaci',
      href: '/#contattaci',
    },
  ],
  footer: {
    text: 'CONVERTINO S.R.L., VIA SPECCHIOLLA ZONA IND.LE – 72019 SAN VITO DEI NORMANNI (BR) – P.IVA/C.F. 01898970742',
  },
}

const slideProps: ComponentProps<typeof Hero>[] = [
  {
    cta: {
      href: '/#contattaci',
      label: 'Contattaci',
      text: 'Specialisti nel noleggio di piattaforme aeree e nella realizzazione di lavori e ristrutturazioni',
    },
    image: {
      alt: 'Banner',
      src: slide1,
    },
    title: 'Benvenuti su Convertino SRL',
  },
  {
    cta: {
      href: '/#chi-siamo',
      label: 'Chi siamo',
      text: 'Da oltre 40 anni, Convertino SRL offre servizi di alta qualità nel settore delle piattaforme aeree e delle ristrutturazioni',
    },
    image: {
      alt: 'Banner',
      src: slide9,
    },
    title: 'Alta qualità',
  },
  {
    cta: {
      href: '/#servizi',
      label: 'Servizi',
      text: 'Siamo specializzati in una vasta gamma di servizi di ristrutturazione e manutenzione',
    },
    image: {
      alt: 'Banner',
      src: slide13,
    },
    title: 'Specialisti della ristrutturazione',
  },
]

const servicesProps: ComponentProps<typeof Services> = {
  services: [
    {
      list: [
        'Piattaforme autocarrate',
        'Piattaforme semoventi',
        'Piattaforme verticali',
        'Ragni e piattaforme cingolate',
      ],
      title: 'Noleggio piattaforme aeree',
      text: [
        'Offriamo una vasta gamma di piattaforme aeree per qualsiasi tipo di lavoro in quota. Le nostre attrezzature sono moderne, sicure e regolarmente manutenute. Tra le nostre proposte:',
      ],
    },
    {
      list: [
        'Ristrutturazioni interne ed esterne',
        'Rifacimento facciate',
        'Manutenzione edifici',
        'Realizzazione di nuove costruzioni',
      ],
      title: 'Lavori e ristrutturazioni',
      text: [
        'Il nostro team di esperti è specializzato in una vasta gamma di servizi di ristrutturazione e manutenzione. Dal piccolo intervento alla ristrutturazione completa, ci occupiamo di:',
      ],
    },
  ],
}

const textMediaProps: ComponentProps<typeof TextMedia> = {
  image: {
    alt: '',
    src: textMedia1,
  },
  texts: [
    {
      title: 'La nostra storia',
      paragraphs: [
        'Da oltre 40 anni, Convertino SRL offre servizi di alta qualità nel settore delle piattaforme aeree e delle ristrutturazioni.',
        'La nostra esperienza e professionalità ci rendono un punto di riferimento nel mercato. Siamo orgogliosi di fornire soluzioni su misura per ogni tipo di progetto, garantendo sicurezza, efficienza e risultati eccellenti.',
      ],
    },
  ],
}

const missionProps: ComponentProps<typeof Mission> = {
  title: 'La nostra Mission',
  texts: [
    "La nostra mission è quella di facilitare il lavoro dei nostri clienti offrendo attrezzature all'avanguardia e servizi di ristrutturazione eseguiti da personale qualificato.",
    'Puntiamo a diventare il vostro partner di fiducia, assicurando sempre la massima soddisfazione.',
  ],
}

const rentalProps: ComponentProps<typeof Rental> = {
  title: 'Come Funziona il Noleggio?',
  text: 'Noleggiare una piattaforma aerea da Convertino SRL è semplice e veloce:',
  steps: [
    {
      title: 'Scegli la piattaforma',
      text: 'Consulta il nostro catalogo e scegli l’attrezzatura più adatta alle tue esigenze.',
    },
    {
      title: 'Richiedi un preventivo',
      text: 'Contattaci per un preventivo gratuito e senza impegno.',
    },
    {
      title: 'Conferma il noleggio',
      text: 'Una volta confermato, organizzeremo la consegna della piattaforma nel luogo e nel momento da te indicati.',
    },
  ],
  benefits: {
    title: 'Vantaggi del noleggio',
    list: [
      'Attrezzature all’avanguardia',
      'Consegna e ritiro a domicilio',
      'Assistenza tecnica dedicata',
      'Flessibilità nei tempi di noleggio',
    ],
  },
}

const galleryProps: ComponentProps<typeof Gallery> = {
  images: [
    {
      alt: '',
      src: slide1,
    },
    {
      alt: '',
      src: slide2,
    },
    {
      alt: '',
      src: slide3,
    },
    {
      alt: '',
      src: slide4,
    },
    {
      alt: '',
      src: slide5,
    },
    {
      alt: '',
      src: slide6,
    },
    {
      alt: '',
      src: slide7,
    },
    {
      alt: '',
      src: slide8,
    },
    {
      alt: '',
      src: slide9,
    },
    {
      alt: '',
      src: slide10,
    },
    {
      alt: '',
      src: slide11,
    },
    {
      alt: '',
      src: slide12,
    },
    {
      alt: '',
      src: slide13,
    },
    {
      alt: '',
      src: slide14,
    },
    {
      alt: '',
      src: slide15,
    },
    {
      alt: '',
      src: slide16,
    },
    {
      alt: '',
      src: slide17,
    },
    {
      alt: '',
      src: slide18,
    },
    {
      alt: '',
      src: slide19,
    },
    {
      alt: '',
      src: slide20,
    },
  ],
  title: 'I nostri lavori',
  text: 'Dai un’occhiata ad alcuni dei nostri progetti più recenti e scopri come abbiamo aiutato i nostri clienti a realizzare i loro obiettivi. La qualità del nostro lavoro parla per noi.',
}

const contactsProps: ComponentProps<typeof Contacts> = {
  infos: [
    {
      type: 'phone',
      text: '+39 355 624 2449',
    },
    {
      type: 'email',
      text: 'info@convertinoedilizia.it',
    },
    {
      type: 'address',
      text: 'Viale Francia 72019 San Vito dei Normanni, Puglia',
    },
  ],
  socials: [
    {
      type: 'fb',
      href: 'https://www.facebook.com/profile.php?id=100067893503970',
    },
    {
      type: 'ig',
      href: 'https://www.instagram.com/convertinosrl/',
    },
  ],
  title: 'Contattaci',
  text: 'Hai bisogno di un preventivo o vuoi maggiori informazioni sui nostri servizi? Non esitare a contattarci. Siamo a tua disposizione per rispondere a tutte le tue domande.',
}

type HomepageProps = {
  contactsProps: typeof contactsProps
  galleryProps: typeof galleryProps
  missionProps: typeof missionProps
  rentalProps: typeof rentalProps
  servicesProps: typeof servicesProps
  slideProps: typeof slideProps
  textMediaProps: typeof textMediaProps
}

const homepageProps: HomepageProps = {
  contactsProps,
  galleryProps,
  missionProps,
  rentalProps,
  servicesProps,
  slideProps,
  textMediaProps,
}

type GlobalProps = {
  navigationProps: typeof navigationProps
}

const globalProps: GlobalProps = {
  navigationProps,
}
