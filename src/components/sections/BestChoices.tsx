import { Scrollbar, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { AcademicCapIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'

const BestChoices: React.FC = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div
          className="relative rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden"
          data-aos="zoom-y-out"
        >
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-x-4">
            {/* CTA content */}
            <div className="text-center lg:text-left lg:max-w-xl">
              <h2 className="h3 mb-2">Kelas Pilihan</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa
                sapiente.
              </p>
            </div>
            <div className="max-w-md w-full">
              <Swiper
                navigation={{
                  prevEl: '.prev',
                  nextEl: '.next',
                  disabledClass: 'text-gray-400 border-gray-400',
                }}
                modules={[Scrollbar, Navigation]}
                spaceBetween={25}
                scrollbar={{ draggable: true }}
                slidesPerView="auto"
              >
                <SwiperSlide>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <img
                      className="absolute w-full h-full inset-0 object-cover object-center"
                      src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                      alt=""
                    />
                    <div className="bg-black absolute inset-0 w-full h-full bg-opacity-50"></div>
                    <div className="absolute bottom-4 left-4 z-10 text-white">
                      <h2 className="font-semibold text-xl">Fullstack Javascript Developer</h2>
                      <div className="flex items-center space-x-2 text-sm">
                        <AcademicCapIcon className="inline w-5 h-5 text-sunglow-600" />
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <img
                      className="absolute w-full h-full inset-0 object-cover object-center"
                      src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                      alt=""
                    />
                    <div className="bg-black absolute inset-0 w-full h-full bg-opacity-50"></div>
                    <div className="absolute bottom-4 left-4 z-10 text-white">
                      <h2 className="font-semibold text-xl">Fullstack Javascript Developer</h2>
                      <div className="flex items-center space-x-2 text-sm">
                        <AcademicCapIcon className="inline w-5 h-5 text-sunglow-600" />
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <img
                      className="absolute w-full h-full inset-0 object-cover object-center"
                      src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                      alt=""
                    />
                    <div className="bg-black absolute inset-0 w-full h-full bg-opacity-50"></div>
                    <div className="absolute bottom-4 left-4 z-10 text-white">
                      <h2 className="font-semibold text-xl">Fullstack Javascript Developer</h2>
                      <div className="flex items-center space-x-2 text-sm">
                        <AcademicCapIcon className="inline w-5 h-5 text-sunglow-600" />
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="flex items-center justify-end space-x-4 mt-4">
                  <button className="prev left-2 z-10 bottom-24 bg-white border-2 border-gray-900 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                    <ArrowLeftIcon className="w-6 h-6" />
                  </button>
                  <button className="next right-2 z-10 bottom-24 bg-white border-2 border-gray-900 text-primary rounded-full w-10 h-10 flex items-center justify-center">
                    <ArrowRightIcon className="w-6 h-6" />
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestChoices
