import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'

import { DashboardLayout } from 'layouts/dashboard'
import { Button, Card, Link } from 'components/elements'
import axios from 'lib/axios'

interface Class {
  idkelasterdaftar: string
  kode_kelas: string
  nama_kelas: string
  statuskelas: 'berjalan' | 'selesai'
  tgl_selesai: null
  thumbnail: string
}

interface Props {
  classes: Class[]
}

interface State {
  status: string
}

const MemberClass: NextPage<Props> = ({ classes }) => {
  const [state, setState] = useState<State>({ status: 'berjalan' })

  function handleStatus(status: string) {
    return () => {
      setState((prev) => ({ ...prev, status }))
    }
  }

  return (
    <DashboardLayout>
      <div className="md:flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-slate-800 leading-none">Kelas Terdaftar</h1>
      </div>
      <div className="flex items-center space-x-3 overflow-auto py-1 mb-4">
        <Button
          color={state.status == 'berjalan' ? 'primary' : 'light'}
          size="sm"
          rounded="full"
          onClick={handleStatus('berjalan')}
        >
          Ongoing
        </Button>
        <Button
          color={state.status == 'selesai' ? 'primary' : 'light'}
          size="sm"
          rounded="full"
          onClick={handleStatus('selesai')}
        >
          Finished
        </Button>
      </div>
      <Card>
        <div className="divide-y divide-slate-200">
          {classes
            .filter((i) => i.statuskelas == state.status)
            .map((i) => (
              <Link to={`/member/kelas/${i.idkelasterdaftar}`} key={i.idkelasterdaftar}>
                <div className="w-full hover:bg-slate-50 transition-colors md:flex items-center justify-between p-4">
                  <div className="flex h-full w-full">
                    <div className="w-16 h-16 bg-slate-200 flex-shrink-0 rounded-md relative overflow-hidden border">
                      <Image
                        src={i.thumbnail}
                        layout="fill"
                        className="w-full h-full absolute inset-0 object-cover object-center"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-slate-600 capitalize">{i.kode_kelas}</div>
                      <h2 className="text-lg font-semibold capitalize">{i.nama_kelas}</h2>
                    </div>
                  </div>
                  <div className="justify-end space-x-4 mt-4 md:mt-0 hidden md:flex">
                    <Button>Lihat Materi</Button>
                    {i.statuskelas == 'selesai' && (
                      <Button color="secondary">Lihat Sertifikat</Button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Card>
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const token = req.cookies.token
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  try {
    const user = await axios.get('/me', config)
    const classes = await axios.post('/members/kelasaktif', { iduser: user.data.id_user }, config)

    return {
      props: {
        classes: classes.data,
      },
    }
  } catch (error) {
    return {
      props: {
        classes: [],
      },
    }
  }
}

export default MemberClass
