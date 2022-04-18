import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import AOS from 'aos'

import { AuthProvider } from 'modules/auth'

import '../styles/globals.scss'
import 'swiper/css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: false,
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SiapCuan</title>
        <meta name="title" content="Siap Cuan"></meta>
        <meta name="description" content="Platform pelatihan digital marketing." />
        <meta
          name="keywords"
          content="pelatihan, digital, marketing, siap cuan, course, sertifikat"
        />
        <meta property="og:title" content="Siap CUan" />
        <meta property="og:description" content="Platform pelatihan digital marketing." />
        <meta property="og:url" content="https://siapcuan.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
