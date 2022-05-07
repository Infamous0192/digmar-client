interface Props {
  children: React.ReactNode
}

const TableHeader: React.FC<Props> = ({ children }) => {
  return (
    <th className="p-2 px-4">
      <div className="text-left w-max">{children}</div>
    </th>
  )
}

export default TableHeader
