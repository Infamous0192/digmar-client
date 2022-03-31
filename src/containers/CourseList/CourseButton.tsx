import { Button } from 'components/elements'

interface Props {
  category: string
  active: string
  onClick: Function
}

const CourseButton: React.FC<Props> = ({ active, category, onClick, children }) => {
  return (
    <Button
      color={active === category ? 'primary' : 'light'}
      size="sm"
      rounded="full"
      className="text-sm capitalize"
      onClick={() => onClick(category)}
    >
      {children}
    </Button>
  )
}

export default CourseButton
