import type { NextPage } from 'next'
import { BestChoices, Courses, Features, Hero, Testimonials, Events } from 'container/LandingPage'
import { LandingLayout } from 'layouts/LandingLayout'

const Home: NextPage = () => {
  return (
    <LandingLayout>
      <main className="flex-grow">
        <Hero />
        <Features />
        <BestChoices />
        <Courses />
        <Events />
        <Testimonials />
        {/* <Newsletter /> */}
      </main>
    </LandingLayout>
  )
}

export default Home
