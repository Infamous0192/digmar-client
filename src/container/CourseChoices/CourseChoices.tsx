import { Scrollbar, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import CourseItem from './CourseItem'

const test = [1, 2, 3]

const CourseChoices: React.FC = () => {
  return (
    <Swiper
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
        disabledClass: 'opacity-50',
      }}
      modules={[Scrollbar, Navigation, Autoplay]}
      autoplay={{
        delay: 1500,
        stopOnLastSlide: true,
      }}
      spaceBetween={25}
      scrollbar={{ draggable: true }}
      slidesPerView="auto"
    >
      {test.map((item) => (
        <SwiperSlide key={item}>
          <CourseItem />
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-end space-x-4 mt-4">
        <button className="prev left-2 z-10 bottom-24 bg-white border-2 border-slate-900 text-primary rounded-full w-10 h-10 flex items-center justify-center">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button className="next right-2 z-10 bottom-24 bg-white border-2 border-slate-900 text-primary rounded-full w-10 h-10 flex items-center justify-center">
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </Swiper>
  )
}

export default CourseChoices
