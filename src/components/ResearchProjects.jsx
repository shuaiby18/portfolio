
const researchProjects = [
  {
    title: "Font-Fusion Chrome Extension for Digital Literacy",
    description:
      "Exploring how typography and browser tools can support digital literacy and readability.",
    tags: ["Research", "Accessibility", "Chrome Extension"],
  },
  {
    title: "Analysis of Mobile Gaming Controller Schemes",
    description:
      "Investigating how different mobile control schemes and UI designs affect user performance, usability, and interaction efficiency.",
    tags: ["HCI", "UI/UX", "Mobile Gaming", "Usability Research"],
  },
]

function ResearchProjects() {
  return (
    <section id="research" className="py-12">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section heading */}
        <h2 className="text-[clamp(3rem,1rem_+_7.5vw,6rem)] leading-none font-bold text-center mb-8 lg:mb-10">
          RESEARCH PROJECTS
        </h2>

        {/* Research projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-6 lg:gap-8 items-stretch">

          {researchProjects.map((project) => (
            <div
              key={project.title}
              className="min-w-0 h-full border rounded-xl p-5 sm:p-6 lg:p-7 min-h-[380px] lg:min-h-[450px] flex flex-col"
            >

{/* Research title */}
<h3 className="text-xl md:text-2xl lg:text-[22px] leading-tight font-bold text-left lg:min-h-[56px]">
  {project.title}
</h3>

              {/* Research animation / video carousel */}
              <div className="relative flex-1 min-h-[200px] lg:min-h-[220px] mt-4 mb-4 border rounded-lg bg-gray-50">

                {/* Carousel media area */}
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* Future images / video animations go here */}

                </div>

                {/* Research description - inside carousel */}
                <p className="absolute z-10 inset-x-4 bottom-9 lg:bottom-10 text-sm md:text-base lg:text-lg">
                  {project.description}
                </p>

                {/* Carousel indicators */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1"
                >
                  <span className="w-7 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </div>

              </div>

              {/* Research tags and View More */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">

                {/* Research tags */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs lg:text-sm"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* View More */}
                <button
                  type="button"
                  className="shrink-0 border px-4 py-2 rounded text-sm"
                >
                  View More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default ResearchProjects
