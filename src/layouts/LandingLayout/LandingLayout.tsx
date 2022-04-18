import { Navbar } from 'components/navigation'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
}

const LandingLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      {children}

      <Footer />
    </div>
  )
}

export default LandingLayout
