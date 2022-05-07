interface Props extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode
}

const TableRow: React.FC<Props> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>
}

export default TableRow
