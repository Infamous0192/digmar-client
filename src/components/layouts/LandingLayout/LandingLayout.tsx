import { Navbar } from 'components/navigation'
import { Outlet as Content } from 'react-router-dom'
import Footer from './Footer'

const LandingLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      <Content />

      <Footer />
    </div>
  )
}

export default LandingLayout
