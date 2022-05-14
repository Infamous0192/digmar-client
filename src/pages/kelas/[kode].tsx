import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import axios from 'lib/axios'
import Cookies from 'js-cookie'

import { LandingLayout } from 'layouts/landing'
import { Button, Card, Link } from 'components/elements'
import { useAuth } from 'modules/auth'

import { EmojiSadIcon } from '@heroicons/react/outline'
import { ArrowSmRightIcon, BadgeCheckIcon } from '@heroicons/react/solid'
import { LockClosedIcon } from '@heroicons/react/solid'
import { formatPrice, formatTime } from 'utils/format'

interface Props {
  kelas: {
    kode_kelas: string
    nama_kelas: string
    nama_kategori: string
    thumbnail: string
    deskripsi: string
    durasi: string
    harga: string | number
  } | null
  materi: {
    kode_materi: string
    judul_materi: string
    durasi: string
  }[]
}

const CourseDetail: NextPage<Props> = ({ kelas, materi }) => {
  const router = useRouter()
  const { state } = useAuth()

  function registerCourse() {
    if (!state.isAuthenticated) {
      const cart = JSON.stringify([
        {
          kode: kelas!.kode_kelas,
          jenis: 'kelas',
        },
      ])

      sessionStorage.setItem('cart', cart)
      Cookies.set('cart', cart)
      router.push('/masuk')
    } else {
      router.push('/checkout')
    }
  }

  const NotFound = () => (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto text-center py-24">
      <EmojiSadIcon className="w-10 h-10 text-center mb-4" />
      <h1 className="text-gray-800 font-bold text-xl">Kelas tidak ditemukan</h1>
      <p className="mb-4">
        Kami tidak dapat menemukan kelas yang anda cari. Anda dapat melihat pilihan kelas di
        Beranda.
      </p>
      <Link to="/">
        <Button color="light">
          Kembali ke beranda <ArrowSmRightIcon className="w-5 h-5" />
        </Button>
      </Link>
    </div>
  )

  const Content = () => (
    <div className="grid md:grid-cols-12 gap-x-8 mt-8 relative">
      <div className="md:col-span-8">
        <p className="font-medium text-sunglow-600 capitalize">{kelas!.nama_kategori}</p>
        <h1 className="text-2xl leading-tight md:text-3xl font-semibold capitalize">
          {kelas!.nama_kelas}
        </h1>
        <div className="w-full relative bg-slate-200 aspect-video rounded-md overflow-hidden my-6"></div>
        <article className="w-full">
          <section className="border-b border-slate-200 pb-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Tentang Kelas</h2>
            <div dangerouslySetInnerHTML={{ __html: kelas!.deskripsi }}></div>
          </section>
          <section className="pb-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Materi</h2>
            <Card className="p-5">
              <ul className="space-y-3">
                {materi.map(({ kode_materi, judul_materi }) => (
                  <li key={kode_materi} className="flex justify-between">
                    <div className="flex">
                      <LockClosedIcon className="w-5 h-5 text-slate-300 flex-shrink-0" />
                      <span className="ml-4 font-medium text-sm capitalize">{judul_materi}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </article>
      </div>
      <div className="md:col-span-4">
        <div className="bg-white border border-slate-200 w-full rounded shadow-sm p-5 md:p-8">
          <h2 className="font-bold text-sm mb-1">Benefit</h2>
          <ul className="space-y-1 mb-2">
            <li className="flex items-center space-x-1.5">
              <BadgeCheckIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm leading-none font-medium capitalize">
                {formatTime(kelas!.durasi, { hour: true })} Belajar
              </span>
            </li>
            <li className="flex items-center space-x-1.5">
              <BadgeCheckIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm leading-none font-medium">{materi.length} Video</span>
            </li>
            <li className="flex items-center space-x-1.5">
              <BadgeCheckIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm leading-none font-medium">Ilmu Bermanfaat</span>
            </li>
          </ul>
          <div className="mb-4 mt-2">
            <div className="text-sm font-medium">Harga</div>
            <div className="text-3xl leading-none font-slate-600 font-extrabold">
              {formatPrice(kelas!.harga)}
            </div>
          </div>
          <Button color="secondary" onClick={registerCourse} className="w-full sticky top-0">
            Daftar Kelas
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <LandingLayout>
      <main className="flex-grow py-12">
        <div className="max-w-7xl pb-12 md:pb-20 pt-12 mx-auto px-4 sm:px-6">
          {kelas ? <Content /> : <NotFound />}
        </div>
      </main>
    </LandingLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await axios.get(`/classes/detail/${query.kode}`)

  return {
    props: {
      ...res.data,
    },
  }
}

export default CourseDetail
