import { FaGithub, FaFacebook, FaLinkedin, FaFlickr } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 mt-20 bg-cyan-500/[0.02]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Arafat Chowdhury
          </h2>

          <p className="text-gray-400 mt-2">
            Engineer • Photographer • Developer
          </p>
        </div>

        <div className="flex items-center gap-5 text-2xl text-gray-400">

          <a
            href="https://www.flickr.com/photos/100247052@N07/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaFlickr />
          </a>

          <a
            href="https://www.facebook.com/arafat.dip.eee/"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/arafatdipee/"
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