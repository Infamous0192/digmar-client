import { Button } from 'components/elements'

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-50">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-48 md:pb-32">
          {/* Section header */}
          <div className="text-left pb-12 md:pb-16">
            <h1
              className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Lorem, ipsum dolor.
            </h1>
            <div className="max-w-xl">
              <p
                className="text-lg md:text-xl text-slate-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium.
              </p>
              <div className="" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Button color="primary" size="xl" className="w-full mb-4 sm:w-auto sm:mb-0">
                    Mulai Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
