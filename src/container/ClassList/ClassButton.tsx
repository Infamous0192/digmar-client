import { Button } from 'components/elements'

interface Props {
  category: string
  active: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CourseButton: React.FC<Props> = ({ active, category, onClick }) => {
  return (
    <Button
      color={active === category ? 'primary' : 'light'}
      size="sm"
      rounded="full"
      className="text-sm capitalize"
      onClick={onClick}
    >
      {category}
    </Button>
  )
}

export default CourseButton
