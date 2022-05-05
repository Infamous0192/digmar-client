import { ArrowLeftIcon, ClockIcon, UsersIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon, StarIcon } from '@heroicons/react/solid'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Badge, Button, Link } from 'components/elements'
import { LandingLayout } from 'layouts/landing'
import type { NextPage } from 'next'
import Image from 'next/image'

const Transaction: NextPage = () => {
  return (
    <LandingLayout>
      <main className="flex-grow py-12">
        <div className="max-w-5xl py-12 md:pb-20 pt-12 mx-auto px-4 sm:px-6">
          <h1 className="font-bold text-2xl text-center mb-8">Daftar Transaksi</h1>
          <div className="flex items-center space-x-4 mb-6 overflow-auto py-1">
            <Button color="primary" size="xs" rounded="full" className="text-sm capitalize">
              Semua (4)
            </Button>
            <Button color="light" size="xs" rounded="full" className="text-sm capitalize">
              Belum Bayar (1)
            </Button>
            <Button color="light" size="xs" rounded="full" className="text-sm capitalize">
              Selesai (3)
            </Button>
          </div>
          <ul className="space-y-4">
            <li className="w-full bg-white border border-gray-200 rounded-md p-4">
              <div className="flex items-center text-sm mb-3">
                <Badge color="green" className="text-xs">
                  Selesai
                </Badge>
                <p className="leading-none font-light ml-2">24 Maret 2022</p>
              </div>
              <div className="grid grid-cols-12 md:gap-x-8">
                <div className="flex col-span-12 md:col-span-10 mb-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-200 animate-pulse rounded overflow-hidden"></div>
                  <div className="ml-4">
                    <h2 className="text-lg sm:text-xl font-bold leading-none mb-1">
                      Javascript Fullstack Developer
                    </h2>
                    <p className="text-sunglow-500 font-medium leading-none text-sm md:text-base">
                      Akuntansi
                    </p>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-2">
                  <div className="text-sm leading-none">Total Harga</div>
                  <div className="font-bold">Rp. 10.000</div>
                </div>
                <div className="col-span-6 md:col-span-12 flex items-center justify-end space-x-3">
                  <Link
                    to="/"
                    className="font-medium text-sunglow-600 hover:text-sunglow-500 text-xs sm:text-sm"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </li>
            <li className="w-full bg-white border border-gray-200 rounded-md p-4">
              <div className="flex items-center text-sm mb-3">
                <Badge color="red" className="text-xs">
                  Belum Bayar
                </Badge>
                <p className="leading-none font-light ml-2">25 Maret 2022</p>
              </div>
              <div className="grid grid-cols-12 md:gap-x-8">
                <div className="flex col-span-12 md:col-span-10 mb-4">
                  <div className="w-16 h-16 flex-shrink-0 bg-gray-200 animate-pulse rounded overflow-hidden"></div>
                  <div className="ml-4">
                    <h2 className="text-lg sm:text-xl font-bold leading-none mb-1">
                      Javascript Fullstack Developer
                    </h2>
                    <p className="text-sunglow-500 font-medium leading-none text-sm md:text-base">
                      Akuntansi
                    </p>
                  </div>
                </div>
                <div className="col-span-6 md:col-span-2">
                  <div className="text-sm leading-none">Total Harga</div>
                  <div className="font-bold">Rp. 10.000</div>
                </div>
                <div className="col-span-6 md:col-span-12 flex items-center justify-end space-x-3">
                  <Link
                    to="/"
                    className="font-medium text-sunglow-600 hover:text-sunglow-500 text-xs sm:text-sm"
                  >
                    Lihat Detail
                  </Link>
                  <Button color="primary" size="sm">
                    Bayar
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </LandingLayout>
  )
}

export default Transaction
