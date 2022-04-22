import styles from 'styles/modules/Badge.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  color?: 'red' | 'green' | 'blue' | 'orange' | 'light'
  children: React.ReactNode
}

const Badge: React.FC<Props> = ({
  size = 'md',
  color = 'light',
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={`${styles.badge} ${styles[`color-${color}`]} ${className}`}>
      {children}
    </div>
  )
}

export default Badge
