
function Experience() {
  return (
    <section id="experience" className="py-20">

      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Section heading */}
        <h2 className="text-[clamp(3rem,1rem_+_7.5vw,6rem)] leading-none font-bold text-center mb-3 lg:mb-3">
          EXPERIENCE
        </h2>


        {/* Subtitle */}
        <p className="text-center text-[clamp(0.9375rem,0.125rem_+_2.15vw,1.5rem)] mb-10 lg:mb-8">
          A journey through software & operations
        </p>

        {/* Desktop / Tablet column headings */}
        <div className="hidden min-[800px]:grid grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)_minmax(0,1fr)] gap-4 lg:gap-10 min-[800px]:mb-4 lg:-mb-2">

          <h3 className="text-[clamp(22px,2.6vw,36px)] font-bold flex items-center justify-center gap-2 lg:gap-3 whitespace-nowrap">
            <span className="font-mono font-bold">
              {"</>"}
            </span>
            Software Experience
          </h3>

          <div></div>

          <h3 className="text-[clamp(22px,2.6vw,36px)] font-bold flex items-center justify-center gap-2 lg:gap-3 whitespace-nowrap">
            <span aria-hidden="true">▣</span>
            Operations Experience
          </h3>

        </div>

        {/* Experience rows */}
        <div className="relative flex flex-col gap-10 lg:gap-12">

          {/* Main timeline line */}
          <div className="absolute left-[10px] min-[800px]:left-1/2 -translate-x-1/2 top-2 min-[800px]:top-13 bottom-2 w-[5px] bg-black"></div>

          {/* ================= CARE2GIVE ROW ================= */}
          <div className="relative grid grid-cols-[20px_minmax(0,1fr)] min-[800px]:grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)_minmax(0,1fr)] gap-x-4 gap-y-4 lg:gap-10 items-start min-[800px]:items-stretch">

            {/* Software Card */}
            <div className="order-2 col-start-2 min-[800px]:order-1 min-[800px]:col-start-1 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full min-[800px]:min-w-0">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 min-[800px]:hidden">
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
              <div className="ml-2 min-[800px]:ml-0 flex gap-1 sm:gap-3 min-[800px]:grid min-[800px]:grid-cols-5 min-[800px]:gap-[clamp(4px,1vw,16px)] min-[800px]:max-w-[344px]">

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    React
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    JavaScript
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Node.js
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Firebase
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    CSS
                  </span>
                </div>

              </div>

            </div>

            {/* Timeline */}
            <div className="relative z-10 order-1 col-span-2 grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 items-start min-[800px]:order-2 min-[800px]:col-span-1 min-[800px]:col-start-2 min-[800px]:flex min-[800px]:flex-col min-[800px]:items-center min-[800px]:self-center min-[800px]:bg-white min-[800px]:min-w-0">

              {/* Timeline dot */}
              <div className="w-5 h-5 mt-1.5 min-[800px]:mt-0 min-[800px]:w-6 min-[800px]:h-6 rounded-full bg-black min-[800px]:mb-3"></div>

              {/* Company and date */}
              <div className="flex flex-col items-start gap-1 min-[800px]:items-center">

                <p className="font-bold text-lg min-[800px]:text-center">
                  Care2Give Charity Foundation
                </p>

                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  2025 - 2026
                </p>

              </div>

            </div>

            {/* Empty Operations Space - Desktop */}
            <div className="hidden min-[800px]:block min-[800px]:col-start-3"></div>

          </div>

          {/* ================= ROCKET ROW ================= */}
          <div className="relative grid grid-cols-[20px_minmax(0,1fr)] min-[800px]:grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)_minmax(0,1fr)] gap-x-4 gap-y-4 lg:gap-10 items-start min-[800px]:items-stretch">

            {/* Software Card */}
            <div className="order-2 col-start-2 min-[800px]:order-1 min-[800px]:col-start-1 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full min-[800px]:min-w-0">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 min-[800px]:hidden">
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
              <div className="ml-2 min-[800px]:ml-0 flex gap-1 sm:gap-3 min-[800px]:grid min-[800px]:grid-cols-5 min-[800px]:gap-[clamp(4px,1vw,16px)] min-[800px]:max-w-[344px]">

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    React
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Firebase
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Node.js
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Express
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Firestore
                  </span>
                </div>

              </div>

            </div>

            {/* Timeline */}
            <div className="relative z-10 order-1 col-span-2 grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 items-start min-[800px]:order-2 min-[800px]:col-span-1 min-[800px]:col-start-2 min-[800px]:flex min-[800px]:flex-col min-[800px]:items-center min-[800px]:self-center min-[800px]:bg-white min-[800px]:min-w-0">

              {/* Timeline dot */}
              <div className="w-5 h-5 mt-1.5 min-[800px]:mt-0 min-[800px]:w-6 min-[800px]:h-6 rounded-full bg-black min-[800px]:mb-3"></div>

              {/* Company and date */}
              <div className="flex flex-col items-start gap-1 min-[800px]:items-center">

                <p className="font-bold text-lg min-[800px]:text-center">
                  Rocket Facility Services
                </p>

                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  2024 - 2025
                </p>

              </div>

            </div>

            {/* Operations Card */}
            <div className="order-3 col-start-2 min-[800px]:col-start-3 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full min-[800px]:flex min-[800px]:flex-col min-[800px]:min-w-0">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 min-[800px]:hidden">
                <span aria-hidden="true">▣</span>
                <p className="font-semibold">
                  Operations Experience
                </p>
              </div>

              <h4 className="text-xl font-bold mb-4 lg:mb-8">
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

              {/* Operations achievements */}
              <div className="grid grid-cols-3 lg:grid-cols-[max-content_1fr_1fr] gap-0 mt-auto pt-6">

                <div className="text-center border-r border-black px-2">
                  <p className="text-2xl font-bold">120+</p>
                  <p className="text-xs lg:whitespace-nowrap">
                    Concurrent Work Orders
                  </p>
                </div>

                <div className="text-center border-r border-black px-2">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-xs min-[800px]:whitespace-normal lg:whitespace-nowrap">
                    Trades
                  </p>
                </div>

                <div className="text-center px-2">
                  <p className="text-2xl font-bold">300+</p>
                  <p className="text-xs min-[800px]:whitespace-normal lg:whitespace-nowrap">
                    PM Locations
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= PROVINCIAL ROW ================= */}
          <div className="relative grid grid-cols-[20px_minmax(0,1fr)] min-[800px]:grid-cols-[minmax(0,1fr)_minmax(0,0.45fr)_minmax(0,1fr)] gap-x-4 gap-y-4 lg:gap-10 items-start min-[800px]:items-stretch">

            {/* Software Card */}
            <div className="order-2 col-start-2 min-[800px]:order-1 min-[800px]:col-start-1 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full min-[800px]:min-w-0">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 min-[800px]:hidden">
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
              <div className="ml-2 min-[800px]:ml-0 flex gap-1 sm:gap-3 min-[800px]:grid min-[800px]:grid-cols-4 min-[800px]:gap-[clamp(4px,1vw,16px)] min-[800px]:max-w-[272px]">

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    JavaScript
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    HTML
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    CSS
                  </span>
                </div>

                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[800px]:w-full min-[800px]:h-auto min-[800px]:max-w-[56px] min-[800px]:aspect-square min-[800px]:min-w-0 shrink-0 border rounded-full flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px] min-[800px]:text-[clamp(7px,0.94vw,12px)] lg:text-[clamp(9px,0.94vw,12px)] leading-tight text-center break-normal min-[800px]:break-words">
                    Chrome API
                  </span>
                </div>

              </div>

            </div>

            {/* Timeline */}
            <div className="relative z-10 order-1 col-span-2 grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 items-start min-[800px]:order-2 min-[800px]:col-span-1 min-[800px]:col-start-2 min-[800px]:flex min-[800px]:flex-col min-[800px]:items-center min-[800px]:self-center min-[800px]:bg-white min-[800px]:min-w-0">

              {/* Timeline dot */}
              <div className="w-5 h-5 mt-1.5 min-[800px]:mt-0 min-[800px]:w-6 min-[800px]:h-6 rounded-full bg-black min-[800px]:mb-3"></div>

              {/* Company and date */}
              <div className="flex flex-col items-start gap-1 min-[800px]:items-center">

                <p className="font-bold text-lg min-[800px]:text-center">
                  Provincial Smart Home Services
                </p>

                <p className="font-semibold text-sm lg:text-base whitespace-nowrap">
                  2022 - 2024
                </p>

              </div>

            </div>

            {/* Operations Card */}
            <div className="order-3 col-start-2 min-[800px]:col-start-3 border rounded-xl p-4 sm:p-6 min-h-[230px] h-full min-[800px]:flex min-[800px]:flex-col min-[800px]:min-w-0">

              {/* Mobile card category */}
              <div className="flex items-center gap-2 mb-4 min-[800px]:hidden">
                <span aria-hidden="true">▣</span>
                <p className="font-semibold">
                  Operations Experience
                </p>
              </div>

              <h4 className="text-xl font-bold mb-4 lg:mb-8">
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

              {/* Operations achievements */}
              <div className="grid grid-cols-3 gap-0 mt-auto pt-6 min-w-0">

                <div className="min-w-0 text-center border-r border-black px-2">
                  <p className="text-2xl font-bold">30+</p>
                  <p className="text-xs">New Clients / Day</p>
                </div>

                <div className="min-w-0 text-center border-r border-black px-2">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-xs">Loan Applications / Month</p>
                </div>

                <div className="min-w-0 text-center px-2">
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-xs">Technicians Coordinated</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience
