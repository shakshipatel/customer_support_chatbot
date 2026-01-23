import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import Integration from '@/components/landing/integration'
import Navbar from '@/components/landing/nav'
import SocialProof from '@/components/landing/social'
import React from 'react'

const page = () => {
  return (
    <div>
      <main className='w-full flex flex-col relative z-10'>
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <Integration />
      </main>
    </div>
  )
}

export default page