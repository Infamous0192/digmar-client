import NextLink from 'next/link'

type Anchor = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

interface Props extends Anchor {
  to: string
  children: React.ReactNode
}

const Link: React.FC<Props> = ({ to, children, ...props }) => {
  return (
    <NextLink href={to}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
