interface Props {
  row: number
  col: number
}

const renderSkeleton = ({ row, col }: Props) => {
  const element = []

  for (let i = 0; i < row; i++) {
    const skeleton = []
    for (let j = 0; j < col; j++) {
      skeleton.push(
        <td key={`${i}${j}`} className="w-min m-2 px-4 py-2">
          <div className="w-full bg-gray-200 h-5 animate-pulse rounded"></div>
        </td>
      )
    }
    element.push(<tr key={i}>{skeleton}</tr>)
  }

  return element
}

const TableSkeleton: React.FC<Props> = (props) => {
  return <>{renderSkeleton(props)}</>
}

export default TableSkeleton
