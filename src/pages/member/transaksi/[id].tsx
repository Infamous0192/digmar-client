import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { DashboardLayout } from 'layouts/dashboard'
import { Button, Card, Link } from 'components/elements'
import { TextField } from 'components/forms'

import { ArchiveIcon, BadgeCheckIcon, CashIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import axios from 'lib/axios'
import { ArrowSmLeftIcon, ArrowSmRightIcon, EmojiSadIcon } from '@heroicons/react/outline'
import dayjs from 'lib/dayjs'
import { formatPrice } from 'utils/format'

interface Props {
  transaction: {
    id_transaksi: string
    kode_transaksi: string
    id_member: string
    nama_terdaftar: string
    email_terdaftar: string
    kode_produk: string
    harga: string
    status_bayar: string
    tgl_bayar: null
    created_at: string
  } | null
  product: {
    kode_kelas: string
    nama_kelas: string
    nama_kategori: string
    thumbnail: string
    harga: string
  } | null
}

const status: { [key: string]: string } = {
  pending: 'Menunggu pembayaran',
  bayar: 'Transaksi selesai',
  cancel: 'Transaksi dibatalkan',
}

const TransactionDetail: NextPage<Props> = ({ transaction, product }) => {
  if (!transaction || !product)
    return (
      <DashboardLayout>
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto text-center py-24">
          <EmojiSadIcon className="w-10 h-10 text-center mb-4 text-gray-900" />
          <h1 className="text-gray-900 font-bold text-xl">Transaksi tidak ditemukan</h1>
          <p className="mb-4">Kami tidak dapat menemukan transaksi yang anda cari.</p>
          <Link to="/member/transaksi">
            <Button color="light">
              <ArrowSmLeftIcon className="w-5 h-5" />
              Kembali
            </Button>
          </Link>
        </div>
      </DashboardLayout>
    )

  return (
    <DashboardLayout>
      <div className="sm:flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-slate-800 leading-none mb-2 sm:mb-0">
          Order #{transaction.kode_transaksi}
        </h1>
        <div className="text-slate-600">
          Dibuat{' '}
          <span className="font-semibold text-slate-900">
            {dayjs(transaction.created_at).format('D MMMM YYYY H:m')}
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-x-8">
        <div className="md:col-span-6">
          <Card className="mb-8">
            <Card.Body className="px-5 py-4 md:flex gap-x-4">
              <div className="flex gap-x-4">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-md flex-shrink-0 relative overflow-hidden border">
                  <div className="absolute w-full h-full bg-slate-200 inset-0"></div>
                  <Image
                    src={product.thumbnail}
                    layout="fill"
                    className="absolute w-full h-full inset-0 object-center object-cover"
                  />
                </div>
                <div>
                  <p className="text-slate-400 font-thin text-sm">{product.kode_kelas}</p>
                  <h2 className="font-semibold text-lg capitalize">{product.nama_kelas}</h2>
                  <p className="font-medium mb-2 text-sunglow-500">{formatPrice(product.harga)}</p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="">
                <div className="text-center font-medium mb-2 text-sm">
                  {status[transaction.status_bayar]}
                </div>
                <div className="bg-slate-200 w-full h-2 rounded-md overflow-hidden">
                  {transaction.status_bayar == 'pending' && (
                    <div className="w-1/3 h-full bg-sunglow-500"></div>
                  )}
                  {transaction.status_bayar == 'terbayar' && (
                    <div className="w-full h-full bg-sunglow-500"></div>
                  )}
                  {transaction.status_bayar == 'cancel' && (
                    <div className="w-full h-full bg-red-600"></div>
                  )}
                </div>
                <div
                  className={`flex items-center justify-between font-medium ${
                    transaction.status_bayar == 'pending'
                      ? 'text-slate-600'
                      : transaction.status_bayar == 'terbayar'
                      ? 'text-sunglow-500'
                      : '!text-red-500'
                  } mt-3`}
                >
                  <ShoppingCartIcon
                    className={`w-5 h-5 ${
                      transaction.status_bayar == 'cancel' ? 'text-red-500' : 'text-sunglow-500'
                    }`}
                  />
                  <CashIcon className="w-5 h-5" />
                  <BadgeCheckIcon className="w-5 h-5" />
                </div>
              </div>
            </Card.Footer>
          </Card>

          {transaction.status_bayar == 'terbayar' && (
            <Card className="mb-8">
              <Card.Body>
                <h2 className="text-lg font-semibold mb-2">Pembayaran Selesai</h2>
                <p className="mb-4">
                  Terima kasih telah memesan produk kami. Silahkan tekan tombol dibawah untuk
                  menikmati kelas.
                </p>
                <Link to={`/member/kelas`}>
                  <Button color="secondary" className="w-full">
                    Lihat Kelas
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          )}

          {transaction.status_bayar == 'pending' && (
            <Card className="mb-8">
              <Card.Body>
                <h2 className="text-lg font-semibold mb-4">Selesaikan Pembayaran</h2>
                <div className="grid sm:grid-cols-2 mb-4">
                  <div className="mb-2">
                    <div className="w-32 h-12">
                      <Image alt="Logo BNI" src="/logo bni.png" width={129} height={48} />
                    </div>
                    <div className="font-medium">CV Tarkiz Paz Banua</div>
                    <div className="font-semibold">01291247964</div>
                  </div>
                  <div className="mb-2">
                    <div className="w-32 h-12">
                      <Image alt="Logo BSI" src="/logo bsi.png" width={950} height={270} />
                    </div>
                    <div className="font-medium">CV Tarkiz Paz Banua</div>
                    <div className="font-semibold">01291247964</div>
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send?phone=6289691786852&amp;text=Halo,%20Saya%20Dwa%20Meizadewa.%20Saya%20sudah%20melakukan%20pembayaran%20kelas%20Digital%20Marketing.%20Akses%20kelas%20untuk%20infamous0192@gmail.com.%20Berikut%20saya%20lampirkan%20foto%20bukti%20pembayaran:"
                >
                  <Button color="secondary" className="w-full">
                    Konfirmasi Pembayaran
                  </Button>
                </a>
              </Card.Body>
            </Card>
          )}
        </div>
        <div className="md:col-span-6">
          <Card>
            <Card.Body>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Data Pengguna</h2>
                <div className="mb-2">
                  <h2 className="font-semibold mb-1">Nama Lengkap</h2>
                  <TextField type="text" name="nama" value={transaction.nama_terdaftar} readOnly />
                </div>
                <div className="mb-2">
                  <h2 className="font-semibold mb-1">Alamat Email</h2>
                  <TextField type="text" name="nama" value={transaction.email_terdaftar} readOnly />
                </div>
              </div>
              <div className="border-t border-slate-200 py-3">
                <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-grow-1">Harga Produk</div>
                  <div className="font-bold flex-shrink-0">{formatPrice(product.harga)}</div>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex-grow-1 font-bold">Total</div>
                  <div className="font-bold flex-shrink-0">{formatPrice(product.harga)}</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const config = {
    headers: { Authorization: `bearer ${req.cookies.token}` },
  }

  try {
    const { data } = await axios.get('/me', config)

    const transaction = await axios.post(
      '/transaction/detail',
      {
        iduser: data.id_user,
        kodetransaksi: query.id,
      },
      config
    )

    const product = await axios.get(`/classes/detail/${transaction.data.kode_produk}`)

    return {
      props: {
        transaction: { ...transaction.data },
        product: product.data.kelas,
      },
    }
  } catch (error: any) {
    return {
      props: {
        transaction: null,
        product: null,
      },
    }
  }
}

export default TransactionDetail
