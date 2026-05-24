import { FaFacebook, FaLinkedin, FaFlickr } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 mt-20 bg-cyan-500/[0.02]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Arafat Chowdhury
          </h2>

          <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
            Building engineering systems, automation tools,
            modern web experiences, and cinematic visual stories
            through technology and creativity.
          </p>

          <p className="text-gray-400 mt-2">
            Engineer • Creative Technologist • Photographer
          </p>
        </div>

        <div className="flex items-center gap-5 text-2xl text-gray-400">

          <a
            href="https://www.flickr.com/photos/100247052@N07/"
            target="_blank"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            <FaFlickr />
          </a>

          <a
            href="https://www.facebook.com/arafat.dip.eee/"
            target="_blank"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/arafatdipee/"
            target="_blank"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="text-center text-gray-500 text-sm mt-12 space-y-2">

        <p>
          Based in Bangladesh • Available for freelance & collaborations
        </p>

      </div>
      
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Arafat Chowdhury • Designed & Developed by Arafat
      </div>

    </footer>
  )
}