import { CourseChoices } from 'container/CourseChoices'

const BestChoices: React.FC = () => {
  return (
    <section className="relative bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div
          className="relative rounded py-10 md:py-12 overflow-hidden"
          // data-aos="zoom-y-out"
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
            <div className="max-w-sm w-full">
              <CourseChoices />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestChoices
