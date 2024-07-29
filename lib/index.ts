export { globalProps, homepageProps }

// import slide5 from '@/assets/12.jpg'
// import slide6 from '@/assets/13.jpg'
// import slide11 from '@/assets/14.jpg'
// import slide20 from '@/assets/15.jpg'
// import slide12 from '@/assets/19.jpg'
// import slide13 from '@/assets/2.jpg'
// import slide14 from '@/assets/21.jpg'
// import slide15 from '@/assets/26.jpg'
// import slide16 from '@/assets/3.jpg'
// import slide19 from '@/assets/35.png'
// import slide17 from '@/assets/39.jpg'
// import { default as slide1, default as textMedia1 } from '@/assets/4.png'
// import slide18 from '@/assets/42.jpg'
// import slide4 from '@/assets/43.png'
// import slide7 from '@/assets/64.png'
// import slide9 from '@/assets/68.jpg'
// import slide10 from '@/assets/72.jpg'
// import slide2 from '@/assets/83.jpg'
// import slide3 from '@/assets/84.jpg'
// import slide8 from '@/assets/86.jpg'

const slide5 = 'https://picsum.photos/2000?random=1'
const slide6 = 'https://picsum.photos/2000?random=2'
const slide11 = 'https://picsum.photos/2000?random=3'
const slide20 = 'https://picsum.photos/2000?random=4'
const slide12 = 'https://picsum.photos/2000?random=5'
const slide13 = 'https://picsum.photos/2000?random=6'
const slide14 = 'https://picsum.photos/2000?random=7'
const slide15 = 'https://picsum.photos/2000?random=8'
const slide16 = 'https://picsum.photos/2000?random=9'
const slide19 = 'https://picsum.photos/2000?random=10'
const slide17 = 'https://picsum.photos/2000?random=11'
const slide1 = 'https://picsum.photos/2000?random=12'
const textMedia1 = 'https://picsum.photos/2000?random=13'
const slide18 = 'https://picsum.photos/2000?random=14'
const slide4 = 'https://picsum.photos/2000?random=15'
const slide7 = 'https://picsum.photos/2000?random=16'
const slide9 = 'https://picsum.photos/2000?random=17'
const slide10 = 'https://picsum.photos/2000?random=18'
const slide2 = 'https://picsum.photos/2000?random=19'
const slide3 = 'https://picsum.photos/2000?random=20'
const slide8 = 'https://picsum.photos/2000?random=21'

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
      label: 'Noleggio',
      href: '/#noleggio',
    },
    {
      label: 'Contattaci',
      href: '/#contattaci',
    },
  ],
  footer: {
    text: 'LC PAVIMENTI, VIA ANNIBALE DE LEO 15 – 72019 SAN VITO DEI NORMANNI (BR) – P.IVA/C.F. ???',
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
    title: 'LC Pavimenti',
  },
  {
    cta: {
      href: '/#chi-siamo',
      label: 'Chi siamo',
      text: 'Attrezzatura professionale per posa di lastre di qualsiasi dimensioni',
    },
    image: {
      alt: 'Banner',
      src: slide9,
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
      src: slide13,
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
      src: slide13,
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
      src: slide13,
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
      src: slide13,
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
  text: 'Sfogliate la nostra galleria per vedere alcune delle nostre realizzazioni. Ogni progetto è unico e riflette l’attenzione al dettaglio e la qualità che mettiamo in ogni installazione. Dai un’occhiata alle nostre soluzioni con grandi lastre e scopri come possiamo trasformare il tuo spazio.',
}

const contactsProps: ComponentProps<typeof Contacts> = {
  infos: [
    {
      type: 'phone',
      text: '+30 338 630 3534',
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
