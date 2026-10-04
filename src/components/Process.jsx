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
    points: ["Frontend Development", "Backend Development", "Database & Integration"],
  },
  {
    title: "TEST",
    points: ["Functionality Testing", "Responsive Testing", "Performance & Usability"],
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

        <h2 className="text-8xl font-bold text-center mb-16">
          MY PROCESS
        </h2>

        <div className="grid grid-cols-6 gap-4">

          {processSteps.map((step) => (
            <div
              key={step.title}
              className="border rounded-xl min-h-[420px] flex overflow-hidden"
            >

              {/* Collapsed vertical label */}
              <div className="w-full flex items-center justify-center">

                <h3 className="text-4xl font-bold [writing-mode:vertical-rl] rotate-180">
                  {step.title}
                </h3>

              </div>

              {/* Expanded content - hidden for now */}
              <div className="hidden flex-1 p-6 flex-col">

                <h3 className="text-[28px] font-bold text-center mb-6">
                  {step.title}
                </h3>

                {/* Future parallax / animated visual */}
                <div className="flex-1 flex items-center justify-center">
                  <p className="text-center font-semibold">
                    &lt;Parallax Background&gt;
                  </p>
                </div>

                {/* Process details */}
                <div className="text-center mt-6">
                  {step.points.map((point) => (
                    <p key={point}>
                      {point}
                    </p>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Process