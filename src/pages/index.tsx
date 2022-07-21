import type { NextPage } from 'next'

import { Features, Hero } from '@/components/Intro'
import { SEO } from '@/components/Layout/SEO'

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Features />
    </>
  )
}

export default Home
