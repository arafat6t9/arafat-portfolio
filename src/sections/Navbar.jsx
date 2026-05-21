export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-white text-2xl font-bold">
          Arafat
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Skills
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-cyan-400 cursor-pointer transition">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  )
}