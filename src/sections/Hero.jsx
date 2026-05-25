import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#050816] text-white flex items-center justify-center relative overflow-hidden">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src="/anime-logo.png"
        alt="Arafat Logo"
        className="w-40 h-40 md:w-52 md:h-52 mx-auto mb-10 rounded-full shadow-[0_0_60px_rgba(34,211,238,0.25)] border border-cyan-400/30 object-cover"
      />
      <div className="text-center z-10 px-6 max-w-5xl mx-auto">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-cyan-400 uppercase tracking-[0.3em] mb-6"
      >
        Engineer • Creative Technologist • Photographer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-6xl md:text-8xl font-black leading-none mb-8"
      >
        <span className="text-white">
          Arafat
        </span>

        <br />

        <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
          Chowdhury
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-3xl mx-auto text-gray-400 text-lg md:text-2xl leading-relaxed mb-12"
      >
        Building engineering systems, automation tools,
        modern digital experiences, and cinematic visual stories
        through technology and creativity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap justify-center gap-5"
      >

        <a
          href="#projects"
          className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400 transition"
        >
          Contact Me
        </a>

        <a
          href="/Arafat-Chowdhury-CV.pdf"
          target="_blank"
          className="px-8 py-4 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition"
        >
          Download CV
        </a>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center gap-6 mt-12 text-gray-400"
      >

        <a
          href="https://www.linkedin.com/in/arafatdipee"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/arafat6t9"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.flickr.com/photos/100247052@N07/"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          Flickr
        </a>

      </motion.div>

    </div>
    </section>
  )
}
