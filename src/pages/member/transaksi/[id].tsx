import type { NextPage } from 'next'
import Image from 'next/image'
import { DashboardLayout } from 'layouts/dashboard'
import { Button, Card, Link } from 'components/elements'
import { TextField } from 'components/forms'

import { ArchiveIcon, BadgeCheckIcon, CashIcon, ShoppingCartIcon } from '@heroicons/react/solid'

const TransactionDetail: NextPage = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800 leading-none">Order #12345</h1>
        <div className="text-slate-600">
          Dibuat <span className="font-semibold text-slate-900">24 Mei 2022</span>
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <Card className="mb-8">
            <Card.Body className="px-5 py-4 md:flex gap-x-4">
              <div className="flex gap-x-4">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-200 rounded-md flex-shrink-0"></div>
                <div>
                  <p className="text-slate-400 font-thin text-sm">KL-123</p>
                  <h2 className="font-semibold text-lg">Kelas Digital Marketing</h2>
                  <p className="font-medium mb-2 text-sunglow-500">Rp. 100.000</p>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="">
                <div className="text-center font-medium mb-2 text-sm">Menunggu Pembayaran</div>
                <div className="bg-slate-200 w-full h-2 rounded-md overflow-hidden">
                  <div className="w-2/4 h-full bg-sunglow-500"></div>
                </div>
                <div className="flex items-center justify-between font-medium text-slate-600 mt-3">
                  <ShoppingCartIcon className="w-5 h-5 text-sunglow-500" />
                  <CashIcon className="w-5 h-5 text-sunglow-500" />
                  <ArchiveIcon className="w-5 h-5" />
                  <BadgeCheckIcon className="w-5 h-5" />
                </div>
              </div>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <h2 className="text-lg font-semibold mb-4">Selesaikan Pembayaran</h2>
              <div className="grid sm:grid-cols-2 mb-4">
                <div className="mb-2">
                  <div className="w-32 h-12">
                    <Image alt="Logo BNI" src="/logo bni.png" width={645} height={240} />
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
            {/* <Card.Footer></Card.Footer> */}
          </Card>
        </div>
        <div className="md:col-span-6">
          <Card>
            <Card.Body>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Data Pengguna</h2>
                <div className="mb-2">
                  <h2 className="font-semibold mb-1">Nama Lengkap</h2>
                  <TextField type="text" name="nama" value="Dwa Meizadewa" readOnly />
                </div>
                <div className="mb-2">
                  <h2 className="font-semibold mb-1">Alamat Email</h2>
                  <TextField type="text" name="nama" value="infamous0192@gmail.com" readOnly />
                </div>
              </div>
              <div className="border-t border-slate-200 py-3">
                <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-grow-1">Harga Produk</div>
                  <div className="font-bold flex-shrink-0">Rp. 100.000</div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-grow-1">Taxes & Fees</div>
                  <div className="font-bold flex-shrink-0">Rp. 10.000</div>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <div className="flex-grow-1 font-bold">Total</div>
                  <div className="font-bold flex-shrink-0">Rp. 110.000</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default TransactionDetail
