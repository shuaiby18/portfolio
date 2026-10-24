
const services = [
  {
    number: "1",
    title: "Full-Stack Web Development",
    categories: ["Websites", "Web Apps", "Scalable Solutions"],
    description:
      "Modern, responsive web applications built around your needs.",
    features: [
      "Custom Web Applications",
      "Responsive & Accessible Design",
      "Scalable Backend Systems",
    ],
  },
  {
    number: "2",
    title: "Internal Business Tools",
    categories: ["Automation", "Workflow Tools", "Internal Systems"],
    description:
      "Custom software that simplifies operations and automates workflows.",
    features: [
      "Process Automation",
      "Team Collaboration Tools",
      "Data Management & Dashboards",
    ],
  },
  {
    number: "3",
    title: "AI Integration",
    categories: ["AI Features", "API Integration", "Smart Solutions"],
    description:
      "Intelligent features that enhance existing applications and processes.",
    features: [
      "AI-Powered Features",
      "API Integration",
      "Custom AI Solutions",
    ],
  },
]

function Services() {
  return (
    <section id="services" className="py-20">

      {/* Section container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Main layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,2.3fr)] gap-10 xl:gap-8 items-center">

          {/* Left side - Section introduction */}
          <div className="min-w-0">

            {/* What I Offer */}
            <div className="mb-8">
              <div className="w-36 h-px bg-black mb-3"></div>

              <p className="text-xl font-semibold">
                WHAT I IMPLEMENT
              </p>
            </div>

            {/* Section heading */}
            <h2 className="text-[clamp(3rem,1rem_+_7.5vw,6rem)] leading-[1.1] font-bold tracking-tight mb-6">
              <span className="block">
                MY
              </span>

              <span className="block">
                SERVICE
              </span>

            </h2>

            {/* Section description */}
            <p className="text-xl font-semibold max-w-md leading-snug">
              Combining Development, Automation, and AI to create meaningful solutions.
            </p>

          </div>

          {/* Right side - Services cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

            {services.map((service) => (

              <div
                key={service.number}
                className="min-w-0 border rounded-xl min-h-[540px] p-5 flex flex-col"
              >

                {/* Card header */}
                <div className="flex items-start justify-between gap-3">

                  {/* Service number */}
                  <div className="shrink-0 border rounded-lg w-11 h-11 flex items-center justify-center">
                    <span className="text-xl font-bold">
                      {service.number}
                    </span>
                  </div>

                  {/* Service categories */}
                  <div className="text-right text-sm leading-tight">

                    {service.categories.map((category) => (
                      <p key={category}>
                        {category}
                      </p>
                    ))}

                  </div>

                </div>

                {/* Animation / 3D visual */}
                <div className="flex-1 min-h-[160px] flex items-center justify-center">

                  <div className="text-center font-medium text-base">
                    <p>&lt;Animation&gt;</p>
                    <p>&lt;Logo / 3D Visual&gt;</p>
                  </div>

                </div>

                {/* Card content */}
                <div className="mt-auto">

                  {/* Service title */}
                  <h3 className="text-xl font-bold leading-tight min-h-[52px] mb-2">
                    {service.title}
                  </h3>

                  {/* Service description */}
                  <p className="text-sm leading-snug mb-3 min-h-[54px]">
                    {service.description}
                  </p>

                  {/* Service features */}
                  <div className="flex flex-col gap-2 min-h-[80px]">
                    {service.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-start gap-2"
                      >

                        {/* Icon placeholder */}
                        <span
                          aria-hidden="true"
                          className="shrink-0 w-4 h-4 border rounded-sm mt-0.5"
                        ></span>

                        <span className="text-xs leading-snug">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services
