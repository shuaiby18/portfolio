
function About() {
  return (
    <section id="about" className="min-h-screen py-16">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-12 lg:grid-cols-[0.8fr_1.8fr_0.3fr] gap-x-3 gap-y-8 sm:gap-x-6 lg:gap-10 items-stretch lg:items-start">

          {/* Left side - Standing picture */}
          <div className="order-2 col-span-6 lg:order-none lg:col-span-1 border h-full min-h-[320px] lg:h-[500px] lg:min-h-0 flex items-center justify-center">
            <p className="text-center font-semibold text-xs sm:text-sm lg:text-base">
              &lt;Standing Picture&gt;
              <br />
              &lt;3D Parallax Effect&gt;
            </p>
          </div>

          {/* Center */}
          <div className="contents lg:block">

            {/* Heading */}
            <h2 className="order-1 col-span-12 lg:order-none lg:col-span-1 text-5xl lg:text-8xl font-bold text-center lg:text-left mb-0 lg:mb-8">
              ABOUT ME
            </h2>

            {/* Description */}
            <div className="order-3 col-span-6 min-w-0 lg:order-none lg:col-span-1 min-h-0 lg:min-h-[175px] flex items-start lg:items-center mb-0 lg:mb-10">
              <p className="text-sm sm:text-base lg:text-lg">
                I'm a Full-Stack Developer with a Computer Science background
                and hands-on experience building software for real business
                environments. My work spans internal tools, workflow automation,
                web applications, and interactive digital experiences, with a
                strong focus on solving practical problems through technology.
              </p>
            </div>

            {/* Tech stack */}
            <div className="order-4 col-span-10 min-w-0 lg:order-none lg:col-span-1 grid grid-cols-8 gap-y-4 lg:grid-cols-5 lg:gap-8">

              {/* Mobile: Row 1 / Desktop: Original layout */}

              <div className="col-span-2 col-start-2 row-start-1 lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 1
              </div>

              <div className="col-span-2 col-start-4 row-start-1 lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] lg:w-full justify-self-center flex items-center justify-center lg:mt-12 text-xs sm:text-base">
                Tech 2
              </div>

              <div className="col-span-2 col-start-6 row-start-1 lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 3
              </div>

              {/* Mobile: Row 2 / Desktop: Original layout */}

              <div className="col-span-2 col-start-1 row-start-2 lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] lg:w-full justify-self-center flex items-center justify-center lg:mt-12 text-xs sm:text-base">
                Tech 4
              </div>

              <div className="col-span-2 col-start-3 row-start-2 lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 5
              </div>

              {/* Additional mobile circles */}

              <div className="col-span-2 col-start-5 row-start-2 lg:hidden border rounded-full aspect-square w-[90%] justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 6
              </div>

              <div className="col-span-2 col-start-7 row-start-2 lg:hidden border rounded-full aspect-square w-[90%] justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 7
              </div>

              {/* Mobile: Row 3 */}

              <div className="col-span-2 col-start-2 row-start-3 lg:hidden border rounded-full aspect-square w-[90%] justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 8
              </div>

              <div className="col-span-2 col-start-4 row-start-3 lg:hidden border rounded-full aspect-square w-[90%] justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 9
              </div>

              <div className="col-span-2 col-start-6 row-start-3 lg:hidden border rounded-full aspect-square w-[90%] justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 10
              </div>

            </div>

          </div>

          {/* Right side - Stack */}
          <div className="order-5 col-span-2 lg:order-none lg:col-span-1 flex flex-col items-center justify-between lg:justify-start text-5xl lg:text-8xl font-bold">
            <span>S</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About
