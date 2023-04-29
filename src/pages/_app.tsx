import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Montserrat} from 'next/font/google'
import Head from 'next/head'

const montserrat=Montserrat({
   subsets:['latin'],
   variable:"--font-mont"
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen` }>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content='Creating a elegant portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <NavBar/>
       <Component {...pageProps} />
       <Footer/>
    </main>
    )
}
