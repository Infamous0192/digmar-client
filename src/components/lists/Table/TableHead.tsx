interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode
}

const TableHead: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <thead
      {...props}
      className={`text-xs uppercase font-semibold text-slate-500 bg-slate-50 mx-4 rounded-sm ${className}`}
    >
      <tr>{children}</tr>
    </thead>
  )
}

export default TableHead
