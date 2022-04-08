import { BestChoices, Courses, Features, Hero, Newsletter, Testimonials } from 'components/sections'
import Events from 'components/sections/Events'

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <Features />
      <BestChoices />
      <Courses />
      <Events />
      <Testimonials />
      {/* <Newsletter /> */}
    </main>
  )
}

export default Home
