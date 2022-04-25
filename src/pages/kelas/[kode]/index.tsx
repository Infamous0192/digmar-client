import type { NextPage } from 'next'
import { ArrowLeftIcon, ClockIcon, UsersIcon } from '@heroicons/react/outline'
import { BadgeCheckIcon, StarIcon } from '@heroicons/react/solid'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Button, Link } from 'components/elements'
import { LandingLayout } from 'layouts/LandingLayout'
import Image from 'next/image'

const CourseDetail: NextPage = () => {
  return (
    <LandingLayout>
      <main className="flex-grow py-12">
        <div className="max-w-7xl pb-12 md:pb-20 pt-12 mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-x-8 mt-8 relative">
            <div className="md:col-span-8">
              <Link
                to="/kelas"
                className="flex items-center text-sm space-x-1.5 font-medium text-sunglow-600 mb-2 hover:text-sunglow-500"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Kembali ke Daftar Kelas</span>
              </Link>
              <h1 className="text-2xl leading-tight md:text-3xl font-semibold">
                Front-End Learning: Hands-On HTML & CSS In Real Web Apps
              </h1>
              <div className="my-4 sm:flex item-center justify-between">
                <div className="flex items-center space-x-1.5 text-sm mt-2">
                  <div className="w-8 h-8 border border-white bg-gray-200 rounded-full"></div>
                  <span>CV Tarkiz Paz Banua</span>
                </div>

                <div className="flex items-center mt-2">
                  <StarIcon className="w-5 h-5 text-orange-500" />
                  <StarIcon className="w-5 h-5 text-orange-500" />
                  <StarIcon className="w-5 h-5 text-orange-500" />
                  <StarIcon className="w-5 h-5 text-orange-500" />
                  <StarIcon className="w-5 h-5 text-gray-300" />
                  <span className="text-orange-500 ml-2 text-sm leading-none">4.2</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
              <div className="w-full relative bg-gray-200 aspect-video rounded-md overflow-hidden my-6"></div>
              <article className="w-full">
                <section className="border-b border-gray-200 pb-4 mb-4">
                  <h2 className="text-xl font-bold mb-2">Tentang Kelas</h2>
                  <p className="mb-2 leading-relaxed text-gray-700">
                    There is so much happening in the AI space. Advances in the economic sectors
                    have seen automated business practices rapidly increasing economic value. While
                    the realm of the human sciences has used the power afforded by computational
                    capabilities to solve many human based dilemmas. Even the art scene has adopted
                    carefully selected ML applications to usher in the technological movement.
                  </p>
                  <p className="mb-2 leading-relaxed text-gray-700">
                    Join us every second Wednesday as we host an open discussion about the amazing
                    things happening in the world of AI and machine learning. Feel free to share
                    your experiences, ask questions, ponder the possibilities, or just listen as we
                    explore new topics and revisit old ones.
                  </p>
                </section>
                <section className="pb-4 mb-4">
                  <h2 className="text-xl font-bold mb-2">Materi</h2>
                  <div className="rounded-lg shadow-sm bg-white border border-gray-200 p-6 mb-4">
                    <div className="">
                      <ul className="space-y-2">
                        <li className="flex items-center justify-between font-medium ">
                          <div className="flex items-center">
                            <LockClosedIcon className="w-5 h-5 text-gray-300" />
                            <span className="leading-none ml-4">Introduction</span>
                          </div>
                          <div>3 mins</div>
                        </li>
                        <li className="flex items-center justify-between font-medium ">
                          <div className="flex items-center">
                            <LockClosedIcon className="w-5 h-5 text-gray-300" />
                            <span className="leading-none ml-4">Tools & Requirement</span>
                          </div>
                          <div>3 mins</div>
                        </li>
                        <li className="flex items-center justify-between font-medium ">
                          <div className="flex items-center">
                            <LockClosedIcon className="w-5 h-5 text-gray-300" />
                            <span className="leading-none ml-4">Environment Setup</span>
                          </div>
                          <div>3 mins</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </article>
            </div>
            <div className="md:col-span-4">
              <div className="bg-white border border-gray-200 w-full rounded shadow-sm p-5 md:p-8">
                <h2 className="font-bold text-sm mb-1">Benefit</h2>
                <ul className="space-y-1 mb-2">
                  <li className="flex items-center space-x-1.5">
                    <BadgeCheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm leading-none font-medium">12 Modul</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <BadgeCheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm leading-none font-medium">Sertifikat Digital</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <BadgeCheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-sm leading-none font-medium">Ilmu Bermanfaat</span>
                  </li>
                </ul>
                <div className="mb-4 mt-2">
                  <div className="text-sm font-medium">Biaya</div>
                  <div className="text-3xl leading-none font-gray-600 font-extrabold">
                    Rp. 10.000
                  </div>
                </div>
                <Button color="secondary" className="w-full sticky top-0">
                  Daftar Kelas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LandingLayout>
  )
}

export default CourseDetail
