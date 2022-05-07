interface Element {
  Header: React.FC<React.HTMLAttributes<HTMLElement>>
  Body: React.FC<React.HTMLAttributes<HTMLElement>>
  Footer: React.FC<React.HTMLAttributes<HTMLElement>>
}

interface Props {
  children: React.ReactNode
}

const Card: React.FC<Props> & Element = ({ children }) => {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded border border-gray-200">
      {children}
    </div>
  )
}

Card.Header = ({ children, ...props }) => (
  <header className="px-5 py-4 border-b border-gray-200 font-semibold text-gray-800" {...props}>
    {children}
  </header>
)

Card.Body = (props) => <div {...props}>{props.children}</div>

Card.Footer = ({ children }) => (
  <footer className="px-5 py-4 border-t border-gray-200">{children}</footer>
)

export default Card
