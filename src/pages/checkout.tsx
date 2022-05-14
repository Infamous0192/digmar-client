import type { GetServerSideProps, NextPage } from 'next'

import axios from 'lib/axios'
import { Cart } from 'types'

import { LandingLayout } from 'layouts/landing'
import { Button, Link } from 'components/elements'
import { TextField } from 'components/forms'
import { Creds, useAuth } from 'modules/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'hooks'
import { formatPrice } from 'utils/format'

interface Props {
  products: {
    kode_kelas: string
    nama_kelas: string
    nama_kategori: string
    thumbnail: string
    deskripsi: string
    durasi: string
    harga: string | number
  }[]
}

const CheckoutPage: NextPage<Props> = ({ products }) => {
  const router = useRouter()
  const { state } = useAuth()

  useEffect(() => {
    if (!state.isAuthenticated && state.isLoaded && router.isReady) router.push('/masuk')
  }, [state.isLoaded, router.isReady])

  if (!state.isAuthenticated || !state.isLoaded) return null

  const product = products[0]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const res = await axios.post('/members/order', {
        iduser: state.creds!.id_user,
        kodeproduk: product.kode_kelas,
        namaterdaftar: state.creds!.username,
        emailterdaftar: state.creds!.email,
      })

      console.log(res.data)
    } catch (error: any) {
      console.log(error.response)
    }
  }

  return (
    <LandingLayout>
      <main className="flex-grow py-12">
        <div className="max-w-7xl py-16 md:pb-20 mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="bg-white rounded-lg shadow p-5">
                <h1 className="text-lg font-semibold mb-4">Detail Transaksi</h1>
                <div className="border border-slate-200 rounded-md flex overflow-hidden">
                  <div className="w-24 h-24 bg-slate-200 flex-shrink-0"></div>
                  <div className="p-4">
                    <div className="font-medium capitalize">{product.nama_kelas}</div>
                    <div className="text-sunglow-600 font-semibold">
                      {formatPrice(product.harga)}
                    </div>
                  </div>
                </div>
                <section className="mt-2">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex-grow-1 capitalize">{product.nama_kelas}</div>
                    <div className="font-bold flex-shrink-0">{formatPrice(product.harga)}</div>
                  </div>
                  <div className="flex items-center justify-between py-4 text-lg">
                    <div className="flex-grow-1 font-bold">Total</div>
                    <div className="font-bold flex-shrink-0">{formatPrice(product.harga)}</div>
                  </div>
                </section>
              </div>
            </div>

            <div className="md:col-span-4">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-5">
                <h1 className="text-lg font-semibold mb-4">Data Pengguna</h1>
                <div className="mb-4">
                  <h2 className="font-semibold mb-2">Nama Lengkap</h2>
                  <TextField
                    type="text"
                    name="namaterdaftar"
                    value={state.creds!.username}
                    readOnly
                  />
                  <p className="text-sm">
                    Nama lengkap yang benar dibutuhkan untuk sertifikat nantinya
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="font-semibold mb-2">Alamat Email</h2>
                  <TextField
                    type="text"
                    name="emailterdaftar"
                    value={state.creds!.email}
                    readOnly
                  />
                  <p className="text-sm">Invoice dan informasi kelas akan dikirim via Email</p>
                </div>
                <Button type="submit" color="secondary" className="w-full mb-4">
                  Selanjutnya
                </Button>
                <p className="font-light text-sm text-slate-700 px-2 text-center italic leading-snug">
                  By checking out you agree with our Terms of Service
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </LandingLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const cookie = req.cookies

  try {
    if (!cookie.cart) throw new Error()

    const carts: Cart[] = JSON.parse(cookie.cart)

    if (!carts.length) throw new Error()

    const course = await axios.get(`/classes/detail/${carts[0].kode}`)

    return {
      props: {
        products: [course.data.kelas],
      },
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/kelas',
      },
      props: {},
    }
  }
}

export default CheckoutPage
