export interface Course {
  id_kelas: string
  kode_kelas: string
  harga: string
  durasi: string
  nama_kategori: string
  nama_kelas: string
  photo: string
}

export type Navigation = {
  title: string
  href: string
  icon: React.FC<any>
  links?: {
    title: string
    href: string
  }[]
}

export type Cart = {
  kode: string
  jenis: string
}
