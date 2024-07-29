import React from 'react'
import appleTouchIcon from '../assets/apple-touch-icon.png'
import favicon16 from '../assets/favicon-16x16.png'
import favicon32 from '../assets/favicon-32x32.png'
import manifest from '../assets/site.webmanifest'

// Default <head> (can be overridden by pages)

export default function HeadDefault() {
  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='LC Pavimenti' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        rel='stylesheet'
      />

      <link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
      <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
      <link rel='icon' type='image/png' sizes='16x16' href={favicon16} />
      <link rel='manifest' href={manifest} />
    </>
  )
}
