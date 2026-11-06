const processSteps = [
  {
    title: "DISCOVER",
    points: ["Requirements", "User Needs", "Project Goals"],
  },
  {
    title: "PLAN",
    points: ["Project Scope", "Feature Planning", "Technical Approach"],
  },
  {
    title: "DESIGN",
    points: ["UI Structure", "User Experience", "Visual Direction"],
  },
  {
    title: "BUILD",
    points: [
      "Frontend Development",
      "Backend Development",
      "Database & Integration",
    ],
  },
  {
    title: "TEST",
    points: [
      "Functionality Testing",
      "Responsive Testing",
      "Performance & Usability",
    ],
  },
  {
    title: "LAUNCH",
    points: ["Final Refinements", "Deployment", "Handoff & Support"],
  },
]

function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Mobile layout */}
        <div className="min-[800px]:hidden">
          {/* Mobile introduction */}
          <div
            className="
              min-w-0 grid grid-cols-[auto_minmax(0,1fr)] items-center
              gap-x-2 min-[384px]:gap-x-4 gap-y-2 mb-8
            "
          >
            <div className="w-fit text-left self-end min-[550px]:self-center">
              <div aria-hidden="true" className="w-full h-px bg-black mb-1" />

              <p className="text-[clamp(0.75rem,0.70rem_+_1vw,2rem)] font-semibold leading-tight">
                <span className="block">THE PROCESS</span>{" "}
                <span className="block">VISUALIZATION</span>
              </p>
            </div>

            <h2
              className="
                min-w-0 text-right
                text-[clamp(3rem,1rem_+_7.5vw,6rem)]
                leading-[1.1] font-bold tracking-tight
              "
            >
              MY LAB
            </h2>

            <p className="col-span-2 text-[clamp(13px,2.5vw,16px)] leading-snug">
              How I build, from the first conversation to launch.            </p>
          </div>

          {/* Mobile process cards */}
          <div className="grid grid-cols-2 auto-rows-fr gap-2.5">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="min-w-0 min-h-[192px] flex flex-col overflow-hidden border border-black rounded-2xl"
              >
                <div className="relative isolate flex-1 bg-white px-3 py-4 text-black">
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute right-2 top-2
                      select-none text-[clamp(2.5rem,10vw,4rem)]
                      font-bold leading-none tracking-tight tabular-nums
                      text-transparent [-webkit-text-stroke:1px_#d4d4d4]
                      [mask-image:linear-gradient(to_right,transparent,black_40%)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <h3 className="text-[clamp(1.125rem,4vw,1.5rem)] font-bold leading-tight">
                      {step.title}
                    </h3>

                    <ul className="mt-2 space-y-1 text-[clamp(12px,3.3vw,14px)] leading-snug">
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty visual panel */}
                <div
                  aria-hidden="true"
                  className="h-[72px] shrink-0 border-t border-black/20 bg-white"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-[800px]:hidden xl:grid xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] xl:items-center xl:gap-12">
          {/* Section introduction */}
          <div className="mb-16 xl:order-2 xl:mb-0">
            <div className="hidden xl:block xl:mb-4">
              <div aria-hidden="true" className="w-36 h-px bg-black mb-3" />

              <p className="text-[clamp(0.75rem,0.70rem_+_1vw,2rem)] font-semibold leading-tight">
                THE PROCESS VISUALIZATION
              </p>
            </div>

            <h2
              className="
                text-8xl font-bold text-center
                xl:text-left xl:text-[clamp(3rem,1rem_+_7.5vw,6rem)]
                xl:leading-[1.1] xl:tracking-tight
              "
            >
              <span className="xl:block">MY</span>{" "}
              <span className="xl:block">LAB</span>
            </h2>

            <p className="hidden xl:block xl:mt-5 xl:max-w-xs xl:text-xl xl:font-semibold xl:leading-snug">
              How I build, from the first conversation to launch.
            </p>
          </div>

          {/* Process cards */}
          <div className="grid grid-cols-6 gap-4 xl:order-1 xl:grid-cols-3 xl:gap-5">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="
                  relative border rounded-xl min-h-[400px] flex overflow-hidden
                  xl:min-h-[260px] xl:rounded-2xl xl:border-black
                "
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-3 bg-black xl:hidden"
                />

                {/* Existing vertical label */}
                <div className="w-full flex items-center justify-center xl:hidden">
                  <h3 className="text-4xl font-bold [writing-mode:vertical-rl] rotate-180">
                    {step.title}
                  </h3>
                </div>

                {/* Desktop card */}
                <div className="hidden xl:flex xl:min-w-0 xl:flex-1 xl:flex-col">
                  <div className="relative isolate flex flex-1 flex-col justify-center bg-white px-5 py-6 text-black">
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none absolute right-3 top-2
                        select-none text-[4.75rem] font-bold leading-none
                        tracking-tight tabular-nums text-transparent
                        [-webkit-text-stroke:1px_#d4d4d4]
                        [mask-image:linear-gradient(to_right,transparent,black_40%)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="relative">
                      <h3 className="text-2xl font-bold leading-tight">
                        {step.title}
                      </h3>

                      <ul className="mt-2 space-y-1 text-sm leading-snug">
                        {step.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lower panel */}
                  <div
                    aria-hidden="true"
                    className="h-[116px] shrink-0 border-t border-black/20 bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process