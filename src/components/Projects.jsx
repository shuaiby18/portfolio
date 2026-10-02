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
    <section id="projects" className="py-20">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <h2 className="text-8xl font-bold text-center mb-16">
          SELECTED PROJECTS
        </h2>

        <div className="flex flex-col gap-24">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid grid-cols-2 gap-16 items-center"
            >

              {/* Project visual */}
              <div
                className={`border rounded-xl h-[300px] flex items-center justify-center ${
                  index % 2 === 1 ? "order-2" : ""
                }`}
              >
                <div className="text-center font-semibold">
                  <p>&lt;Video Animation&gt;</p>
                  <p>&lt;Pictures&gt;</p>
                  <p>&lt;3D Parallax&gt;</p>
                </div>
              </div>

              {/* Project information */}
              <div className={index % 2 === 1 ? "order-1" : ""}>

                <h3 className="text-5xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-lg mb-8">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex gap-4 flex-wrap mb-5">

                  {project.tech.map((technology) => (
                    <div
                      key={technology}
                      className="w-20 h-20 border rounded-full flex items-center justify-center text-xs text-center"
                    >
                      {technology}
                    </div>
                  ))}

                </div>

                <button className="border px-5 py-2 rounded">
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

export default Projects