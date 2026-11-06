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
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 @container/process">
        {/* Mobile layout */}
        <div className="min-[800px]:hidden">
          {/* Mobile introduction */}
          <div
            className="
              min-w-0 grid grid-cols-[minmax(0,1fr)_auto] items-center
              max-[360px]:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]
              gap-x-2 min-[384px]:gap-x-4 gap-y-2 mb-8
            "
          >
            <div className="min-w-0 w-fit max-w-full text-left self-end min-[550px]:self-center">
              <div aria-hidden="true" className="w-full h-px bg-black mb-1" />

              <p className="text-[clamp(0.75rem,0.70rem_+_1vw,2rem)] font-semibold leading-tight">
                THE PROCESS VISUALIZATIONS
              </p>
            </div>

            <h2
              className="
                min-w-0 text-right min-[360px]:whitespace-nowrap
                text-[clamp(3rem,1rem_+_7.5vw,6rem)]
                leading-[1.1] font-bold tracking-tight
              "
            >
              MY LAB
            </h2>

            <p className="col-span-2 text-[clamp(13px,2.5vw,16px)] leading-snug">
              How I build, from the first conversation to launch.
            </p>
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

        {/* Tablet and desktop layout */}
        <div
          className="
            hidden min-[800px]:grid
            grid-cols-[minmax(0,2fr)_minmax(0,1fr)]
            items-center gap-6
            min-[800px]:@min-[956px]/process:gap-12
          "
        >
          {/* Section introduction */}
          <div className="order-2">
            <div className="mb-4">
              <div aria-hidden="true" className="w-36 h-px bg-black mb-3" />

              <p className="text-[clamp(0.75rem,0.70rem_+_1vw,2rem)] font-semibold leading-tight">
                THE PROCESS VISUALIZATIONS
              </p>
            </div>

            <h2
              className="
                text-left text-[clamp(3rem,1rem_+_7.5vw,6rem)]
                leading-[1.1] font-bold tracking-tight
              "
            >
              <span className="block">MY LAB</span>{" "}
            </h2>

            <p className="mt-5 max-w-xs text-xl font-semibold leading-snug">
              How I build, from the first conversation to launch.
            </p>
          </div>

          {/* Tablet and desktop process cards */}
          <div
            className="
              order-1 grid grid-cols-3 gap-3
              min-[800px]:@min-[956px]/process:gap-5
            "
          >
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative min-h-[260px] flex overflow-hidden border border-black rounded-2xl"
              >
                <div className="flex min-w-0 flex-1 flex-col">
                  <div
                    className="
                      relative isolate flex flex-1 flex-col justify-center
                      bg-white px-3 py-6 text-black
                      min-[800px]:@min-[956px]/process:px-5
                    "
                  >
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
                      <h3
                        className="
                          text-lg font-bold leading-tight
                          min-[800px]:@min-[956px]/process:text-2xl
                        "
                      >
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