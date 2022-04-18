const Events: React.FC = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="max-w-sm">
            <h2 className="font-bold text-2xl">Upcoming Events</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iste!</p>
          </div>
          <a href="#">
            <div className="md:max-w-lg bg-white hover:scale-[101%] transition-all rounded-lg shadow-sm w-full space-x-4 p-5 flex">
              <div className="rounded bg-gray-200 animate-pulse w-32 h-32 overflow-hidden flex-shrink-0">
                {/* <img src="https://via.placeholder.com/300" alt="" width={150} height={150} /> */}
              </div>
              <div className="">
                <h3 className="font-bold text-lg mb-2">Digital Marketing</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto amet
                  repellendus recusandae porro iusto perferendis.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Events
