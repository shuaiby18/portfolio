
function About() {
  return (
    <section id="about" className="min-h-screen py-16">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-12 md:grid-cols-[0.7fr_1.8fr_0.25fr] lg:grid-cols-[0.8fr_1.8fr_0.3fr] gap-x-3 gap-y-8 sm:gap-x-6 md:gap-x-4 md:gap-y-6 lg:gap-10 items-stretch md:items-start lg:items-start">

          {/* Left side - Standing picture */}
          <div className="order-2 col-span-6 md:order-none md:col-span-1 lg:order-none lg:col-span-1 border h-full min-h-[320px] md:h-[440px] md:min-h-0 lg:h-[500px] lg:min-h-0 flex items-center justify-center">
            <p className="text-center font-semibold text-xs sm:text-sm md:text-xs lg:text-base">
              &lt;Standing Picture&gt;
              <br />
              &lt;3D Parallax Effect&gt;
            </p>
          </div>

          {/* Center */}
          <div className="contents md:block lg:block">

            {/* Heading */}
            <h2 className="order-1 col-span-12 md:order-none md:col-span-1 lg:order-none lg:col-span-1 text-[clamp(3rem,1rem_+_7.5vw,6rem)] leading-none font-bold text-center md:text-left lg:text-left mb-0 md:mb-4 lg:mb-0">
              ABOUT ME
            </h2>

            {/* Description */}
            <div className="order-3 col-span-6 min-w-0 md:order-none md:col-span-1 lg:order-none lg:col-span-1 min-h-0 lg:min-h-[175px] flex items-start md:items-center lg:items-center mb-0 md:mb-4 lg:mb-0">
              <p className="text-sm sm:text-base lg:text-lg">
                I'm a Full-Stack Developer with a Computer Science background
                and hands-on experience building software for real business
                environments. My work spans internal tools, workflow automation,
                web applications, and interactive digital experiences, with a
                strong focus on solving practical problems through technology.
              </p>
            </div>


            {/* Tech stack */}
            <div className="order-4 col-span-10 min-w-0 md:order-none md:col-span-1 grid grid-cols-8 gap-y-4 md:grid-cols-5 md:gap-x-3 md:gap-y-3 md:[&>div]:col-span-1 md:[&>div]:col-start-auto md:[&>div]:row-start-auto md:[&>div]:w-full md:[&>div]:max-w-[90px] lg:gap-x-8 lg:gap-y-4 lg:[&>div]:max-w-none">


              <div className="col-span-2 col-start-2 row-start-1 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 1
              </div>

              <div className="col-span-2 col-start-4 row-start-1 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 2
              </div>

              <div className="col-span-2 col-start-6 row-start-1 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 3
              </div>

              {/* Mobile: Row 2 / Tablet + Desktop: Row 1 */}

              <div className="col-span-2 col-start-1 row-start-2 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 4
              </div>

              <div className="col-span-2 col-start-3 row-start-2 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base">
                Tech 5
              </div>

              {/* Mobile: Row 2 / Tablet + Desktop: Row 2 */}

              <div className="col-span-2 col-start-5 row-start-2 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base lg:translate-x-4">
                Tech 6
              </div>

              <div className="col-span-2 col-start-7 row-start-2 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base lg:translate-x-4">
                Tech 7
              </div>

              {/* Mobile: Row 3 / Tablet + Desktop: Row 2 */}

              <div className="col-span-2 col-start-2 row-start-3 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base lg:translate-x-4">
                Tech 8
              </div>

              <div className="col-span-2 col-start-4 row-start-3 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base lg:translate-x-4">
                Tech 9
              </div>

              <div className="col-span-2 col-start-6 row-start-3 md:col-span-1 md:col-start-auto md:row-start-auto lg:col-span-1 lg:col-start-auto lg:row-start-auto border rounded-full aspect-square w-[90%] md:w-full lg:w-full justify-self-center flex items-center justify-center text-xs sm:text-base lg:translate-x-4">
                Tech 10
              </div>

            </div>

          </div>


          {/* Right side - Stack */}
          <div className="order-5 col-span-2 md:order-none md:col-span-1 lg:order-none lg:col-span-1 flex flex-col items-center justify-between md:justify-start lg:justify-start md:self-center lg:self-start text-[clamp(3rem,1rem_+_7.5vw,6rem)] leading-none font-bold">
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
