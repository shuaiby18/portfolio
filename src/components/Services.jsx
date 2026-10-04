function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <h2 className="text-8xl font-bold text-center mb-16">
          MY SERVICES
        </h2>

        <div className="grid grid-cols-3 gap-10">

          {/* Full-Stack Web Development */}
          <div className="border rounded-xl min-h-[420px] p-8 flex flex-col">

            {/* Animation / Logo Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center font-semibold">
                <p>&lt;Animation&gt;</p>
                <p>&lt;Logo / 3D Visual&gt;</p>
              </div>
            </div>

            <h3 className="text-[28px] font-bold text-center mb-4">
              Full-Stack Web Development
            </h3>

          </div>

          {/* Internal Business Tools */}
          <div className="border rounded-xl min-h-[420px] p-8 flex flex-col">

            {/* Animation / Logo Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center font-semibold">
                <p>&lt;Animation&gt;</p>
                <p>&lt;Logo / 3D Visual&gt;</p>
              </div>
            </div>

            <h3 className="text-[28px] font-bold text-center mb-4">
              Internal Business Tools
            </h3>

          </div>

          {/* AI Integration */}
          <div className="border rounded-xl min-h-[420px] p-8 flex flex-col">

            {/* Animation / Logo Placeholder */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center font-semibold">
                <p>&lt;Animation&gt;</p>
                <p>&lt;Logo / 3D Visual&gt;</p>
              </div>
            </div>

            <h3 className="text-[28px] font-bold text-center mb-4">
              AI Integration
            </h3>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Services