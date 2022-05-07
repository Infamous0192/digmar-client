interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}

const TableData: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <td className={`p-2 px-4 ${className}`} {...props}>
      <div className="w-max">{children}</div>
    </td>
  )
}

export default TableData
