function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-20"
    >
      {/* Standard centered container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-2 items-center gap-16">

          {/* LEFT SIDE */}
          <div>

            {/* Circle / 3D Visual */}
            <div className="flex justify-start">
              <div className="relative w-[480px] h-[480px] ml-12 translate-y-5">

                {/* Circle */}
                <div className="absolute inset-12 rounded-full border border-black flex items-center justify-center">
                  <p className="text-center text-xl font-bold">
                    &lt;3D Parallax Image&gt;
                  </p>
                </div>

                {/* Floating Text */}
                <div className="absolute top-3 -right-4 border px-3 py-2 rounded bg-white whitespace-nowrap">
                  Have a project, opportunity, or idea?
                </div>

                <div className="absolute top-1/2 -left-12 -translate-y-1/2 border px-4 py-2 rounded bg-white whitespace-nowrap">
                  Need tech solutions?
                </div>

                <div className="absolute bottom-4 -right-4 border px-4 py-2 rounded bg-white whitespace-nowrap">
                  Need custom-designed business tools?
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div className="w-[420px] ml-16 flex justify-center gap-4 mt-6">

              <a
                href="https://github.com/shuaiby18"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-5 py-4 rounded-xl"
              >
                GitHub
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-5 py-4 rounded-xl"
              >
                LinkedIn
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-5 py-4 rounded-xl"
              >
                Indeed
              </a>

              <a
                href="https://github.com/shuaiby18"
                target="_blank"
                rel="noopener noreferrer"
                className="border px-5 py-4 rounded-xl"
              >
                Email
              </a>
            </div>



          </div>


          {/* RIGHT SIDE */}
          <div>

            <h2 className="text-7xl font-bold mb-10 whitespace-nowrap">
              GET IN TOUCH!
            </h2>

            <form className="flex flex-col gap-4">

              {/* Name */}
              <div className="grid grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="First Name"
                  className="border rounded-xl px-6 py-3 text-lg"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="border rounded-xl px-6 py-3 text-lg"
                />

              </div>

              {/* Contact */}
              <div className="grid grid-cols-2 gap-6">

                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-xl px-6 py-3 text-lg"
                />

                <input
                  type="tel"
                  placeholder="Phone #"
                  className="border rounded-xl px-6 py-3 text-lg"
                />

              </div>

              {/* Message */}
<textarea
  placeholder="Type a Message..."
  className="border rounded-xl px-6 py-4 text-lg resize-none h-[230px]"
></textarea>

              {/* Send */}
              <button
                type="submit"
                className="border rounded-xl px-8 py-3 text-xl w-fit"
              >
                Send
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact