import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

import { useAuth } from 'modules/auth'
import { useFetch } from 'hooks'

import { Table } from 'components/lists'
import { Button, Card, Link } from 'components/elements'
import { Select } from 'components/forms'
import TransactionStatus from './TransactionStatus'
import dayjs from 'lib/dayjs'

interface State {
  status: 'all' | 'pending' | 'bayar' | 'cancel'
  category: 'all' | 'kelas' | 'event'
}

const defaultState: State = {
  status: 'all',
  category: 'all',
}

const TransactionList: React.FC = () => {
  const [state, setState] = useState(defaultState)
  const auth = useAuth()
  const { data, loading } = useFetch({
    method: 'post',
    url: '/transaction/all',
    data: {
      iduser: auth.state.creds?.id_user,
    },
    headers: {
      Authorization: `bearer ${auth.state.token}`,
    },
  })

  function handleStatus(status: typeof state.status) {
    return () => {
      setState((prev) => ({ ...prev, status }))
    }
  }

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setState({ ...state, category: e.target.value as typeof state.category })
  }

  const transactions = data
    .filter(({ statuspembayaran }) => state.status == 'all' || state.status == statuspembayaran)
    .filter(({ jenisproduk }) => state.category == 'all' || state.category == jenisproduk)

  return (
    <>
      <div className="md:flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-slate-800 leading-none">Daftar Transaksi</h1>
        <div className="max-w-xs mt-4 md:mt-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-4 h-4 text-slate-700" />
            </div>
            <input
              type="text"
              placeholder="Cari transaksi"
              className="focus:ring-sunglow-300 focus:border-sunglow-300 block w-full pl-9 pr-12 sm:text-sm leading-none border-slate-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="md:flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 overflow-auto py-1">
          <Button
            color={state.status == 'all' ? 'primary' : 'light'}
            size="sm"
            rounded="full"
            onClick={handleStatus('all')}
          >
            Semua ({data.length})
          </Button>
          <Button
            color={state.status == 'pending' ? 'primary' : 'light'}
            size="sm"
            rounded="full"
            onClick={handleStatus('pending')}
          >
            Belum Bayar (
            {data.filter(({ statuspembayaran }) => statuspembayaran === 'pending').length})
          </Button>
          <Button
            color={state.status == 'bayar' ? 'primary' : 'light'}
            size="sm"
            rounded="full"
            onClick={handleStatus('bayar')}
          >
            Terbayar ({data.filter(({ statuspembayaran }) => statuspembayaran === 'bayar').length})
          </Button>
          <Button
            color={state.status == 'cancel' ? 'primary' : 'light'}
            size="sm"
            rounded="full"
            onClick={handleStatus('cancel')}
          >
            Batal ({data.filter(({ statuspembayaran }) => statuspembayaran === 'cancel').length})
          </Button>
        </div>
        <div className="max-w-xs w-40 mt-4 md:mt-0">
          <Select name="produk" onChange={handleCategory}>
            <Select.Option value="all">Semua Produk</Select.Option>
            <Select.Option value="kelas">Kelas</Select.Option>
            <Select.Option value="event">Event</Select.Option>
          </Select>
        </div>
      </div>
      <Card>
        <Card.Header>
          <h2>Transaksi</h2>
        </Card.Header>
        <Table>
          <Table.Head>
            <Table.Header>Invoice</Table.Header>
            <Table.Header>Nama Produk</Table.Header>
            <Table.Header>Jenis Produk</Table.Header>
            <Table.Header>Tanggal Pemesanan</Table.Header>
            <Table.Header>Status</Table.Header>
            <Table.Header>Aksi</Table.Header>
          </Table.Head>
          <Table.Body>
            {!(transactions.length > 0) && !loading && (
              <tr className="text-center">
                <td colSpan={6} className="py-4">
                  Belum ada transaksi
                </td>
              </tr>
            )}

            {loading && <Table.Skeleton col={6} row={3} />}

            {!loading &&
              transactions.length > 0 &&
              transactions.map((transaction) => (
                <Table.Row key={transaction.idtransaksi}>
                  <Table.Data className="text-sunglow-500">
                    <Link to={`/member/transaksi/${transaction.kodetransaksi}`}>
                      {transaction.kodetransaksi}
                    </Link>
                  </Table.Data>
                  <Table.Data className="capitalize">
                    <Link to={`/member/transaksi/${transaction.kodetransaksi}`}>
                      {transaction.namaproduk}
                    </Link>
                  </Table.Data>
                  <Table.Data className="capitalize">{transaction.jenisproduk}</Table.Data>
                  <Table.Data>
                    {dayjs(transaction.tanggalpemesanan).format('D MMMM YYYY H:m')}
                  </Table.Data>
                  <Table.Data>
                    <TransactionStatus status={transaction.statuspembayaran} />
                  </Table.Data>
                  <Table.Data>
                    <Link to={`/member/transaksi/${transaction.kodetransaksi}`}>
                      {transaction.statuspembayaran === 'pending' ? (
                        <Button size="sm">Bayar</Button>
                      ) : (
                        <span className="text-sunglow-500 hover:text-sunglow-600 font-medium">
                          Detail
                        </span>
                      )}
                    </Link>
                  </Table.Data>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Card>
    </>
  )
}

export default TransactionList
