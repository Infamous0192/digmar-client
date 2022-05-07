import TableBody from './TableBody'
import TableData from './TableData'
import TableHead from './TableHead'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import TableSkeleton from './TableSkeleton'

interface Element {
  Head: typeof TableHead
  Header: typeof TableHeader
  Body: typeof TableBody
  Row: typeof TableRow
  Data: typeof TableData
  Skeleton: typeof TableSkeleton
}

interface Props {
  children: React.ReactNode
}

const Table: React.FC<Props> & Element = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">{children}</table>
    </div>
  )
}

Table.Head = TableHead
Table.Head.displayName = 'Head'

Table.Header = TableHeader
Table.Header.displayName = 'Header'

Table.Body = TableBody
Table.Body.displayName = 'Body'

Table.Row = TableRow
Table.Row.displayName = 'Row'

Table.Data = TableData
Table.Data.displayName = 'Data'

Table.Skeleton = TableSkeleton
Table.Skeleton.displayName = 'Skeleton'

export default Table
