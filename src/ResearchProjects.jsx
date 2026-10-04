function ResearchProjects() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <h2 className="text-8xl font-bold text-center mb-16">
          RESEARCH PROJECTS
        </h2>

        <div className="flex flex-col gap-14">

          {/* Font-Fusion */}
          <div className="flex justify-start">
            <div className="w-[62%] min-h-[360px] border rounded-xl p-8 flex flex-col">

              <h3 className="text-3xl font-bold mb-6">
                Font-Fusion Chrome Extension for Digital Literacy
              </h3>

              <div className="mt-auto">

                <p className="text-lg mb-6">
                  Exploring how typography and browser tools can support digital
                  literacy and readability.
                </p>

                <div className="flex items-center justify-between gap-6">

                  <div className="flex gap-3 flex-wrap">
                    <span className="border rounded-full px-4 py-2 text-sm">
                      Research
                    </span>

                    <span className="border rounded-full px-4 py-2 text-sm">
                      Accessibility
                    </span>

                    <span className="border rounded-full px-4 py-2 text-sm">
                      Chrome Extension
                    </span>
                  </div>

                  <button className="border px-5 py-2 rounded">
                    View More
                  </button>

                </div>

              </div>

            </div>
          </div>


          {/* Mobile Gaming Research */}
          <div className="flex justify-end">
            <div className="w-[62%] min-h-[360px] border rounded-xl p-8 flex flex-col">

              <h3 className="text-3xl font-bold mb-6">
                Analysis of Mobile Gaming Controller Schemes
              </h3>

              <div className="mt-auto">

                <p className="text-lg mb-6">
                  Investigating how different mobile control schemes and UI
                  designs affect user performance, usability, and interaction
                  efficiency.
                </p>

                <div className="flex items-center justify-between gap-6">

                  <div className="flex gap-3 flex-wrap">
                    <span className="border rounded-full px-4 py-2 text-sm">
                      HCI
                    </span>

                    <span className="border rounded-full px-4 py-2 text-sm">
                      UI/UX
                    </span>

                    <span className="border rounded-full px-4 py-2 text-sm">
                      Mobile Gaming
                    </span>

                    <span className="border rounded-full px-4 py-2 text-sm">
                      Usability Research
                    </span>
                  </div>

                  <button className="border px-5 py-2 rounded">
                    View More
                  </button>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ResearchProjects