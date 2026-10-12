
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
        <h2 className="text-5xl min-[700px]:text-6xl md:text-6xl min-[900px]:text-7xl lg:text-8xl font-bold text-center mb-10 lg:mb-16">
          <span className="inline-block text-left min-[600px]:text-center min-[600px]:whitespace-nowrap lg:whitespace-normal">
            <span className="block min-[600px]:inline">
              SELECTED
            </span>
            <span className="block pl-8 min-[600px]:inline min-[600px]:pl-0 min-[600px]:ml-3 lg:ml-4">
              PROJECTS
            </span>
          </span>
        </h2>

        {/* Project list */}
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-16 items-stretch md:items-center border md:border-0 rounded-xl md:rounded-none p-4 sm:p-6 md:p-0 min-h-[420px] md:min-h-0"
            >

              {/* Project visual */}
              <div
                className={`order-2 ${
                  index % 2 === 1 ? "md:order-2" : "md:order-1"
                } rounded-xl md:border min-h-[210px] md:min-h-0 md:h-[250px] lg:h-[300px] flex flex-col items-center justify-center`}
              >

                {/* Media placeholder */}
                <div className="flex-1 w-full flex items-center justify-center">
                  <div className="text-center font-semibold text-sm lg:text-base">
                    <p>&lt;Video Animation&gt;</p>
                    <p>&lt;Pictures&gt;</p>
                    <p>&lt;3D Parallax&gt;</p>
                  </div>
                </div>

                {/* Carousel indicators */}
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center gap-1 mb-3 md:mb-10"
                >
                  <span className="w-7 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </div>

              </div>

              {/* Project information */}
              <div
                className={`contents md:block ${
                  index % 2 === 1 ? "md:order-1" : "md:order-2"
                }`}
              >

                {/* Title and description */}
                <div className="order-1 md:order-none">

                  <h3 className="text-3xl sm:text-4xl md:text-3xl min-[900px]:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-sm min-[900px]:text-base lg:text-lg italic md:not-italic mb-0 md:mb-6 lg:mb-8">
                    {project.description}
                  </p>

                </div>

                {/* Tech stack and View More */}
                <div className="order-3 md:order-none flex items-end justify-between gap-2 md:block">

                  {/* Tech stack */}
                  <div className="grid grid-cols-5 flex-1 min-w-0 gap-1 md:flex md:flex-nowrap md:gap-1 md:mb-5 lg:gap-2 xl:gap-4">
                    {project.tech.map((technology) => (
                      <div
                        key={technology}
                        title={technology}
                        aria-label={technology}
                        className="min-w-0 flex-1 aspect-square sm:max-w-[80px] md:max-w-16 lg:max-w-[72px] xl:max-w-20 border rounded-full flex items-center justify-center text-xs text-center"
                      >
                        <span className="block w-full px-0.5 text-[9px] leading-tight break-normal md:text-xs">
                          {technology}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* View More button */}
                  <button
                    type="button"
                    className="shrink-0 border px-3 lg:px-5 py-2 rounded text-xs sm:text-xs md:text-sm lg:text-base italic md:not-italic"
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
