function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-100px)] px-32"
    >
      <div className="flex items-center justify-between h-full pt-10">

        <div className="max-w-2xl">
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
        </div>

        <div className="w-80 h-96 border border-black flex items-center justify-center">
          <p className="text-3xl font-bold">
            &lt;3D Object&gt;
          </p>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div className="w-5 h-10 rounded-full bg-black"></div>
        <p>Scroll to view more</p>
      </div>
    </section>
  )
}

export default Hero