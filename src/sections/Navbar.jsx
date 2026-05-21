import { useEffect, useState } from "react"

import { FaBars, FaTimes } from "react-icons/fa"

const links = [
  "About",
  "Skills",
  "Projects",
  "Photography",
  "Contact",
]

export default function Navbar() {

  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      const sections = document.querySelectorAll("section")

      sections.forEach((section) => {

        const top = window.scrollY
        const offset = section.offsetTop - 200
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (top >= offset && top < offset + height) {
          setActive(id)
        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white text-2xl font-bold">
          Arafat Chowdhury
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300">

          {links.map((link) => (

            <li key={link}>

              <a
                href={`#${link.toLowerCase()}`}
                className={`transition hover:text-cyan-400 ${
                  active === link.toLowerCase()
                    ? "text-cyan-400"
                    : ""
                }`}
              >
                {link}
              </a>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 border-t border-white/10"
            : "max-h-0"
        }`}
      >

        <ul className="flex flex-col px-6 py-4 bg-black/40 backdrop-blur-md text-gray-300">

          {links.map((link) => (

            <li key={link} className="py-4 border-b border-white/5">

              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`transition hover:text-cyan-400 ${
                  active === link.toLowerCase()
                    ? "text-cyan-400"
                    : ""
                }`}
              >
                {link}
              </a>

            </li>

          ))}

        </ul>

      </div>

    </nav>
  )
}