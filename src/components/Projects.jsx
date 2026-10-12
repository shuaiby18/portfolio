
const projects = [
  {
    title: "Care2Give",
    description:
      "A full-stack platform designed to support Care2Give's digital presence and future organizational workflows.",
    tech: ["React", "JavaScript", "Node.js", "Firebase", "CSS"],
  },
  {
    title: "Rocket VMS",
    description:
      "An internal vendor management system built to streamline vendor onboarding, coverage management, documentation, and operational workflows.",
    tech: ["React", "Firebase", "Node.js", "Express", "Firestore"],
  },
  {
    title: "SnapSheets",
    description:
      "A Chrome extension developed to improve internal workflows and simplify repetitive tasks for the Provincial Smart Home Services team.",
    tech: ["JavaScript", "HTML", "CSS", "Chrome API"],
  },
  {
    title: "FontFusion",
    description:
      "A browser extension developed as part of a digital-literacy research project focused on improving the readability and accessibility of online content.",
    tech: ["JavaScript", "HTML", "CSS", "Chrome API"],
  },
]

function Projects() {
  return (
    <section id="projects">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">


        {/* Section heading */}
        <h2 className="text-5xl lg:text-8xl font-bold text-center mb-10 lg:mb-16">
          <span className="inline-block text-left lg:text-center">
            <span className="block lg:inline">
              SELECTED
            </span>
            <span className="block pl-8 sm:pl-8 lg:inline lg:pl-0 lg:ml-4">
              PROJECTS
            </span>
          </span>
        </h2>

        {/* Project list */}
        <div className="flex flex-col gap-8 lg:gap-24">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-stretch lg:items-center border lg:border-0 rounded-xl lg:rounded-none p-4 sm:p-6 lg:p-0 min-h-[420px] lg:min-h-0"
            >

              {/* Project visual */}
              <div
                className={`order-2 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  } rounded-xl lg:border min-h-[210px] lg:min-h-0 lg:h-[300px] flex flex-col items-center justify-center`}
              >

                {/* Media placeholder */}
                <div className="flex-1 w-full flex items-center justify-center">
                  <div className="text-center font-semibold text-sm lg:text-base">
                    <p>&lt;Video Animation&gt;</p>
                    <p>&lt;Pictures&gt;</p>
                    <p>&lt;3D Parallax&gt;</p>
                  </div>
                </div>

                {/* Mobile carousel indicators */}
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center gap-1 mb-3 lg:hidden"
                >
                  <span className="w-7 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </div>

              </div>

              {/* Project information */}
              <div
                className={`contents lg:block ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
              >

                {/* Title and description */}
                <div className="order-1 lg:order-none">

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 lg:mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-lg italic lg:not-italic mb-0 lg:mb-8">
                    {project.description}
                  </p>

                </div>

                {/* Tech stack and View More */}
                <div className="order-3 lg:order-none flex items-center justify-between gap-2 lg:block">

                  {/* Tech stack */}
                  <div className="flex flex-1 min-w-0 gap-1 lg:gap-4 lg:flex-wrap lg:mb-5">

                    {Array.from({ length: 5 }, (_, techIndex) => {
                      const technology = project.tech[techIndex]

                      return (
                        <div
                          key={techIndex}
                          title={technology || undefined}
                          aria-label={technology || undefined}
                          className={`min-w-0 flex-1 aspect-square lg:flex-none lg:w-20 lg:h-20 border rounded-full flex items-center justify-center text-xs text-center ${!technology ? "lg:hidden" : ""
                            }`}
                        >
                          <span className="hidden lg:inline">
                            {technology}
                          </span>
                        </div>
                      )
                    })}

                  </div>

                  {/* View More button */}
                  <button
                    type="button"
                    className="shrink-0 border px-3 lg:px-5 py-2 rounded text-xs sm:text-sm lg:text-base italic lg:not-italic"
                  >
                    View More
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
