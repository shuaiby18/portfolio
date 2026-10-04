function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <h2 className="text-8xl font-bold text-center mb-16">
          EXPERIENCE
        </h2>

        {/* Column headings */}
        <div className="grid grid-cols-[1fr_0.45fr_1fr] gap-10 mb-8">
          <h3 className="text-4xl font-bold text-center">
            Software Experience
          </h3>

          <div></div>

          <h3 className="text-4xl font-bold text-center">
            Operations Experience
          </h3>
        </div>

        {/* Experience rows */}
        <div className="relative flex flex-col gap-12">

          {/* Main timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-black"></div>

          {/* ================= CARE2GIVE ROW ================= */}
          <div className="grid grid-cols-[1fr_0.45fr_1fr] gap-10 items-stretch relative">

            {/* Software Card */}
            <div className="border rounded-xl p-6 min-h-[230px] h-full">
              <h4 className="text-xl font-bold">
                Care2Give Platform
              </h4>

              <p className="italic mb-4">
                Full-Stack Web Developer
              </p>

              <ul className="mb-6">
                <li>
                  - Building and maintaining the organization’s web platform
                </li>

                <li>
                  - Working across frontend, backend, and database functionality
                </li>

                <li>
                  - Leading technical implementation and ongoing development
                </li>
              </ul>

              <div className="flex gap-4">
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col items-center bg-white z-10 self-center">
              <div className="w-6 h-6 rounded-full bg-black mb-3"></div>

              <p className="font-bold text-center">
                Care2Give
              </p>

              <p className="font-semibold">
                2025 - 2026
              </p>
            </div>

            {/* Empty Operations Space */}
            <div></div>

          </div>

          {/* ================= ROCKET ROW ================= */}
          <div className="grid grid-cols-[1fr_0.45fr_1fr] gap-10 items-stretch relative">

            {/* Software Card */}
            <div className="border rounded-xl p-6 min-h-[230px] h-full">
              <h4 className="text-xl font-bold">
                Rocket Vendor Management System
              </h4>

              <p className="italic mb-4">
                Full-Stack Web Developer
              </p>

              <ul className="mb-6">
                <li>
                  - Built an internal vendor management platform alongside my
                  Service Coordinator role
                </li>

                <li>
                  - Created vendor onboarding, document tracking, coverage
                  mapping, and dashboard features
                </li>

                <li>
                  - Used React, Firebase, Node/Express, and related tools
                </li>
              </ul>

              <div className="flex gap-4">
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col items-center bg-white z-10 self-center">
              <div className="w-6 h-6 rounded-full bg-black mb-3"></div>

              <p className="font-bold text-center">
                Rocket Facility Services
              </p>

              <p className="font-semibold">
                2024 - 2025
              </p>
            </div>

            {/* Operations Card */}
            <div className="border rounded-xl p-6 min-h-[230px] h-full">
              <h4 className="text-xl font-bold mb-4">
                Operations Facility Service Coordinator
              </h4>

              <ul>
                <li>
                  - Managed high-volume facilities work orders across multiple
                  client locations
                </li>

                <li>
                  - Coordinated vendors, quotes, approvals, PM programs, and
                  billing workflows
                </li>

                <li>
                  - Worked directly with the business processes that inspired
                  the VMS
                </li>
              </ul>
            </div>

          </div>

          {/* ================= PROVINCIAL ROW ================= */}
          <div className="grid grid-cols-[1fr_0.45fr_1fr] gap-10 items-stretch relative">

            {/* Software Card */}
            <div className="border rounded-xl p-6 min-h-[230px] h-full">
              <h4 className="text-xl font-bold">
                SnapSheets
              </h4>

              <p className="italic mb-4">
                Full-Stack Web Developer
              </p>

              <ul className="mb-6">
                <li>
                  - Built an internal Chrome extension to improve team workflow
                </li>

                <li>
                  - Developed the tool with HTML, CSS, and JavaScript
                </li>

                <li>
                  - Designed it around real operational needs from the team
                </li>
              </ul>

              <div className="flex gap-4">
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
                <div className="w-14 h-14 border rounded-full"></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col items-center bg-white z-10 self-center">
              <div className="w-6 h-6 rounded-full bg-black mb-3"></div>

              <p className="font-bold text-center">
                Provincial Smart Home Services
              </p>

              <p className="font-semibold">
                2022 - 2024
              </p>
            </div>

            {/* Operations Card */}
            <div className="border rounded-xl p-6 min-h-[230px] h-full">
              <h4 className="text-xl font-bold mb-4">
                Client Relations Specialist
              </h4>

              <ul>
                <li>
                  - Managed customer communication and service-related
                  documentation
                </li>

                <li>
                  - Coordinated internal follow-up and issue resolution
                </li>

                <li>
                  - Identified workflow problems that could be improved through
                  software
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience