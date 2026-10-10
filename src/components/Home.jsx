function Home() {
  return (
    <section
      id="home"
      className="py-8 lg:py-0"
    >
      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-16">

          {/* Left side */}
          <div className="contents md:block">

            {/* Hero Text */}
            <div className="order-1 w-fit mx-auto text-left md:mx-0">
              <p className="inline-block border px-3 py-1 mb-5 text-xs sm:text-sm font-semibold uppercase">
                Welcome to my portfolio
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold mb-4 whitespace-nowrap">
                Hey, I'm Shuaib!
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl font-semibold mb-6 lg:mb-8 whitespace-nowrap">
                I'm a{" "}
                <span className="italic">
                  Full-Stack Developer
                </span>
              </h2>

              <p className="text-base lg:text-lg max-w-md">
                I build interactive web applications and digital experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="order-3 flex flex-wrap justify-center md:justify-start lg:justify-start gap-3 lg:gap-6 mt-0 md:mt-6 lg:mt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="border px-4 py-2 rounded"
              >
                Connect with Me
              </a>
            </div>

          </div>


          {/* Profile */}
          <div className="order-2 flex justify-center mt-0">
            <div className="relative w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px]">

              {/* Circle */}
              <div className="absolute inset-10 md:inset-8 lg:inset-13 rounded-full border border-black flex items-center justify-center">
                <p className="text-center text-lg md:text-base lg:text-2xl font-bold">
                  &lt;Profile Picture&gt;
                  <br />
                  &lt;Parallax 3D Effect&gt;
                </p>
              </div>

              {/* Stats */}

              {/* Top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-2 lg:top-14 lg:-left-40 lg:translate-x-0 border px-3 lg:px-4 py-2 rounded bg-white whitespace-nowrap text-xs lg:text-base">
                Full-Stack + Operations Background
              </div>

              {/* Right */}
              <div className="absolute top-1/2 -right-0 translate-y-5 md:-right-6 md:translate-y-2 lg:top-14 lg:-right-15 lg:translate-y-0 border px-3 lg:px-4 py-2 rounded bg-white whitespace-nowrap text-xs lg:text-base">
                5+ Development Years
              </div>

              {/* Bottom */}
              <div className="absolute bottom-3 left-1/2 -translate-x-40 -translate-y-5 md:-translate-x-1/2 md:translate-y-0 lg:bottom-8 lg:-left-20 lg:translate-x-0 border px-3 lg:px-4 py-2 rounded bg-white whitespace-nowrap text-xs lg:text-base">
                3 Major Business Applications
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home