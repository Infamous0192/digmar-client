import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import { Autoplay, Navigation, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Events: React.FC = () => {
  return (
    <section className="relative bg-white">
      <div
        className="absolute inset-0 bg-gray-50 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid md:grid-cols-2 gap-4 mb-2">
          <h1 className="text-2xl md:text-3xl font-semibold">Event Mendatang</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore laudantium mollitia
            magni rerum eaque iusto.
          </p>
        </div>
        <div className="flex items-center justify-end space-x-4 mb-4">
          <button
            id="prev-event"
            className="border-2 border-gray-900 text-primary rounded-full w-9 h-9 flex items-center justify-center"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button
            id="next-event"
            className="border-2 border-gray-900 text-primary rounded-full w-9 h-9 flex items-center justify-center"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
        <Swiper
          navigation={{
            prevEl: '#prev-event',
            nextEl: '#next-event',
            disabledClass: 'opacity-50',
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          autoplay={{
            delay: 3000,
          }}
          slidesPerView="auto"
        >
          <SwiperSlide style={{ maxWidth: '28rem' }}>
            <div className="w-full bg-white rounded-md border border-gray-200 shadow-md">
              <div className="relative bg-gray-200 w-full aspect-video rounded rounded-b-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                  alt="placeholder"
                  className="absolute w-full h-full inset-0 object-center object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-sunglow-600">Tarkiz Paz</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit ratione,
                  delectus soluta laudantium molestiae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '28rem' }}>
            <div className="w-full bg-white rounded-md border border-gray-200 shadow-md">
              <div className="relative bg-gray-200 w-full aspect-video rounded rounded-b-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                  alt="placeholder"
                  className="absolute w-full h-full inset-0 object-center object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-sunglow-600">Tarkiz Paz</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit ratione,
                  delectus soluta laudantium molestiae!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: '28rem' }}>
            <div className="w-full bg-white rounded-md border border-gray-200 shadow-md">
              <div className="relative bg-gray-200 w-full aspect-video rounded rounded-b-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
                  alt="placeholder"
                  className="absolute w-full h-full inset-0 object-center object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-sunglow-600">Tarkiz Paz</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit ratione,
                  delectus soluta laudantium molestiae!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Events
