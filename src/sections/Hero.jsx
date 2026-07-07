import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6">
      <div className="max-w-7xl mx-auto w-full pt-32 pb-20 grid lg:grid-cols-[1.35fr_.65fr] gap-14 items-center">
        <div className="relative z-10">
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="text-cyan-400 uppercase tracking-[.28em] text-sm mb-6">
            Power Sector • Tender Leadership • Creative Technology
          </motion.p>
          <motion.h1 initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="text-5xl md:text-7xl xl:text-8xl font-black leading-[.95] mb-8">
            Engineering precision.<br/><span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">Creative thinking.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="max-w-3xl text-gray-300 text-xl md:text-2xl leading-relaxed mb-5">
            I’m Arafat Chowdhury — Deputy Manager in Tender Sales, electrical engineering professional, automation builder and photographer.
          </motion.p>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} className="max-w-2xl text-gray-500 text-lg leading-relaxed mb-10">
            I work across Bangladesh’s power sector, techno-commercial bidding and e-GP tendering — then use code, design and visual storytelling to build better tools and digital experiences.
          </motion.p>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.5}} className="flex flex-wrap gap-4">
            <a href="#experience" className="px-7 py-4 rounded-full bg-cyan-400 text-slate-950 font-bold hover:shadow-[0_0_35px_rgba(34,211,238,.35)]">Explore my work</a>
            <a href="/Arafat-Professional-Resume.html" target="_blank" className="px-7 py-4 rounded-full border border-white/20 hover:border-cyan-400 text-white">View resume</a>
            <a href="#contact" className="px-7 py-4 rounded-full text-cyan-300 hover:bg-cyan-400/10">Let’s connect →</a>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.25,duration:.8}} className="relative hidden lg:block">
          <div className="absolute inset-0 bg-cyan-400/20 blur-[90px] rounded-full"/>
          <img src="/anime-logo.png" alt="Arafat Chowdhury" className="relative w-full max-w-[430px] mx-auto rounded-[3rem] border border-white/10 shadow-2xl"/>
          <div className="absolute -bottom-8 -left-10 bg-[#0b1022]/90 border border-white/10 backdrop-blur-xl rounded-2xl p-5 w-64">
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">Current role</p><p className="font-bold text-xl">Deputy Manager</p><p className="text-gray-400">Tender Sales · Power Sector</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
