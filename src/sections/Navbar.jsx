import { useEffect, useState } from "react"

import { FaBars, FaTimes } from "react-icons/fa"

const links = [
  "About",
  "Timeline",
  "Skills",
  "Projects",
  "Photography",
  "Contact",
]

export default function Navbar() {

  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {

    let lastScroll = 0

    const handleScroll = () => {

      const currentScroll = window.scrollY

      setVisible(currentScroll < lastScroll || currentScroll < 50)

      lastScroll = currentScroll

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

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 transition-transform duration-500 ${
        visible
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#home"
          className="text-white text-2xl font-bold hover:text-cyan-400 transition"
        >
          Arafat Chowdhury
        </a>

        <div className="hidden md:flex items-center gap-8">

          <ul className="flex gap-8 text-gray-300">

          {links.map((link) => (

            <li key={link}>

              <a
                href={`#${link.toLowerCase()}`}
                className={`transition relative hover:text-cyan-400 ${
                  active === link.toLowerCase()
                    ? "text-cyan-400"
                    : ""
                }`}
              >
                {link}

                {active === link.toLowerCase() && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400 rounded-full"></span>
                )}

              </a>

            </li>

          ))}

        </ul>

        <a
          href="/Arafat-Chowdhury-CV.pdf"
          target="_blank"
          className="px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition"
        >
          Download CV
        </a>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

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