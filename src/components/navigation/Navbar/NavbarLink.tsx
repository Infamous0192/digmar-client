import { NavLink } from 'react-router-dom'

interface Props {
  children: React.ReactNode
  href: string
}

const NavbarLink: React.FC<Props> = ({ children, href }) => {
  return (
    <NavLink to={href} className="text-base font-medium text-gray-500 hover:text-gray-900">
      {children}
    </NavLink>
  )
}

export default NavbarLink
