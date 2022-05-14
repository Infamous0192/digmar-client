import type { NextPage } from 'next'
import { DashboardLayout } from 'layouts/dashboard'
import { Table } from 'components/lists'
import { Badge, Button, Card, Link } from 'components/elements'
import { Select } from 'components/forms'
import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const awe = {
  invoice: '12345',
  name: 'Kelas Digital Merketing',
  category: 'kelas',
  date: '24 Mei 2022',
  status: 'belum bayar',
}

const transactions: typeof awe[] = [
  {
    invoice: '12345',
    name: 'Kelas Digital Merketing',
    category: 'kelas',
    date: '24 Mei 2022',
    status: 'belum bayar',
  },
  {
    invoice: '12354',
    name: 'Event Digital Merketing',
    category: 'event',
    date: '24 Mei 2022',
    status: 'selesai',
  },
  {
    invoice: '12353',
    name: 'Kelas Akuntansi',
    category: 'kelas',
    date: '16 Mei 2022',
    status: 'selesai',
  },
]

interface State {
  status: 'all' | 'belum bayar' | 'selesai'
  category: 'all' | 'kelas' | 'event'
}

const defaultState: State = {
  status: 'all',
  category: 'all',
}

const Transaction: NextPage = () => {
  const [state, setState] = useState(defaultState)

  function handleStatus(status: typeof state.status) {
    return () => {
      setState((prev) => ({ ...prev, status }))
    }
  }

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setState({ ...state, category: e.target.value as typeof state.category })
  }

  const data = transactions
    .filter(({ status }) => state.status == 'all' || state.status == status)
    .filter(({ category }) => state.category == 'all' || state.category == category)

  return (
    <DashboardLayout>
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
            Semua ({transactions.length})
          </Button>
          <Button
            color={state.status == 'belum bayar' ? 'primary' : 'light'}
            size="sm"
            rounded="full"
            onClick={handleStatus('belum bayar')}
          >
            Belum Bayar ({transactions.filter(({ status }) => status === 'belum bayar').length})
          </Button>
          <Button
            color={state.status == 'selesai' ? 'primary' : 'light'}
            size="sm"
            rounded="full"
            onClick={handleStatus('selesai')}
          >
            Selesai ({transactions.filter(({ status }) => status === 'selesai').length})
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
            {!(data.length > 0) && (
              <tr className="text-center">
                <td colSpan={6} className="py-4">
                  Belum ada data
                </td>
              </tr>
            )}
            {data.length > 0 &&
              data.map((transaction) => (
                <Table.Row key={transaction.invoice}>
                  <Table.Data className="text-sunglow-500">
                    <Link to="/member/transaksi/123">#{transaction.invoice}</Link>
                  </Table.Data>
                  <Table.Data>
                    <Link to="/member/transaksi/123">{transaction.name}</Link>
                  </Table.Data>
                  <Table.Data className="capitalize">{transaction.category}</Table.Data>
                  <Table.Data>{transaction.date}</Table.Data>
                  <Table.Data>
                    <Badge
                      color={transaction.status == 'selesai' ? 'green' : 'red'}
                      className="capitalize"
                    >
                      {transaction.status}
                    </Badge>
                  </Table.Data>
                  <Table.Data>
                    <Link to="/member/transaksi/123">
                      {transaction.status === 'selesai' ? (
                        <span className="text-sunglow-500 hover:text-sunglow-600 font-medium">
                          Detail
                        </span>
                      ) : (
                        <Button size="sm">Bayar</Button>
                      )}
                    </Link>
                  </Table.Data>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction
