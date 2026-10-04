function Navbar() {
  return (
    <nav className="flex justify-center py-8">
      <div className="flex gap-8 text-lg font-semibold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar