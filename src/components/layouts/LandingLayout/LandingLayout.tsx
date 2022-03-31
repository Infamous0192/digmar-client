import { Navbar } from 'components/navigation'
import { Outlet as Content } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const LandingLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="mt-24">

      {/* <Header /> */}
      </div>

      <Content />

      <Footer />
    </div>
  )
}

export default LandingLayout
