import { motion } from "framer-motion"
const pillars=[
 {n:"01",title:"Tender & Commercial",text:"Bangladesh e-GP, bid strategy, GTP and compliance, BOQ and price schedules, OEM coordination and post-tender support."},
 {n:"02",title:"Electrical & Power",text:"Power generation, grid substations, transmission, distribution and electrical equipment supply with field and project experience."},
 {n:"03",title:"Automation & Development",text:"Excel/VBA automation, Laravel, React, Next.js and practical business systems built to solve real workflow problems."},
 {n:"04",title:"Creative & Visual",text:"Photography, graphics, branding and visual storytelling shaped by years of professional creative work."},
]
export default function About(){return <section id="about" className="py-32 px-6"><div className="max-w-7xl mx-auto"><motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
<p className="section-kicker">One career. Multiple disciplines.</p><h2 className="section-title max-w-5xl">I connect engineering, commercial strategy, technology and creativity.</h2>
<div className="grid lg:grid-cols-[.8fr_1.2fr] gap-14 mt-16"><div className="space-y-6 text-lg text-gray-400 leading-relaxed"><p className="text-gray-200 text-2xl leading-relaxed">My professional foundation is electrical engineering and Bangladesh’s power sector.</p><p>Since 2016, I have worked across project execution, technical documentation, tendering and business coordination. At Controlware, I progressed from Assistant Engineer to Senior Engineer and then Deputy Manager in Tender Sales.</p><p>Outside the conventional engineering path, I build automation tools and web products. Photography, music and design remain part of how I think, communicate and solve problems.</p></div><div className="grid sm:grid-cols-2 gap-5">{pillars.map(p=><div key={p.n} className="professional-card"><span className="text-cyan-400 text-sm font-bold">{p.n}</span><h3 className="text-2xl font-bold mt-5 mb-3">{p.title}</h3><p className="text-gray-400 leading-relaxed">{p.text}</p></div>)}</div></div>
</motion.div></div></section>}
