export { globalProps, homepageProps }

import slide1 from '@/assets/1 SLIDEcp.jpeg'
import slide2 from '@/assets/2 slidecp.jpg'
import slide3 from '@/assets/3 SLIDEcp.jpeg'
import slide4 from '@/assets/4 SLIDEcp.jpeg'
import slide5 from '@/assets/5 SLIDEcp.jpeg'
import slide6 from '@/assets/6 SLIDEcp.jpg'

import gallery1 from '@/assets/1 GALLERYcp.png'
import gallery9 from '@/assets/10 gallrycp.jpg'
import gallery10 from '@/assets/12 gallrycp.jpg'
import gallery11 from '@/assets/13 gallrtycp.jpg'
import gallery12 from '@/assets/14 gallrycp.jpg'
import gallery13 from '@/assets/15 gallrycp.jpg'
import gallery14 from '@/assets/16 gallrycp.jpg'
import gallery15 from '@/assets/17 gallrycp.jpg'
import gallery16 from '@/assets/18 gallrycp.jpg'
import gallery2 from '@/assets/2 slidecp.jpg'
import gallery3 from '@/assets/3 SLIDEcp.jpeg'
import gallery4 from '@/assets/4 SLIDEcp.jpeg'
import gallery5 from '@/assets/5 SLIDEcp.jpeg'
import gallery6 from '@/assets/6 GALLERYcp.png'
import gallery7 from '@/assets/8 gallerycp.jpg'
import gallery8 from '@/assets/9 gallrycp.jpg'
import textMedia1 from '@/assets/sezione storiacp.jpg'

import { Contacts } from '@/components/Contacts'
import { Gallery } from '@/components/Gallery'
import type { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { Rental } from '@/components/Rental'
import { Services } from '@/components/Services'
import { TextMedia } from '@/components/TextMedia'
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
      label: 'Grandi Lastre',
      href: '/#grandi-lastre',
    },
    {
      label: 'Contattaci',
      href: '/#contattaci',
    },
  ],
  footer: {
    text: 'LC PAVIMENTI, VIA ANNIBALE DE LEO 15 – 72019 SAN VITO DEI NORMANNI (BR) – P.IVA/C.F. 02724800749',
  },
}

const slideProps: ComponentProps<typeof Hero>[] = [
  {
    cta: {
      href: '/#contattaci',
      label: 'Contattaci',
      text: 'Specialisti in lavorazioni e posa di grandi lastre in gres porcellanato',
    },
    image: {
      alt: 'Banner',
      src: slide1,
    },
    title: 'LC Pavimenti e Rivestimenti',
  },
  {
    cta: {
      href: '/#chi-siamo',
      label: 'Chi siamo',
      text: 'Attrezzatura professionale per posa di lastre di qualsiasi dimensioni',
    },
    image: {
      alt: 'Banner',
      src: slide2,
    },
    title: 'Attrezzatura professionale',
  },
  {
    cta: {
      href: '/#servizi',
      label: 'Servizi',
      text: 'Realizzazione di top cucine e lavandini fatti in opera in gres porcellanato.',
    },
    image: {
      alt: 'Banner',
      src: slide3,
    },
    title: 'Top cucine e lavandini',
  },
  {
    cta: {
      href: '/#contattaci',
      label: 'Contattaci',
      text: 'Ristrutturazioni chiavi in mano.',
    },
    image: {
      alt: 'Banner',
      src: slide4,
    },
    title: 'Ristrutturazioni',
  },
  {
    cta: {
      href: '/#chi-siamo',
      label: 'Chi siamo',
      text: 'Fornitura di materiali.',
    },
    image: {
      alt: 'Banner',
      src: slide5,
    },
    title: 'Materiali',
  },
  {
    cta: {
      href: '/#servizi',
      label: 'Servizi',
      text: 'Lavori realizzati con il proprio organico lavorativo.',
    },
    image: {
      alt: 'Banner',
      src: slide6,
    },
    title: 'Lavori in proprio',
  },
]

const servicesProps: ComponentProps<typeof Services> = {
  services: [
    {
      list: [
        'Soluzioni moderne e di design per ogni tipo di ambiente.',
        'Installazione precisa e duratura.',
      ],
      title: 'Pavimenti in Grandi Lastre',
      text: [''],
    },
    {
      list: [
        'Ideali per pareti, bagni, e cucine.',
        'Superfici uniformi e facili da pulire.',
      ],
      title: 'Rivestimenti in Grandi Lastre',
      text: [''],
    },
    {
      title: 'Pavimenti Tradizionali',
      text: [''],
      list: [
        'Parquet, gres porcellanato, e molto altro.',
        'Lavorazioni artigianali e materiali di alta qualità.',
      ],
    },
    {
      title: 'Rivestimenti Tradizionali',
      text: [''],
      list: [
        'Soluzioni classiche e personalizzabili.',
        'Ampia scelta di materiali e finiture.',
      ],
    },
    {
      title: 'Consulenza e Progettazione',
      text: [''],
      list: [
        'Assistenza nella scelta dei materiali e delle soluzioni migliori.',
        'Progetti su misura per ogni esigenza.',
      ],
    },
    {
      title: 'Ristrutturazioni chiavi in mano',
      text: [''],
      list: [
        'Ristrutturiamo la tua casa dalla A alla Z',
        'Progetti su misura per ogni esigenza',
      ],
    },
    {
      title:
        'Realizzazione di top cucine e lavandini fatti in opera in gres porcellanato',
      text: [''],
      list: [
        'Progettiamo la tua cucina da realizzare in gres porcellanato o in marmo',
        'Realizziamo zona top e rivestimenti',
      ],
    },
    {
      title: 'Fornitura di materiali',
      text: [''],
      list: [
        "Passa nel nostro store per visionare l'amplia scelta di materiali",
        'Ordiniamo e forniamo i materiali in tutta Italia',
      ],
    },
    {
      title: 'Lavori in loco per ogni tua esigenza',
      text: [''],
      list: ["Hai bisogno di un'altra tipologia di lavori? Contattaci"],
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
        'In LC Pavimenti e Rivestimenti, la nostra missione è fornire pavimenti e rivestimenti di eccellenza.',
        'Con un team di esperti e artigiani qualificati, ci impegniamo a soddisfare le esigenze dei nostri clienti con precisione e professionalità. La nostra passione per l’innovazione ci ha portato a specializzarci nell’uso di grandi lastre, un’opzione che offre numerosi vantaggi estetici e funzionali.',
      ],
    },
  ],
}

const missionProps: ComponentProps<typeof Mission> = {
  title: 'La nostra Mission',
  texts: [
    "La nostra azienda è specializzata nell'applicazione di pavimenti e rivestimenti di alta qualità. Con anni di esperienza nel settore, siamo orgogliosi di offrire soluzioni innovative e durature per i vostri spazi.",
    'Il nostro punto di forza? Le grandi lastre. Scoprite come possiamo trasformare il vostro ambiente con eleganza e funzionalità.',
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
    title: 'Grandi Lastre',
    text: [
      'Le grandi lastre rappresentano il futuro del design per pavimenti e rivestimenti. Grazie alle loro dimensioni e alle elevate prestazioni tecniche, sono la scelta ideale per chi desidera un ambiente moderno e raffinato. Ecco i vantaggi:',
    ],
    list: [
      'Estetica Continua: superfici ampie e senza giunture visibili.',
      'Facilità di Pulizia: meno fughe significa meno accumulo di sporco.',
      'Durabilità: resistenza a urti, graffi e macchie.',
      'Versatilità: adatte a pavimenti, pareti, piani di lavoro e molto altro.',
    ],
  },
}

const galleryProps: ComponentProps<typeof Gallery> = {
  images: [
    {
      alt: '',
      src: gallery1,
    },
    {
      alt: '',
      src: gallery2,
    },
    {
      alt: '',
      src: gallery3,
    },
    {
      alt: '',
      src: gallery4,
    },
    {
      alt: '',
      src: gallery5,
    },
    {
      alt: '',
      src: gallery6,
    },
    {
      alt: '',
      src: gallery7,
    },
    {
      alt: '',
      src: gallery8,
    },
    {
      alt: '',
      src: gallery9,
    },
    {
      alt: '',
      src: gallery10,
    },
    {
      alt: '',
      src: gallery11,
    },
    {
      alt: '',
      src: gallery12,
    },
    {
      alt: '',
      src: gallery13,
    },
    {
      alt: '',
      src: gallery14,
    },
    {
      alt: '',
      src: gallery15,
    },
    {
      alt: '',
      src: gallery16,
    },
  ],
  title: 'I nostri lavori',
  text: 'Sfogliate la nostra galleria per vedere alcune delle nostre realizzazioni. Ogni progetto è unico e riflette l’attenzione al dettaglio e la qualità che mettiamo in ogni installazione. Dai un’occhiata alle nostre soluzioni con grandi lastre e scopri come possiamo trasformare il tuo spazio.',
}

const contactsProps: ComponentProps<typeof Contacts> = {
  infos: [
    {
      type: 'phone',
      text: '+30 338 630 3534 | 338 822 3289',
    },
    {
      type: 'email',
      text: 'infolcpavimentierivestimenti@gmail.com',
    },
    {
      type: 'address',
      text: 'Via Annibale de Leo 15, 72019 San Vito dei Normanni (BR)',
    },
  ],
  socials: [
    // {
    //   type: 'fb',
    //   href: 'https://www.facebook.com/profile.php?id=100067893503970',
    // },
    {
      type: 'ig',
      href: 'https://www.instagram.com/lc_pavimenti_e_rivestimenti_/?hl=it',
    },
  ],
  title: 'Contattaci',
  text: 'Siamo qui per aiutarti a realizzare i tuoi progetti. Per qualsiasi domanda o per richiedere un preventivo, non esitare a contattarci. Il nostro team di esperti è a tua disposizione per offrirti consulenze personalizzate e guidarti nella scelta delle migliori soluzioni per i tuoi pavimenti e rivestimenti.',
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
