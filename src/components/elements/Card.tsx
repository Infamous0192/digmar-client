interface Element {
  Header: React.FC<React.HTMLAttributes<HTMLElement>>
  Body: React.FC<React.HTMLAttributes<HTMLElement>>
  Footer: React.FC<React.HTMLAttributes<HTMLElement>>
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Card: React.FC<Props> & Element = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded border border-gray-200 ${className}`}
    >
      {children}
    </div>
  )
}

Card.Header = ({ children, ...props }) => (
  <header className="px-5 py-4 border-b border-gray-200 font-semibold text-gray-800" {...props}>
    {children}
  </header>
)
Card.Header.displayName = 'Header'

Card.Body = ({ className, children, ...props }) => (
  <div className={`px-5 py-4 ${className}`} {...props}>
    {children}
  </div>
)
Card.Body.displayName = 'Body'

Card.Footer = ({ children }) => (
  <footer className="px-5 py-4 border-t border-gray-200">{children}</footer>
)
Card.Footer.displayName = 'Footer'

export default Card
