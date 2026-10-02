function About() {
  return (
    <section id="about" className="min-h-screen px-16 py-16">

      <div className="grid grid-cols-[0.8fr_1.8fr_0.3fr] gap-10 items-start">

        {/* Left side - Standing picture */}
        <div className="border h-[500px] flex items-center justify-center">
          <p className="text-center font-semibold">
            &lt;Standing Picture&gt;
            <br />
            &lt;3D Parallax Effect&gt;
          </p>
        </div>


        {/* Center */}
        <div>

          {/* Heading */}
          <h2 className="text-8xl font-bold mb-8">
            ABOUT ME
          </h2>

          {/* Description */}
          <div className="p-0 min-h-[175px] flex items-center mb-10">
            <p className="text-lg">
              I'm a Full-Stack Developer with a Computer Science background and hands-on
              experience building software for real business environments. My work spans
              internal tools, workflow automation, web applications, and interactive
              digital experiences, with a strong focus on solving practical problems through
              technology.
            </p>
          </div>


          {/* Tech stack */}
          <div className="grid grid-cols-5 gap-8">

            <div className="border rounded-full aspect-square flex items-center justify-center">
              Tech 1
            </div>

            <div className="border rounded-full aspect-square flex items-center justify-center mt-12">
              Tech 2
            </div>

            <div className="border rounded-full aspect-square flex items-center justify-center">
              Tech 3
            </div>

            <div className="border rounded-full aspect-square flex items-center justify-center mt-12">
              Tech 4
            </div>

            <div className="border rounded-full aspect-square flex items-center justify-center">
              Tech 5
            </div>

          </div>

        </div>


        {/* Right side - Stack */}
        <div className="flex flex-col items-center text-8xl font-bold pt-0">
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
        </div>

      </div>

    </section>
  )
}

export default About