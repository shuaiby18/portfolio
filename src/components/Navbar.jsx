function Navbar() {
  return (
    <nav className="flex justify-center py-8">
      <div className="flex gap-10 text-lg font-semibold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar