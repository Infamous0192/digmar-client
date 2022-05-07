interface Props {
  children: React.ReactNode
}

const TableBody: React.FC<Props> = ({ children }) => {
  return <tbody className="text-sm font-medium divide-y divide-slate-100">{children}</tbody>
}

export default TableBody
