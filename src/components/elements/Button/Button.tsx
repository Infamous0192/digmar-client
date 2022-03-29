import styles from 'styles/modules/Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ size = 'md', color = 'primary', children, ...props }) => {
  return (
    <button {...props} className={`${styles[size]} ${styles[color]} ${props.className}`}>
      {children}
    </button>
  )
}

export default Button
