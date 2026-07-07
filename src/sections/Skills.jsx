import { motion } from "framer-motion"
const groups=[
 {title:"Tender & Commercial",skills:["Bangladesh e-GP","Tender Analysis","Bid Planning","Techno-Commercial Bidding","GTP & Compliance","BOQ / Price Schedule","OEM Coordination","Contract Documentation","Business Development"]},
 {title:"Electrical & Power",skills:["Power Generation","Grid Substations","Transmission Lines","Distribution Utilities","Electrical Equipment Supply","Testing & Commissioning","Project Close-Out"]},
 {title:"Automation & Development",skills:["Excel VBA","Laravel","React","Next.js","JavaScript","PHP","WordPress","Tailwind CSS","Git & GitHub","Workflow Automation"]},
 {title:"Creative & Visual",skills:["Photography","Photoshop","Lightroom","Premiere Pro","After Effects","Graphic Design","Branding","Visual Storytelling","Music"]},
]
export default function Skills(){return <section id="skills" className="py-32 px-6"><div className="max-w-7xl mx-auto"><p className="section-kicker">Capabilities</p><h2 className="section-title">A multidisciplinary toolkit built around real work.</h2><div className="grid md:grid-cols-2 gap-6 mt-16">{groups.map((g,i)=><motion.div key={g.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="professional-card"><h3 className="text-2xl font-bold mb-7">{g.title}</h3><div className="flex flex-wrap gap-3">{g.skills.map(s=><span key={s} className="px-4 py-2 rounded-full bg-white/[.04] border border-white/10 text-gray-300 text-sm">{s}</span>)}</div></motion.div>)}</div></div></section>}
