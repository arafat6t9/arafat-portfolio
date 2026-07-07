import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import hero from "../assets/hero.png"

export default function Hero(){
 const mx=useMotionValue(0), my=useMotionValue(0)
 const sx=useSpring(mx,{stiffness:70,damping:20}), sy=useSpring(my,{stiffness:70,damping:20})
 const px=useTransform(sx,[-.5,.5],[-14,14]), py=useTransform(sy,[-.5,.5],[-10,10])
 const move=e=>{const r=e.currentTarget.getBoundingClientRect();mx.set((e.clientX-r.left)/r.width-.5);my.set((e.clientY-r.top)/r.height-.5)}
 return <section id="home" onMouseMove={move} className="home-hero min-h-screen flex items-center relative overflow-hidden px-6">
  <div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/>
  <div className="max-w-7xl mx-auto w-full pt-36 pb-20 grid lg:grid-cols-[1.25fr_.75fr] gap-16 items-center">
   <div className="relative z-10">
    <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="section-kicker">Engineer / Builder / Photographer</motion.p>
    <motion.h1 initial={{opacity:0,y:35,filter:'blur(8px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{delay:.12,duration:.9}} className="home-hero-title">I solve practical problems.<span>Across more than one medium.</span></motion.h1>
    <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}} className="max-w-3xl text-gray-300 text-xl md:text-2xl leading-relaxed mt-8">I’m Arafat Chowdhury — an electrical engineering professional in Bangladesh’s power sector who also builds digital systems and tells visual stories.</motion.p>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.42}} className="max-w-2xl text-gray-500 text-base md:text-lg leading-relaxed mt-5">My engineering career is documented in detail in my professional resume. This space is the wider picture: how I think, what I build, and what I see.</motion.p>
    <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.55}} className="flex flex-wrap gap-4 mt-10">
      <a href="#projects" className="premium-btn primary">Explore selected work</a><a href="/resume" className="premium-btn secondary">Engineering resume</a><a href="/creative-resume" className="premium-btn ghost">Creative CV →</a>
    </motion.div>
   </div>
   <motion.div style={{x:px,y:py}} initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{delay:.25,duration:.9}} className="relative hidden lg:block hero-portrait-wrap">
    <div className="portrait-grid-label">01 / MULTIDISCIPLINARY</div><div className="hero-photo-frame"><img src={hero} alt="Arafat Chowdhury"/></div>
    <div className="hero-role-card"><span>Current profession</span><strong>Deputy Manager</strong><p>Tender Sales · Power Sector</p><a href="/resume">Full career details →</a></div>
   </motion.div>
  </div>
  <div className="hero-discipline-line"><span>ENGINEERING PRECISION</span><span>DIGITAL CURIOSITY</span><span>VISUAL INSTINCT</span></div>
 </section>
}
