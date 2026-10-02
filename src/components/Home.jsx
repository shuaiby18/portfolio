function Home() {
  return (
    <section
      id="home"
      className="min-h-screen py-0"
    >
      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-2 items-center gap-16">

          {/* Left side */}
          <div>
            <p className="inline-block border px-3 py-1 mb-5 text-sm font-semibold uppercase">
              Welcome to my portfolio
            </p>

            <h1 className="text-6xl font-bold mb-4">
              Hey, I'm Shuaib!
            </h1>

            <h2 className="text-4xl font-semibold mb-8">
              I'm a <span className="italic">Full-Stack Developer</span>
            </h2>

            <p className="text-lg max-w-md">
              I build interactive web applications and digital experiences.
            </p>

            <div className="flex gap-6 mt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded"
              >
                View Resume
              </a>

              <a
                href="https://github.com/shuaiby18"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded"
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="border px-4 py-2 rounded"
              >
                Connect with Me
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex justify-center">
            <div className="relative w-[420px] h-[420px]">

              {/* Circle */}
              <div className="absolute inset-13 rounded-full border border-black flex items-center justify-center">
                <p className="text-center text-2xl font-bold">
                  &lt;Profile Picture&gt;
                  <br />
                  &lt;Parallax 3D Effect&gt;
                </p>
              </div>

              {/* Stats */}
              <div className="absolute top-14 -left-40 border px-4 py-2 rounded bg-white">
                Full-Stack + Operations Background
              </div>

              <div className="absolute top-14 -right-15 border px-4 py-2 rounded bg-white">
                5+ Development Years
              </div>

              <div className="absolute bottom-8 -left-20 border px-4 py-2 rounded bg-white">
                3 Major Business Applications
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-10 gap-3">
          <span>▼</span>
          <p>Scroll to view more</p>
        </div>

      </div>
    </section>
  )
}

export default Home