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
      label: 'Services',
      href: '#servizi',
    },
    {
      label: 'About',
      href: '#chi-siamo',
    },
    {
      label: 'Large slabs',
      href: '#grandi-lastre',
    },
    {
      label: 'Contacts',
      href: '#contattaci',
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
      label: 'Contact us',
      text: 'Specialists in processing and laying large porcelain stoneware slabs',
    },
    image: {
      alt: 'Banner',
      src: slide1,
    },
    title: 'LC Floors and Coverings',
  },
  {
    cta: {
      href: '/#chi-siamo',
      label: 'About',
      text: 'Professional equipment for laying slabs of any size',
    },
    image: {
      alt: 'Banner',
      src: slide2,
    },
    title: 'Professional equipment',
  },
  {
    cta: {
      href: '/#servizi',
      label: 'Services',
      text: 'Production of kitchen tops and sinks made on site in porcelain stoneware.',
    },
    image: {
      alt: 'Banner',
      src: slide3,
    },
    title: 'Kitchen tops and sinks',
  },
  {
    cta: {
      href: '/#contattaci',
      label: 'Contact us',
      text: 'Turnkey renovations.',
    },
    image: {
      alt: 'Banner',
      src: slide4,
    },
    title: 'Renovations',
  },
  {
    cta: {
      href: '/#chi-siamo',
      label: 'About',
      text: 'Supply of materials.',
    },
    image: {
      alt: 'Banner',
      src: slide5,
    },
    title: 'Materials',
  },
  {
    cta: {
      href: '/#servizi',
      label: 'Services',
      text: "Work carried out by the company's own workforce.",
    },
    image: {
      alt: 'Banner',
      src: slide6,
    },
    title: 'Self-employed work',
  },
]

const servicesProps: ComponentProps<typeof Services> = {
  services: [
    {
      list: [
        'Modern and design solutions for every type of environment.',
        'Precise and long-lasting installation.',
      ],
      title: 'Large Slab Flooring',
      text: [''],
    },
    {
      list: [
        'Ideal for walls, bathrooms, and kitchens.',
        'Uniform surfaces and easy to clean.',
      ],
      title: 'Large Slab Cladding',
      text: [''],
    },
    {
      title: 'Traditional Floors',
      text: [''],
      list: [
        'Parquet, porcelain stoneware, and much more.',
        'Handcrafted workmanship and high-quality materials.',
      ],
    },
    {
      title: 'Traditional Coatings',
      text: [''],
      list: [
        'Classic and customizable solutions.',
        'Wide choice of materials and finishes.',
      ],
    },
    {
      title: 'Consulting and Design',
      text: [''],
      list: [
        'Assistance in choosing the best materials and solutions.',
        'Tailor-made projects for every need.',
      ],
    },
    {
      title: 'Turnkey renovations',
      text: [''],
      list: [
        'We renovate your home from A to Z',
        'Tailor-made projects for every need',
      ],
    },
    {
      title:
        'Production of kitchen tops and sinks made on site in porcelain stoneware',
      text: [''],
      list: [
        'We design your kitchen to be made in porcelain stoneware or marble',
        'We create top areas and coverings',
      ],
    },
    {
      title: 'Supply of materials',
      text: [''],
      list: [
        'Come to our store to see the wide selection of materials',
        'We order and deliver materials throughout Italy',
      ],
    },
    {
      title: 'On-site work for all your needs',
      text: [''],
      list: ['Do you need another type of work? Contact us'],
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
      title: 'Our story',
      paragraphs: [
        'At LC Pavimenti e Rivestimenti, our mission is to provide excellent flooring and coverings.',
        'With a team of experts and qualified craftsmen, we are committed to meeting the needs of our customers with precision and professionalism. Our passion for innovation has led us to specialize in the use of large slabs, an option that offers numerous aesthetic and functional advantages.',
      ],
    },
  ],
}

const missionProps: ComponentProps<typeof Mission> = {
  title: 'Our Mission',
  texts: [
    'Our company specializes in the application of high-quality flooring and coverings. With years of experience in the sector, we are proud to offer innovative and long-lasting solutions for your spaces.',
    'Our strong point? Large slabs. Discover how we can transform your environment with elegance and functionality.',
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
    title: 'Large Slabs',
    text: [
      'Large slabs represent the future of floor and wall design. Thanks to their size and high technical performance, they are the ideal choice for those who want a modern and refined environment. Here are the advantages:',
    ],
    list: [
      'Continuous Aesthetics: large surfaces without visible joints.',
      'Easy to Clean: fewer joints means less dirt accumulation.',
      'Durability: resistance to impacts, scratches and stains.',
      'Versatility: suitable for floors, walls, worktops and much more.',
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
  title: 'Our works',
  text: 'Browse our gallery to see some of our work. Each project is unique and reflects the attention to detail and quality we put into every installation. Take a look at our large slab solutions and see how we can transform your space.',
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
  title: 'Contact us',
  text: 'We are here to help you realize your projects. For any questions or to request a quote, do not hesitate to contact us. Our team of experts is at your disposal to offer you personalized advice and guide you in choosing the best solutions for your floors and coverings.',
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
