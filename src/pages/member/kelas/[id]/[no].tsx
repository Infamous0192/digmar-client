import type { GetServerSideProps, NextPage } from 'next'
import { Button } from 'components/elements'
import axios from 'lib/axios'
import { CourseLayout } from 'layouts/course'
import { CourseContext } from 'contexts/course'
import { ICourseContext } from 'contexts/course'
import { useRouter } from 'next/router'

const ClassCourse: NextPage<ICourseContext> = ({ materi, kelas }) => {
  const router = useRouter()
  const urutan = parseInt(materi.urutan_materi)

  function handlePrev() {
    const prevCourse = kelas.materi[urutan - 2]
    router.push(`/member/kelas/${kelas.idkelasterdaftar}/${prevCourse.idrecordmateri}`)
  }

  function handleNext() {
    const nextCourse = kelas.materi[urutan]
    router.push(`/member/kelas/${kelas.idkelasterdaftar}/${nextCourse.idrecordmateri}`)
  }

  return (
    <CourseContext.Provider value={{ materi, kelas }}>
      <CourseLayout>
        <h1 className="text-2xl font-semibold mb-4 capitalize">{materi.judul_materi}</h1>
        <div className="w-full aspect-video bg-slate-200 rounded-md overflow-hidden mb-4">
          {/* <video
            className="w-full h-full"
            src={props.materi.videomateri}
          ></video> */}
        </div>
        <div className="flex items-center justify-between">
          <div>
            {urutan > 1 && (
              <Button color="secondary" onClick={handlePrev}>
                Sebelumnya
              </Button>
            )}
          </div>
          <div>
            {urutan < kelas.materi.length && (
              <Button color="secondary" onClick={handleNext}>
                Selanjutnya
              </Button>
            )}
          </div>
        </div>
      </CourseLayout>
    </CourseContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const token = req.cookies.token
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }

  try {
    const user = await axios.get('/me', config)
    const kelas = await axios.post(
      '/members/kelasaktif/detail',
      { iduser: user.data.id_user, idkelasterdaftar: query.id },
      config
    )
    const materi = await axios.post(
      '/members/materikelasaktif',
      { iduser: user.data.id_user, idrecordmateri: query.no },
      config
    )

    return {
      props: {
        kelas: {
          ...kelas.data.kelas,
          materi: kelas.data.materi,
        },
        materi: materi.data[0],
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

export default ClassCourse
