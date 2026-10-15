
function Experience() {
  return (
    <section id="experience" className="py-20">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section heading */}
        <h2 className="text-5xl lg:text-8xl font-bold text-center mb-4 lg:mb-16">
          EXPERIENCE
        </h2>

        {/* Mobile subtitle */}
        <p className="text-center text-sm sm:text-base mb-12 lg:hidden">
          A journey through software & operations
        </p>

        {/* Desktop column headings */}
        <div className="hidden lg:grid grid-cols-[1fr_0.45fr_1fr] gap-10 mb-8">

          <h3 className="text-4xl font-bold text-center">
            Software Experience
          </h3>

          <div></div>

          <h3 className="text-4xl font-bold text-center">
            Operations Experience
          </h3>

        </div>

        {/* Experience rows */}
        <div className="relative flex flex-col gap-10 lg:gap-12">

          {/* Main timeline line */}
          <div className="absolute left-[10px] lg:left-1/2 -translate-x-1/2 top-2 bottom-0 w-[2px] bg-black"></div>

          {/* ================= CARE2GIVE ROW ================= */}
          <div className="relative grid grid-cols-[20px_minmax(0,1fr)] lg:grid-cols-[1fr_0.45fr_1fr] gap-x-4 gap-y-4 lg:gap-10 items-start lg:items-stretch">

            {/* Software Card */}
            <div className="order-2 col-start-2 lg:order-1 lg:col-start-1 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 lg:hidden">
                <span className="font-mono font-bold">
                  {"</>"}
                </span>
                <p className="font-semibold">
                  Software Development
                </p>
              </div>

              <h4 className="text-xl font-bold">
                Care2Give Platform
              </h4>

              <p className="italic mb-4">
                Full-Stack Web Developer
              </p>

              {/* Experience highlights */}
              <ul className="mb-4 space-y-1">

                <li className="border-l-[4px] border-black pl-2">
                  Building and maintaining the organization’s web platform
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Working across frontend, backend, and database functionality
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Leading technical implementation and ongoing development
                </li>

              </ul>

              {/* Technology circles */}
              <div className="ml-2 lg:ml-0 flex gap-1 sm:gap-3 lg:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    React
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    JavaScript
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Node.js
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Firebase
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    CSS
                  </span>
                </div>

              </div>

            </div>

            {/* Timeline */}
            <div className="relative z-10 order-1 col-span-2 grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 items-start lg:order-2 lg:col-span-1 lg:col-start-2 lg:flex lg:flex-col lg:items-center lg:self-center lg:bg-white">

              {/* Timeline dot */}
              <div className="w-5 h-5 mt-1.5 lg:mt-0 lg:w-6 lg:h-6 rounded-full bg-black lg:mb-3"></div>

              {/* Company and date */}
              <div className="flex flex-col items-start gap-1 lg:items-center">

                <p className="font-bold text-lg lg:text-center">
                  Care2Give Charity Foundation
                </p>

                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  2025 - 2026
                </p>

              </div>

            </div>

            {/* Empty Operations Space - Desktop */}
            <div className="hidden lg:block lg:col-start-3"></div>

          </div>

          {/* ================= ROCKET ROW ================= */}
          <div className="relative grid grid-cols-[20px_minmax(0,1fr)] lg:grid-cols-[1fr_0.45fr_1fr] gap-x-4 gap-y-4 lg:gap-10 items-start lg:items-stretch">

            {/* Software Card */}
            <div className="order-2 col-start-2 lg:order-1 lg:col-start-1 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 lg:hidden">
                <span className="font-mono font-bold">
                  {"</>"}
                </span>
                <p className="font-semibold">
                  Software Development
                </p>
              </div>

              <h4 className="text-xl font-bold">
                Rocket Vendor Management System
              </h4>

              <p className="italic mb-4">
                Full-Stack Web Developer
              </p>

              {/* Experience highlights */}
              <ul className="mb-4 space-y-1">

                <li className="border-l-[4px] border-black pl-2">
                  Built an internal vendor management platform alongside my
                  Service Coordinator role
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Created vendor onboarding, document tracking, coverage
                  mapping, and dashboard features
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Used React, Firebase, Node/Express, and related tools
                </li>

              </ul>

              {/* Technology circles */}
              <div className="ml-2 lg:ml-0 flex gap-1 sm:gap-3 lg:gap-4">

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    React
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Firebase
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Node.js
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Express
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Firestore
                  </span>
                </div>

              </div>

            </div>

            {/* Timeline */}
            <div className="relative z-10 order-1 col-span-2 grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 items-start lg:order-2 lg:col-span-1 lg:col-start-2 lg:flex lg:flex-col lg:items-center lg:self-center lg:bg-white">

              {/* Timeline dot */}
              <div className="w-5 h-5 mt-1.5 lg:mt-0 lg:w-6 lg:h-6 rounded-full bg-black lg:mb-3"></div>

              {/* Company and date */}
              <div className="flex flex-col items-start gap-1 lg:items-center">

                <p className="font-bold text-lg lg:text-center">
                  Rocket Facility Services
                </p>

                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  2024 - 2025
                </p>

              </div>

            </div>

            {/* Operations Card */}
            <div className="order-3 col-start-2 lg:col-start-3 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 lg:hidden">
                <span aria-hidden="true">▣</span>
                <p className="font-semibold">
                  Operations Experience
                </p>
              </div>

              <h4 className="text-xl font-bold mb-4">
                Operations Facility Service Coordinator
              </h4>

              {/* Experience highlights */}
              <ul className="space-y-1">

                <li className="border-l-[4px] border-black pl-2">
                  Managed high-volume facilities work orders across multiple
                  client locations
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Coordinated vendors, quotes, approvals, PM programs, and
                  billing workflows
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Worked directly with the business processes that inspired
                  the VMS
                </li>

              </ul>

            </div>

          </div>

          {/* ================= PROVINCIAL ROW ================= */}
          <div className="relative grid grid-cols-[20px_minmax(0,1fr)] lg:grid-cols-[1fr_0.45fr_1fr] gap-x-4 gap-y-4 lg:gap-10 items-start lg:items-stretch">

            {/* Software Card */}
            <div className="order-2 col-start-2 lg:order-1 lg:col-start-1 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 lg:hidden">
                <span className="font-mono font-bold">
                  {"</>"}
                </span>
                <p className="font-semibold">
                  Software Development
                </p>
              </div>

              <h4 className="text-xl font-bold">
                SnapSheets
              </h4>

              <p className="italic mb-4">
                Full-Stack Web Developer
              </p>

              {/* Experience highlights */}
              <ul className="mb-4 space-y-1">

                <li className="border-l-[4px] border-black pl-2">
                  Built an internal Chrome extension to improve team workflow
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Developed the tool with HTML, CSS, and JavaScript
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Designed it around real operational needs from the team
                </li>

              </ul>

              {/* Technology circles */}
              <div className="ml-2 lg:ml-0 flex gap-1 sm:gap-3 lg:gap-4">

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    JavaScript
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    HTML
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    CSS
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] lg:text-xs leading-tight text-center break-normal">
                    Chrome API
                  </span>
                </div>

              </div>

            </div>

            {/* Timeline */}
            <div className="relative z-10 order-1 col-span-2 grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 items-start lg:order-2 lg:col-span-1 lg:col-start-2 lg:flex lg:flex-col lg:items-center lg:self-center lg:bg-white">

              {/* Timeline dot */}
              <div className="w-5 h-5 mt-1.5 lg:mt-0 lg:w-6 lg:h-6 rounded-full bg-black lg:mb-3"></div>

              {/* Company and date */}
              <div className="flex flex-col items-start gap-1 lg:items-center">

                <p className="font-bold text-lg lg:text-center">
                  Provincial Smart Home Services
                </p>

                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  2022 - 2024
                </p>

              </div>

            </div>

            {/* Operations Card */}
            <div className="order-3 col-start-2 lg:col-start-3 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 lg:hidden">
                <span aria-hidden="true">▣</span>
                <p className="font-semibold">
                  Operations Experience
                </p>
              </div>

              <h4 className="text-xl font-bold mb-4">
                Client Relations Specialist
              </h4>

              {/* Experience highlights */}
              <ul className="space-y-1">

                <li className="border-l-[4px] border-black pl-2">
                  Managed customer communication and service-related
                  documentation
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Coordinated internal follow-up and issue resolution
                </li>

                <li className="border-l-[4px] border-black pl-2">
                  Identified workflow problems that could be improved through
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
