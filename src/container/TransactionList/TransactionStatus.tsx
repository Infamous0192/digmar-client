import { Badge } from 'components/elements'

interface Props {
  status: string
}

const config: { [key: string]: any } = {
  pending: {
    title: 'Belum Bayar',
    color: 'orange',
  },
  terbayar: {
    title: 'Terbayar',
    color: 'green',
  },
  cancel: {
    title: 'Batal',
    color: 'red',
  },
}

const TransactionStatus: React.FC<Props> = ({ status }) => {
  return (
    <Badge color={config[status].color as any} className="capitalize">
      {config[status].title}
    </Badge>
  )
}

export default TransactionStatus
