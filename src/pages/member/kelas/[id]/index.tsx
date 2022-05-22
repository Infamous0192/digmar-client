import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'

import { DashboardLayout } from 'layouts/dashboard'
import { Course, CourseList } from 'container/CourseList'
import axios from 'lib/axios'
import { ArrowSmRightIcon, EmojiSadIcon } from '@heroicons/react/outline'
import { Link } from 'components/elements'
import { Button } from 'components/elements'

interface Kelas {
  idkelasterdaftar: string
  kode_kelas: string
  nama_kelas: string
  nama_kategori: string
  thumbnail: string
  deskripsi: string
  durasi: string
  harga: string
  penyelenggara: string
  tgl_selesai: Date | string
  statuskelas: string
}

interface Materi {
  idrecordmateri: string
  kode_materi: string
  judul_materi: string
  durasi: string
  urutan_materi: string
  status: string
  tgl_selesai: null
}

interface Props {
  kelas: Kelas | null
  materi: Materi[] | null
}

const MemberClassDetail: NextPage<Props> = ({ kelas, materi }) => {
  if (!kelas || !materi)
    return (
      <DashboardLayout>
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
      </DashboardLayout>
    )

  const courses: Course[] = materi!.map((i) => ({
    id: i.idrecordmateri,
    title: i.judul_materi,
    duration: i.durasi,
    status: i.status == 'proses' ? 'process' : 'finish',
  }))

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-slate-800 leading-none">Kelas Digital Marketing</h1>
      </div>
      <section>
        <h2 className="font-semibold text-xl mb-4">Materi</h2>
        <CourseList code={kelas.idkelasterdaftar} courses={courses} />
      </section>

      {/* <div className="max-w-xl mx-auto w-full mt-8 relative">
        <Image
          alt="Sertifikat Dicoding"
          src="/sertifikat_dicoding.png"
          width={2339}
          height={1654}
        />
        <div className="bg-black w-full h-full inset-0 z-10 absolute bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 cursor-pointer"></div>
      </div> */}
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, query }) => {
  const token = req.cookies.token
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  try {
    const user = await axios.get('/me', config)
    const courses = await axios.post(
      '/members/kelasaktif/detail',
      { iduser: user.data.id_user, idkelasterdaftar: query.id },
      config
    )

    return {
      props: {
        kelas: courses.data.kelas,
        materi: courses.data.materi,
      },
    }
  } catch (error) {
    return {
      props: {
        kelas: null,
        materi: null,
      },
    }
  }
}

export default MemberClassDetail
