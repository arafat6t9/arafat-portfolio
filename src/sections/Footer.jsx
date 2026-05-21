import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Arafat
          </h2>

          <p className="text-gray-400 mt-2">
            Engineer • Photographer • Developer
          </p>
        </div>

        <div className="flex items-center gap-5 text-2xl text-gray-400">

          <a
            href="https://github.com/arafat6t9"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Arafat. All rights reserved.
      </div>

    </footer>
  )
}