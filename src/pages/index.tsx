import type { NextPage } from 'next'
import { BestChoices, Courses, Features, Hero, Testimonials, Events } from 'components/contents'
import { LandingLayout } from 'layouts/landing'

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
