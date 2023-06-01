import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '@/components/layout'
import Hero from '@/components/home/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          포트폴리오
        </title>
        <meta name="description" content='포트폴리오'></meta>
        <link rel="icon" href='/favicon.ico'></link>
      </Head>
      
      <section className="flex main-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero/>
        </div>
      </section>
    </Layout>
  )
}
