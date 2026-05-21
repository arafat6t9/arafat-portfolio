import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#050816] text-white flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tight">
          Arafat
        </h1>

        <p className="mt-6 text-cyan-400 text-xl md:text-3xl font-light">
          Engineer • Photographer • Developer
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          Building systems, capturing stories, and designing modern digital experiences.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <button className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-full font-semibold text-black">
            View Projects
          </button>

          <button className="border border-white/20 hover:border-cyan-400 transition px-6 py-3 rounded-full">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  )
}