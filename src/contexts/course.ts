import { createContext } from 'react'

type Kelas = {
  idkelasterdaftar: string
  kode_kelas: string
  nama_kelas: string
  nama_kategori: string
  thumbnail: string
  deskripsi: string
  durasi: string
  harga: string
  penyelenggara: string
  tgl_selesai: null
  statuskelas: string
  materi: {
    idrecordmateri: string
    kode_materi: string
    judul_materi: string
    durasi: string
    urutan_materi: string
    status: string
    tgl_selesai: Date | string
  }[]
}

type Materi = {
  idrecordmateri: string
  kode_materi: string
  judul_materi: string
  teks_materi: string
  video_materi: string
  urutan_materi: string
  durasi: string
  status: string
  tgl_selesai: Date | string
}

export interface ICourseContext {
  kelas: Kelas
  materi: Materi
}

export const CourseContext = createContext<ICourseContext>(null!)
