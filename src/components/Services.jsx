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
        <div className="@container/services">

          {/* Main layout */}
          <div
            className="
              grid grid-cols-1 gap-10 items-center
              min-[800px]:grid-cols-[minmax(0,1fr)_minmax(472px,2.3fr)]
              min-[800px]:gap-6
              min-[800px]:@min-[956px]/services:grid-cols-[minmax(216px,1fr)_716px]
            "
          >

            {/* Left side - Section introduction */}
            <div className="min-w-0">

              {/* Section label */}
              <div className="mb-8">
                <div className="w-36 h-px bg-black mb-3"></div>

                <p className="text-xl font-semibold">
                  SSERVICES I PROVIDE
                </p>
              </div>

              {/* Section heading */}
              <h2 className="text-[clamp(3rem,1rem_+_7.5vw,6rem)] leading-[1.1] font-bold tracking-tight mb-6">
                <span className="block">
                  MY
                </span>

                <span className="block">
                  AIM
                </span>
              </h2>

              {/* Section description */}
              <p className="text-xl font-semibold max-w-md leading-snug">
                Combining Development, Automation, and AI to create meaningful
                solutions.
              </p>

            </div>

            {/* Right side - Services cards */}
            <div
              className="
                grid grid-cols-1 gap-4
                min-[800px]:grid-cols-4
                min-[800px]:@min-[956px]/services:grid-cols-3
              "
            >

              {services.map((service) => (
                <div
                  key={service.number}
                  className="
                    min-w-0 border rounded-xl
                    min-h-[540px] p-5 flex flex-col
                    min-[800px]:col-span-2
                    min-[800px]:h-[270px]
                    min-[800px]:min-h-[270px]
                    min-[800px]:last:col-start-2
                    min-[800px]:@min-[956px]/services:col-span-1
                    min-[800px]:@min-[956px]/services:col-start-auto
                    min-[800px]:@min-[956px]/services:last:col-start-auto
                    min-[800px]:@min-[956px]/services:h-[540px]
                    min-[800px]:@min-[956px]/services:min-h-[540px]
                  "
                >

                  {/* Tablet content */}
                  <div
                    className="
                      hidden min-h-0 flex-1 flex-col gap-2
                      min-[800px]:flex
                      min-[800px]:@min-[956px]/services:hidden
                    "
                  >

                    {/* Tablet card header */}
                    <div className="flex shrink-0 items-start justify-between gap-2">

                      {/* Service number */}
                      <div className="shrink-0 border rounded-md w-7 h-7 flex items-center justify-center">
                        <span className="text-[clamp(14px,1vw_+_6px,16px)] font-bold">
                          {service.number}
                        </span>
                      </div>

                      {/* Service categories */}
                      <div className="min-w-0 text-right text-[clamp(10px,1vw_+_2px,12px)] leading-[1.2]">
                        {service.categories.map((category) => (
                          <p key={category}>
                            {category}
                          </p>
                        ))}
                      </div>

                    </div>

                    {/* Tablet animation / 3D visual */}
                    <div className="min-h-0 flex-1 flex items-center justify-center">
                      <div className="text-center font-medium text-[clamp(10px,1vw_+_2px,12px)] leading-[1.2]">
                        <p>&lt;Animation&gt;</p>
                        <p>&lt;Logo / 3D Visual&gt;</p>
                      </div>
                    </div>

                    {/* Tablet card content */}
                    <div className="shrink-0">

                      {/* Service title */}
                      <h3 className="text-[clamp(14px,2vw_-_2px,18px)] font-bold leading-tight mb-1">
                        {service.title}
                      </h3>

                      {/* Service description */}
                      <p className="text-[clamp(11px,1vw_+_3px,13px)] leading-tight mb-1.5">
                        {service.description}
                      </p>

                      {/* Service features */}
                      <div className="flex flex-col gap-1">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-1.5"
                          >

                            {/* Icon placeholder */}
                            <span
                              aria-hidden="true"
                              className="shrink-0 w-2.5 h-2.5 border rounded-sm mt-0.5"
                            ></span>

                            <span className="text-[clamp(10px,1vw_+_2px,12px)] leading-tight">
                              {feature}
                            </span>

                          </div>
                        ))}
                      </div>

                    </div>

                  </div>

                  {/* Original card header */}
                  <div
                    className="
                      flex items-start justify-between gap-3
                      min-[800px]:hidden
                      min-[800px]:@min-[956px]/services:flex
                    "
                  >

                    {/* Service number */}
                    <div className="shrink-0 border rounded-lg w-11 h-11 flex items-center justify-center">
                      <span className="text-xl font-bold">
                        {service.number}
                      </span>
                    </div>

                    {/* Service categories */}
                    <div className="min-w-0 text-right text-sm leading-tight">
                      {service.categories.map((category) => (
                        <p key={category}>
                          {category}
                        </p>
                      ))}
                    </div>

                  </div>

                  {/* Original animation / 3D visual */}
                  <div
                    className="
                      flex-1 min-h-[160px] flex items-center justify-center
                      min-[800px]:hidden
                      min-[800px]:@min-[956px]/services:flex
                    "
                  >
                    <div className="text-center font-medium text-base">
                      <p>&lt;Animation&gt;</p>
                      <p>&lt;Logo / 3D Visual&gt;</p>
                    </div>
                  </div>

                  {/* Original card content */}
                  <div
                    className="
                      mt-auto
                      min-[800px]:hidden
                      min-[800px]:@min-[956px]/services:block
                    "
                  >

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
      </div>
    </section>
  )
}

export default Services