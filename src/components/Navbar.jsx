import { useEffect, useRef, useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  return (
    <nav className="relative px-6 pt-4 pb-0 md:pt-12 md:pb-14">

      {/* DESKTOP / TABLET NAV */}
      <div className="hidden md:flex justify-center">
        <div className="flex gap-8 text-lg font-semibold">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        ref={menuRef}
        className="md:hidden"
      >

        {/* Hamburger Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="text-3xl leading-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full right-6 mt-2 flex flex-col items-center gap-2 bg-white border rounded-xl px-6 py-4 text-base font-semibold z-50">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>

            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a href="#process" onClick={() => setMenuOpen(false)}>
              Process
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar