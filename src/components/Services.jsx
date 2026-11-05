import { useState } from "react"

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

const mobileServices = [
  {
    titleLines: ["FULL", "STACK", "WEB DEV"],
    description:
      "Beautiful, high-performance websites and web apps built for impact.",
    features: [
      "Custom Web Applications",
      "Responsive Design",
      "Scalable Backend",
    ],
  },
  {
    titleLines: ["Tools"],
    description:
      "Custom software that simplifies operations and automates workflows.",
    features: [
      "Process Automation",
      "Team Collaboration",
      "Data Management",
    ],
  },
  {
    titleLines: ["AI"],
    description:
      "Intelligent features that enhance your applications and processes.",
    features: [
      "AI-Powered Features",
      "API Integration",
      "Custom AI Solutions",
    ],
  },
]

function Services() {
  const [activeService, setActiveService] = useState(0)
  const selectedMobileService = mobileServices[activeService]

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
            <div
              className="
                min-w-0 grid grid-cols-[auto_minmax(0,1fr)]
                items-center gap-x-4 gap-y-2
                min-[800px]:block
              "
            >

              {/* Section label */}
              <div
                className="
                  order-2 min-w-0 w-fit max-w-full text-right
                  self-end min-[550px]:self-center min-[800px]:self-auto
                  justify-self-end min-[800px]:justify-self-start
                  min-[800px]:mb-8 min-[800px]:text-left
                "
              >
                <div className="w-full h-px bg-black mb-1 min-[800px]:mb-3"></div>

                <p className="text-[clamp(0.75rem,0.70rem_+_1vw,2rem)] font-semibold leading-tight">
                  THE SERVICE IMPLEMENTATION
                </p>
              </div>

              {/* Section heading */}
              <h2
                className="
                  order-1 whitespace-nowrap
                  text-[clamp(3rem,1rem_+_7.5vw,6rem)]
                  leading-[1.1] font-bold tracking-tight
                  min-[800px]:whitespace-normal
                  min-[800px]:mb-6
                "
              >
                <span className="inline min-[800px]:block">
                  MY
                </span>
                {" "}
                <span className="inline min-[800px]:block">
                  AIM
                </span>
              </h2>

              {/* Section description */}
              <p
                className="
                  order-3 col-span-2
                  text-[clamp(13px,2.5vw,16px)] leading-snug
                  min-[800px]:text-xl min-[800px]:font-semibold
                  min-[800px]:max-w-md
                "
              >
                Combining Development, Automation, and AI to create meaningful
                solutions.
              </p>

            </div>

            {/* Mobile services */}
            <div className="min-w-0 min-[800px]:hidden">

              {/* Service selection panels */}
              <div
                role="group"
                aria-label="Choose a service"
                className="flex gap-2 h-[clamp(300px,42svh,360px)]"
              >
                {services.map((service, index) => {
                  const isActive = activeService === index

                  return (
                    <button
                      key={service.number}
                      type="button"
                      id={`mobile-service-button-${index}`}
                      aria-label={service.title}
                      aria-pressed={isActive}
                      aria-controls="mobile-service-details"
                      onClick={() => setActiveService(index)}
                      style={{
                        flexGrow: isActive ? 1.7 : 1,
                      }}
                      className="
                        relative isolate min-w-0 basis-0
                        overflow-hidden border border-black rounded-2xl
                        bg-white text-black text-left
                        cursor-pointer
                      "
                    >

                      {/* Full-card visual placeholder */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none absolute inset-0 z-0
                          flex items-center justify-center
                        "
                      >
                        <span className="px-2 text-center text-[clamp(8px,2vw,11px)] leading-tight">
                          <span className="block">
                            &lt;3D Element&gt;
                          </span>
                          <span className="block">
                            &lt;Animation&gt;
                          </span>
                        </span>
                      </span>

                      {/* Number and title */}
                      <span className="absolute top-3 left-2 right-2 z-10 min-[400px]:left-3 min-[400px]:right-3">
                        <span
                          className={`block font-bold leading-none mb-1 ${isActive
                              ? "text-[clamp(30px,8vw,48px)]"
                              : "text-[clamp(24px,6vw,36px)]"
                            }`}
                        >
                          0{service.number}
                        </span>

                        <span
                          className={`block font-bold leading-[1.1] ${isActive
                              ? "text-[clamp(18px,5vw,32px)]"
                              : "text-[clamp(16px,4vw,28px)]"
                            }`}
                        >
                          {mobileServices[index].titleLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </span>
                      </span>

                    </button>
                  )
                })}
              </div>

              {/* Shared details for the selected service */}
              <div
                id="mobile-service-details"
                role="region"
                aria-labelledby={`mobile-service-button-${activeService}`}
                aria-live="polite"
                aria-atomic="true"
                className="mt-5"
              >

                {/* Selected service description */}
                <p className="text-[clamp(13px,2.5vw,16px)] leading-snug">
                  {selectedMobileService.description}
                </p>

                {/* Selected service features */}
                <div className="grid grid-cols-3 gap-3 mt-5">
                  {selectedMobileService.features.map((feature) => (
                    <div
                      key={feature}
                      className="min-w-0 flex flex-col items-center gap-2 text-center"
                    >

                      {/* Icon placeholder */}
                      <span
                        aria-hidden="true"
                        className="
                          w-9 h-9 shrink-0 border rounded-full
                          flex items-center justify-center
                        "
                      >
                        <span className="w-4 h-4 border rounded-sm"></span>
                      </span>

                      <span className="text-[clamp(13px,2.5vw,16px)] leading-snug">
                        {feature}
                      </span>

                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Tablet services */}
            <div
              role="group"
              aria-label="Choose a service"
              className="
                hidden min-w-0 gap-3 items-stretch
                min-[800px]:flex
                min-[800px]:@min-[956px]/services:hidden
              "
            >
              {services.map((service, index) => {
                const isActive = activeService === index

                return (
                  <div
                    key={service.number}
                    style={{
                      flexGrow: isActive ? 2.5 : 1,
                    }}
                    className="
                      relative isolate min-w-0 basis-0
                      min-h-[540px] border rounded-xl
                      flex flex-col
                    "
                  >

                    {/* Active service */}
                    {isActive ? (
                      <>
                        <div
                          className="
                            relative z-10 flex items-start
                            justify-between gap-2 p-3
                          "
                        >

                          {/* Service number */}
                          <div className="shrink-0 border rounded-lg w-9 h-9 flex items-center justify-center">
                            <span className="text-lg font-bold">
                              {service.number}
                            </span>
                          </div>

                          {/* Service categories */}
                          <div className="min-w-0 text-right text-[clamp(10px,1vw,12px)] leading-tight">
                            {service.categories.map((category) => (
                              <p key={category}>
                                {category}
                              </p>
                            ))}
                          </div>

                        </div>

                        {/* Selected service details */}
                        <div
                          id={`tablet-service-details-${index}`}
                          className="relative z-10 mt-auto px-3 pb-4 pt-[220px]"
                        >

                          {/* Service title */}
                          <h3 className="text-[clamp(16px,1.6vw,20px)] font-bold leading-tight mb-3">
                            {service.title}
                          </h3>

                          {/* Service description */}
                          <p className="text-[clamp(12px,1.2vw,14px)] leading-snug mb-4">
                            {service.description}
                          </p>

                          {/* Service features */}
                          <div className="flex flex-col gap-2">
                            {service.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2"
                              >

                                {/* Icon placeholder */}
                                <span
                                  aria-hidden="true"
                                  className="shrink-0 w-3 h-3 border rounded-sm mt-0.5"
                                ></span>

                                <span className="text-[clamp(10px,1vw,12px)] leading-snug">
                                  {feature}
                                </span>

                              </div>
                            ))}
                          </div>

                        </div>
                      </>
                    ) : (
                      <button
                        type="button"
                        aria-label={`Show ${service.title}`}
                        onClick={() => setActiveService(index)}
                        className="
                          absolute inset-0 z-20
                          rounded-xl text-left cursor-pointer
                        "
                      >
                        <span className="absolute top-4 left-2 right-2">
                          <span className="block text-[clamp(26px,3vw,36px)] font-bold leading-none mb-2">
                            0{service.number}
                          </span>

                          <span className="block text-[clamp(16px,1.8vw,22px)] font-bold leading-tight">
                            {index === 0
                              ? "Web"
                              : index === 1
                                ? "Tools"
                                : "AI"}
                          </span>
                        </span>
                      </button>
                    )}

                    {/* Aligned visual placeholder */}
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none absolute
                        top-24 inset-x-0 h-40 z-0
                        flex items-center justify-center
                      "
                    >
                      <div className="px-1 text-center text-[clamp(9px,1vw,12px)] leading-tight">
                        <p>&lt;3D Element&gt;</p>
                        <p>&lt;Animation&gt;</p>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* Desktop services */}
            <div
              className="
                hidden grid-cols-3 gap-4
                min-[800px]:@min-[956px]/services:grid
              "
            >
              {services.map((service) => (
                <div
                  key={service.number}
                  className="
                    min-w-0 border rounded-xl
                    h-[540px] min-h-[540px] p-5 flex flex-col
                  "
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
                    <div className="min-w-0 text-right text-sm leading-tight">
                      {service.categories.map((category) => (
                        <p key={category}>
                          {category}
                        </p>
                      ))}
                    </div>

                  </div>

                  {/* Animation / 3D visual placeholder */}
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
      </div>

    </section>
  )
}

export default Services