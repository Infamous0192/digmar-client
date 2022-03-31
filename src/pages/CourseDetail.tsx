import { ClockIcon, UsersIcon } from '@heroicons/react/outline'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Button } from 'components/elements'

const CourseDetail: React.FC = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-7xl pb-12 md:pb-20 pt-12 mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Full-stack Javascript Developer</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid md:grid-cols-12 gap-8 mt-8">
          <div className="md:col-span-8">
            <div className="relative h-0 pb-[56.25%] mb-8">
              <div className="absolute w-full h-full bg-gray-200 rounded overflow-hidden">
                <iframe
                  className="absoulute w-full h-full"
                  src="https://www.youtube.com/embed/JS5w4rUbjQE"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="w-full space-y-8 divide-y divide-gray-200">
              <section>
                <h2 className="text-2xl font-bold mb-2">Deskripsi</h2>
                <p className="mb-2 leading-relaxed text-gray-700">
                  There is so much happening in the AI space. Advances in the economic sectors have
                  seen automated business practices rapidly increasing economic value. While the
                  realm of the human sciences has used the power afforded by computational
                  capabilities to solve many human based dilemmas. Even the art scene has adopted
                  carefully selected ML applications to usher in the technological movement.
                </p>
                <p className="mb-2 leading-relaxed text-gray-700">
                  Join us every second Wednesday as we host an open discussion about the amazing
                  things happening in the world of AI and machine learning. Feel free to share your
                  experiences, ask questions, ponder the possibilities, or just listen as we explore
                  new topics and revisit old ones.
                </p>
              </section>
              <section className="pt-4">
                <h2 className="text-2xl font-bold mb-2">Materi</h2>
                <div className="rounded-lg shadow bg-white p-6 mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-3">Fundamental</h3>
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
                <div className="rounded-lg shadow bg-white p-6 mb-4">
                  <div className="">
                    <h3 className="text-lg font-semibold mb-3">Implementation</h3>
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
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="bg-white w-full rounded shadow-sm p-6 space-y-2">
              <div className="space-x-1.5 flex items-center">
                <ClockIcon className="w-5 h-5 inline" />
                <span className="leading-none font-medium">5 Jam</span>
              </div>
              <div className="space-x-1.5 flex items-center">
                <UsersIcon className="w-5 h-5 inline" />
                <span className="leading-none font-medium">2,000 Pendaftar</span>
              </div>
            </div>
            <Button color="secondary" className="w-full mt-4">
              Daftar sekarang
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CourseDetail
